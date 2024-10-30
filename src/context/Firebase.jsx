import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc, where, query, getDocs} from "firebase/firestore"

export const FirebaseContext = createContext(); // create context

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYX-z2J1FtnAcjGi7atIYrb0_hHQNvWMk",
  authDomain: "main-8342a.firebaseapp.com",
  projectId: "main-8342a",
  storageBucket: "main-8342a.appspot.com",
  messagingSenderId: "321548973377",
  appId: "1:321548973377:web:bf74726c0554a54e6b9dc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FirebaseProvider = ({ children }) => {
  const Auth = getAuth(app); //instance of auth

  //sign up user
  const userSingUp = async ({ name, email, password }) => {
    try {
      await createUserWithEmailAndPassword(Auth, email, password);
      return { success: true };
    } catch {
      return { success: false };
    }
  };

  //login user
  const userLogin = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(Auth, email, password);
      return { success: true };
    } catch {
      return { success: false };
    }
  };

  //check user is login or not
  const userIsLogin = () => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(
        Auth,
        (user) => {
          if (user) {
            resolve({ login: true });
          } else {
            resolve({ login: false });
          }
        },
        (error) => reject(error),
      ); // Catch any errors here if needed
    });
  };

  // logout
  const userLogout = () => {
    signOut(Auth);
  };

  const fireStore = getFirestore(app)

  //store user Detail i fireStore
  const storeUserData = async({name,email}) =>{
   try{
    const userData = await addDoc(collection(fireStore, 'userDetails'),{
      name: name,
      email: email
   })
   console.log('saved user detail');
   }catch{
    console.log('not save user detail');
   }

}

  //store Product data in fireStore
  const storeProductData = async(productData,path) =>{
    try{
      const collectionRef = collection(fireStore,'userDetails',path,'products')

      for (const product of productData) {

        const q = query(collectionRef,where('currantTime', '==', product.currantTime))
        const snapshot = await getDocs(q) 

        if(snapshot.empty){
         await addDoc(collectionRef,product)
         console.log('added',product);
        }
        else{
          console.log('dublicat',product);
        }
    } 
  }catch (error) {
    console.log('Data not saved:', error);
  }
}

  //get user data from fireStore
  const getUserData = async({email}) =>{
    try{
      const userDetailsRef = collection(fireStore, 'userDetails') //reference of userDetails
    const q = query(userDetailsRef, where('email', '==' , email))

    const snapshot = await getDocs(q)

    if(snapshot.empty){
      console.error('data not match')
      return null
  }else{
     return snapshot.docs.map(doc => doc)
  }
    }catch{
      console.log('data not get')
      return null
    }
  }

 //get productData 
  const getProductData = async(path) =>{
    try{

      const productsRef = collection(fireStore, "userDetails", path, "products");
      const querySnapshot = await getDocs(productsRef)

    return querySnapshot.docs.map(doc => ({
        ...doc.data()
      }));
    }catch{
      console.log('not product data ???');
    }
  }

  //setting order detail in local storage
  const storeProductsInLocalStorage = async() =>{
    const productDataPath = JSON.parse(localStorage.getItem("userDetail")) //getting path

    const products = await getProductData(productDataPath.path) //getting product data

    const order = products || [] //getting product data 
    localStorage.setItem('order',JSON.stringify(order)) //storing product data
  }

  return (
    <FirebaseContext.Provider
      value={{
        userSingUp,
        userLogin,
        userIsLogin,
        userLogout,
        storeUserData,
        getUserData,
        getProductData,
        storeProductData,
        storeProductsInLocalStorage
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
