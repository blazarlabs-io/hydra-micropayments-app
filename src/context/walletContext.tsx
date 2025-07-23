import { getAdaUsdTicker } from "@/services/coinwatch/client";
import { createContext, useContext, useEffect, useState } from "react";

interface ContextInterface {
  adaBalance: number;
  adaConversionRate: number;
  usdmBalance: number;
  usdmConversionRate: number;
  selectedCurrency: "ADA" | "USDM";
  updateSelectedCurrency: (currency: "ADA" | "USDM") => void;
}

const WalletContext = createContext<ContextInterface>({
  adaBalance: 0.0,
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

  useEffect(() => {
    getAdaUsdTicker()
      .then((data) => {
        setAdaConversionRate(data.rate);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <WalletContext.Provider
      value={{
        adaBalance,
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
