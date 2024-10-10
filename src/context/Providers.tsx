import { AuthProvider } from "./authContext";
import { WalletProvider } from "./walletContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <WalletProvider>{children}</WalletProvider>
    </AuthProvider>
  );
};
