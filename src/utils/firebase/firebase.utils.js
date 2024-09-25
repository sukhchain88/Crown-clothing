<<<<<<< HEAD
=======
import { getAnalytics } from "firebase/analytics";
>>>>>>> 96cc9a6d24c1dca6338699b3e08a658d37aa7a2d
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  // signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFoT160xGD_3SqJycWRjr7WC-eVIkku20",
  authDomain: "crown-clothing-c39b5.firebaseapp.com",
  projectId: "crown-clothing-c39b5",
  storageBucket: "crown-clothing-c39b5.appspot.com",
  messagingSenderId: "481420928275",
  appId: "1:481420928275:web:f0b77c4400ca08e2d566e6",
  measurementId: "G-SL61HY7CGW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
=======
const analytics = getAnalytics(app);
>>>>>>> 96cc9a6d24c1dca6338699b3e08a658d37aa7a2d

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocument = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapShort = await getDocs(q);
  const categoryMap = querySnapShort.docs.reduce((acc, docSnapShort) => {
    const { title, items } = docSnapShort.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalSetting
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const snapShort = await getDoc(userDocRef);

  if (!snapShort.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalSetting,
      });
    } catch (err) {
      console.log("createUserDocumentFromAuth", err);
    }
  }
  return userDocRef;
};

export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
