import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../client";
import { USERS } from "../constants";
import { DbResponse } from "@/types/db";

const user = {
  get: async (uid: string): Promise<DbResponse> => {
    try {
      // * GET USER
      const userRef = doc(db, USERS, uid);
      const userDoc = await getDoc(userRef);

      return {
        data: userDoc.data(),
        error: null,
        code: 200,
      };
    } catch (error) {
      return { data: null, error, code: 500 };
    }
  },
  update: async (uid: string, data: any): Promise<DbResponse> => {
    try {
      const userRef = doc(db, USERS, uid);
      await setDoc(userRef, data, { merge: true });

      return {
        data: null,
        error: null,
        code: 200,
      };
    } catch (error) {
      return { data: null, error, code: 500 };
    }
  },
};

export { user };
