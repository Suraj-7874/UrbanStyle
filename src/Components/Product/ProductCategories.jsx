import { useEffect, useState } from "react";

const ProductCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load categories");
        setLoading(false);
      });
  }, []);

  return (
    <div className="px-2 sm:px-6 py-6 sm:py-8 font-serif">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        Categories
      </h1>
      {error && (
        <div className="text-red-500 mb-4 text-center text-sm sm:text-base">
          {error}
        </div>
      )}
      {loading && (
        <div className="text-center text-base sm:text-lg">Loading...</div>
      )}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className="bg-blue-100 hover:bg-blue-200 px-3 sm:px-4 py-2 rounded capitalize text-xs sm:text-base mb-2"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
