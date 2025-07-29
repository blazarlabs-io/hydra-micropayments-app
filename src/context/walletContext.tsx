import { useWalletRegistration } from "@/hooks/useWalletRegistration";
import { db } from "@/lib/firebase/client";
import { getAdaUsdTicker } from "@/services/coinwatch/client";
import { doc, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";
import { USERS } from "@/lib/firebase/services/constants";

interface ContextInterface {
  isWalletRegistered: boolean;
  adminWalletAddress: string;
  adaAddress: string;
  adaBalance: number;
  getBalance: () => any;
  adaConversionRate: number;
  usdmBalance: number;
  usdmConversionRate: number;
  selectedCurrency: "ADA" | "USDM";
  updateSelectedCurrency: (currency: "ADA" | "USDM") => void;
}

const WalletContext = createContext<ContextInterface>({
  isWalletRegistered: false,
  adminWalletAddress: "",
  adaAddress: "",
  adaBalance: 0.0,
  getBalance: () => {},
  adaConversionRate: 0.35,
  usdmBalance: 0.0,
  usdmConversionRate: 1.0,
  selectedCurrency: "ADA",
  updateSelectedCurrency: () => {},
});

export const useWallet = () => {
  const context = useContext<ContextInterface>(WalletContext);
  if (context === undefined) {
    throw new Error("useWallet must be used as within a Provider");
  }
  return context;
};

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const { isRegistered } = useWalletRegistration();
  const { user } = useAuth();

  const [isWalletRegistered, setIsWalletRegistered] = useState<boolean>(false);
  const [adminWalletAddress, setAdminWalletAddress] = useState<string>(
    process.env.EXPO_PUBLIC_ADMIN_WALLET_ADDRESS as string
  );
  const [adaAddress, setAdaAddress] = useState<string>(
    process.env.EXPO_PUBLIC_ADA_WALLET_ADDRESS as string
  );
  const [adaBalance, setAdaBalance] = useState<number>(640.0);
  const [usdmBalance, setUsdmBalance] = useState<number>(0.0);
  const [selectedCurrency, setSelectedCurrency] = useState<"ADA" | "USDM">(
    "ADA"
  );
  const [adaConversionRate, setAdaConversionRate] = useState<number>(0.35);
  const [usdmConversionRate, setUsdmConversionRate] = useState<number>(1.0);

  const updateSelectedCurrency = (currency: "ADA" | "USDM") => {
    setSelectedCurrency(currency);
  };

  const getBalance = async (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        const ngrokUrl = "http://192.168.18.4:5000";
        const res = await fetch(
          `${ngrokUrl}/query-funds?address=${adaAddress}`
        );
        const data = await res.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  useEffect(() => {
    setIsWalletRegistered(isRegistered);
    console.log("isRegistered", isRegistered);
  }, [isRegistered]);

  useEffect(() => {
    // * GET ADA TICKER
    getAdaUsdTicker()
      .then((data) => {
        setAdaConversionRate(data.rate);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (adaAddress) {
      console.info("[GET-BALANCE]", adaAddress);
      getBalance()
        .then((data) => {
          console.log("[QUERY-FUNDS]", data);
          setAdaBalance(data.totalInL2 / 1000000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [adaAddress]);

  useEffect(() => {
    let unsubsUserData: any = null;
    if (user && db) {
      // firestore snapshot of user
      unsubsUserData = onSnapshot(doc(db, USERS, user?.uid), (doc) => {
        console.log("Current data: ", doc.data());
      });
    }

    return () => {
      if (unsubsUserData) {
        unsubsUserData();
      }
    };
  }, [user, db]);

  return (
    <WalletContext.Provider
      value={{
        isWalletRegistered,
        adminWalletAddress,
        adaAddress,
        adaBalance,
        getBalance: () => {},
        adaConversionRate,
        usdmBalance,
        usdmConversionRate,
        selectedCurrency,
        updateSelectedCurrency,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
