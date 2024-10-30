import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { useState } from "react";
import LoginAndSignUp from "./components/LoginAndSignUp";
import { FirebaseProvider } from "./context/Firebase";

function App() {
  const existingProduct = JSON.parse(localStorage.getItem("cartProduct")) || [];
  const [cartProduct, setCartProduct] = useState(existingProduct);

  const productCount = cartProduct.reduce((acc, el) => {
    return acc + el.amount;
  }, 0);


  return (
    <FirebaseProvider>
      <LoginAndSignUp productCount={productCount} />
      <Outlet context={[cartProduct, setCartProduct]} />
      <Footer />
    </FirebaseProvider>
  );
}

export default App;
