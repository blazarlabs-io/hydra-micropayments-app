import { useAuth } from "@/context/authContext";
import { db } from "@/lib/firebase/services/db";
import { useEffect, useState } from "react";

export const useWalletRegistration = () => {
  const { user } = useAuth();
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  useEffect(() => {
    if (user && db) {
      db.user.get(user?.uid as string).then((response) => {
        if (response.data) {
          console.log("XXXXX", response);
          setIsRegistered(true);
        } else {
          setIsRegistered(false);
        }
      });
    }
  }, [db, user]);

  return {
    isRegistered,
    registerWallet: () => {},
  };
};
