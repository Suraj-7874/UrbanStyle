import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";
import { CartProvider } from "./Pages/CartContext";
import { WishlistProvider } from "./Pages/WishlistContext";
import { AuthProvider } from "./Pages/AuthContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <WishlistProvider>
        <AuthProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </AuthProvider>
      </WishlistProvider>
    </StrictMode>
    ,
  </BrowserRouter>
);
