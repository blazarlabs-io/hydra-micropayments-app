import { AuthProvider } from "./authContext";
import { ExchangeProvider } from "./exchangeContext";
import { WalletProvider } from "./walletContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <WalletProvider>
        <ExchangeProvider>{children}</ExchangeProvider>
      </WalletProvider>
    </AuthProvider>
  );
};
