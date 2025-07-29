import { Alert, PermissionsAndroid, Platform } from "react-native";
import { BleManager } from "react-native-ble-plx";
import BluetoothStateManager from "react-native-bluetooth-state-manager";
import { Buffer } from "buffer";

export class BleClient {
  // Properties
  private manager: any;

  // Constructor
  constructor() {
    this.manager = new BleManager();
  }

  calculateDistance(
    referenceRSSI: number,
    pathLossExponent: number,
    rssi: number
  ) {
    const distance = Math.pow(
      10,
      (referenceRSSI - rssi) / (10 * pathLossExponent)
    );
    return parseFloat(distance.toFixed(2));
  }

  async requestPermissions(): Promise<boolean> {
    if (Platform.OS === "ios") {
      return true;
    }
    if (
      Platform.OS === "android" &&
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    ) {
      const apiLevel = parseInt(Platform.Version.toString(), 10);

      if (apiLevel < 31) {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      }
      if (
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN &&
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT
      ) {
        const result = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]);

        return (
          result["android.permission.BLUETOOTH_CONNECT"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          result["android.permission.BLUETOOTH_SCAN"] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          result["android.permission.ACCESS_FINE_LOCATION"] ===
            PermissionsAndroid.RESULTS.GRANTED
        );
      }
    }

    console.log("Permission have not been granted");
    return false;
  }

  // Method to get the full name
  async scan(name: string, serviceOptions: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.manager.startDeviceScan(null, null, (error: any, device: any) => {
        // console.log("Scanning...");

        if (error) {
          // * Handle error (scanning will be stopped automatically)
          console.log("ERROR:", error.message);
          // * [BleError: BluetoothLE is powered off]
          if (error.message === "BluetoothLE is powered off") {
            this.manager.stopDeviceScan();
            BluetoothStateManager.requestToEnable()
              .then((result) => {
                this.scan(name, serviceOptions);
              })
              .catch((error) => {
                console.log(error.message);
                Alert.alert(
                  "Bluetooth is off",
                  "Please turn on your bluetooth and try again"
                );
              });
          }
          reject(error.message);
        } else {
          if (
            device?.name === name &&
            this.calculateDistance(-59, 2, device.rssi) <= 0.05
          ) {
            console.log(this.calculateDistance(-59, 2, device.rssi));
            // * Stop scanning as it's not necessary if you are scanning for one device
            this.manager.stopDeviceScan();
            // * Connect to the device
            device
              .connect()
              .then(async (device: any) => {
                // * Dicover all services
                try {
                  await device.discoverAllServicesAndCharacteristics();

                  // * Read address characteristic
                  const value1Characteristic =
                    await device.readCharacteristicForService(
                      serviceOptions.SERVICE_UUID,
                      serviceOptions.VALUE1_CHARACTERISTIC_UUID
                    );

                  // * Read value characteristic
                  const value2Characteristic =
                    await device.readCharacteristicForService(
                      serviceOptions.SERVICE_UUID,
                      serviceOptions.VALUE2_CHARACTERISTIC_UUID
                    );

                  // * Convert to base64
                  const value1 = atob(value1Characteristic.value);
                  const value2 = atob(value2Characteristic.value);

                  console.log(
                    "\n [RECEIVED CHARACTERISTICS]",
                    value1Characteristic,
                    value2Characteristic,
                    value1,
                    value2
                  );

                  // * RESPOND TO BEACON BY WRITING RESPONSE CHARACTERISTIC
                  // const res =
                  //   await device.writeCharacteristicWithResponseForService(
                  //     serviceOptions.SERVICE_UUID,
                  //     serviceOptions.RESPONSE_CHARACTERISTIC_UUID,
                  //     btoa("200")
                  //   );

                  // * Disconnect
                  // if (device.isConnected()) device.cancelConnection();
                  resolve({
                    value1,
                    value2,
                    device,
                  });
                } catch (error) {
                  reject(error);
                }
              })
              .catch((error: any) => {
                console.log("Connection error", error);
                reject(error);
              });
          }
        }
      });
    });
  }

  writeToCharacteristic = async (
    device: any,
    SERVICE_UUID: string,
    WRITE_CHAR_UUID: string,
    message: string
  ) => {
    if (!device) return;

    try {
      const services = await device.services();
      for (const service of services) {
        if (service.uuid.toLowerCase() === SERVICE_UUID.toLowerCase()) {
          const characteristics = await service.characteristics();

          characteristics.forEach((char: any) => {
            console.log("\n\n\n===========================");
            console.log("Name:", char);
            console.log("UUID:", char.uuid);
            console.log("Properties:", char.properties); // 👈 Asegúrate que incluya 'WriteWithResponse'
            console.log("===========================\n\n\n");
          });

          const char = characteristics.find(
            (c: any) => c.uuid.toLowerCase() === WRITE_CHAR_UUID.toLowerCase()
          );

          if (char) {
            const base64Data = Buffer.from(message, "utf8").toString("base64");

            await device.writeCharacteristicWithResponseForService(
              SERVICE_UUID,
              WRITE_CHAR_UUID,
              base64Data
            );
            console.log("✅ Data written:", message);
          } else {
            console.warn("❌ Write characteristic not found");
          }
        }
      }
    } catch (err) {
      console.error("Write failed:", err);
    }
  };
}
