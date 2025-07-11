import { useEffect, useState } from "react";
import ProductCard from "../Product/ProductCard";
import ProductDetails from "../Product/ProductDetails";
import { Route, Routes } from "react-router";
import Front from "../Slider/Front";
const ProductGrid = ({ search }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const allowedCategories = [
    "beauty",
    "fragrances",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "sunglasses",
    "tops",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches",
  ];
  const fetchAllProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    setAllProducts(data.products);
  };
  const filtered = allProducts.filter(
    (product) =>
      allowedCategories.includes(product.category) &&
      product.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetchAllProducts();
  }, []);

  let displayProducts;
  if (selectedCategory) {
    displayProducts = allProducts.filter(
      (product) =>
        product.category === selectedCategory &&
        allowedCategories.includes(product.category) &&
        product.title.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    displayProducts = allowedCategories
      .map((cat) =>
        allProducts.find(
          (product) =>
            product.category === cat &&
            product.title.toLowerCase().includes(search.toLowerCase())
        )
      )
      .filter(Boolean);
  }
  return (
    <div className="px-2 sm:px-7 font-serif">
      {!search && <Front />}
      <div className="bg-gradient-to-r from-blue-400 to-purple-300 mb-3 rounded-2xl">
        {selectedCategory && (
          <div className="flex justify-center mb-4">
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-200 text-base sm:text-lg"
              onClick={() => setSelectedCategory(null)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All Categories
            </button>
          </div>
        )}
        <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center mt-7">
          {selectedCategory ? `Showing: ${selectedCategory}` : "Our Categories"}
        </h1>
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3.5">
          {displayProducts.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              onClick={() => setSelectedCategory(product.category)}
            />
          ))}
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProductGrid;
