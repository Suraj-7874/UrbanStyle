import "./App.css";

import { Routes, Route } from "react-router";
import { useState } from "react";
import ProductGrid from "./Components/Product/ProductGrid";
import ProductDetails from "./Components/Product/ProductDetails";
import Login from "./Components/Navbar/Login";
import Bag from "./Components/Navbar/Bag";
import Wishlist from "./Components/Navbar/Wishlist";
import PageNotFound from "./Pages/PageNotFound";
import Layout from "./Components/Navbar/layout";
import ProductCategories from "./Components/Product/ProductCategories";
import Checkout from "./Pages/Checkout";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Routes>
        <Route
          element={
            <Layout onSearch={setSearchQuery} searchQuery={searchQuery} />
          }
        >
          <Route path="/" element={<ProductGrid search={searchQuery} />} />
          <Route path="/categories" element={<ProductCategories />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Bag" element={<Bag />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <div></div>
    </>
  );
}

export default App;
