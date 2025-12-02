import { useWalletRegistration } from "@/hooks/useWalletRegistration";
import { db } from "@/lib/firebase/client";
import { getAdaUsdTicker, getBtcUsdTicker } from "@/services/coinwatch/client";
import { doc, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";
import { USERS } from "@/lib/firebase/services/constants";
import { ASSET_UNITS } from "@/constants/assetUnits";
import { Transaction } from "@/types/db";

export type CurrencyType = "ADA" | "USDM" | "WBTC";

interface ContextInterface {
  isWalletRegistered: boolean;
  adminWalletAddress: string;
  adaAddress: string;
  adaBalance: number;
  getBalance: () => any;
  adaConversionRate: number;
  usdmBalance: number;
  usdmConversionRate: number;
  wbtcBalance: number;
  wbtcConversionRate: number;
  selectedCurrency: CurrencyType;
  updateSelectedCurrency: (currency: CurrencyType) => void;
  transactions: Transaction[];
}

const WalletContext = createContext<ContextInterface>({
  isWalletRegistered: false,
  adminWalletAddress: "",
  adaAddress: "",
  adaBalance: 0.0,
  wbtcBalance: 0.0,
  getBalance: () => {},
  adaConversionRate: 0.35,
  wbtcConversionRate: 1.0,
  usdmBalance: 0.0,
  usdmConversionRate: 1.0,
  selectedCurrency: "ADA",
  updateSelectedCurrency: () => {},
  transactions: [],
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
  const [wbtcBalance, setWbtcBalance] = useState<number>(0.0);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>("ADA");
  const [adaConversionRate, setAdaConversionRate] = useState<number>(0.35);
  const [usdmConversionRate, setUsdmConversionRate] = useState<number>(1.0);
  const [wbtcConversionRate, setWbtcConversionRate] = useState<number>(1.0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const updateSelectedCurrency = (currency: CurrencyType) => {
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

    getBtcUsdTicker()
      .then((data) => {
        setWbtcConversionRate(data.rate);
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
          console.log(
            "\n\n[QUERY-FUNDS]",
            JSON.stringify(data, null, 2),
            "\n\n"
          );
          const adaBalanceL1 = data.totalInL1[ASSET_UNITS.ada] / 1000000 || 0;
          const usdmBalanceL1 = data.totalInL1[ASSET_UNITS.usdm] || 0;
          const wbtcBalanceL1 = data.totalInL1[ASSET_UNITS.wbtc] || 0;
          const adaBalanceL2 = data.totalInL2[ASSET_UNITS.ada] / 1000000 || 0;
          const usdmBalanceL2 = data.totalInL2[ASSET_UNITS.usdm] || 0;
          const wbtcBalanceL2 = data.totalInL2[ASSET_UNITS.wbtc] || 0;

          setUsdmBalance(() => usdmBalanceL1 + usdmBalanceL2);
          setAdaBalance(() => adaBalanceL1 + adaBalanceL2);
          setWbtcBalance(() => wbtcBalanceL1 + wbtcBalanceL2);

          setTransactions(() => [...data.fundsInL1, ...data.fundsInL2]);

          console.log("\n\n=================================");
          console.log("[ADA-BALANCE]", adaBalanceL1 + adaBalanceL2);
          console.log("[USDM-BALANCE]", usdmBalanceL1 + usdmBalanceL2);
          console.log(
            "[WBTC-BALANCE]",
            (wbtcBalanceL1 + wbtcBalanceL2) / 100000000
          );

          console.log("=================================\n\n");
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
        wbtcBalance,
        wbtcConversionRate,
        selectedCurrency,
        updateSelectedCurrency,
        transactions,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
