import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
  FIREBASE_APIKEY,
  FIREBASE_AUTHDOMAIN,
  FIREBASE_MEASUREMENT,
  FIREBASE_PROJECTID,
  FIREBASE_BUCKET,
  FIREBASE_SENDERID,
  FIREBASE_APPID,
} from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_BUCKET,
  messagingSenderId: FIREBASE_SENDERID,
  appId: FIREBASE_APPID,
  measurementId: FIREBASE_MEASUREMENT,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
