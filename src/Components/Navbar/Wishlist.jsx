import React from "react";
import { useWishlist } from "../../Pages/WishlistContext";
import { useCart } from "../../Pages/CartContext";
import { Link } from "react-router";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="max-w-3xl mx-auto px-2 sm:px-4 py-6 sm:py-8 font-serif">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-3 sm:gap-0">
        <h2 className="text-xl sm:text-2xl font-bold text-center sm:text-left w-full sm:w-auto">
          Your Wishlist
        </h2>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded shadow transition w-full sm:w-auto text-center"
        >
          Back to Home
        </Link>
      </div>
      {wishlist.length === 0 ? (
        <div className="text-center text-gray-500 py-12 text-base sm:text-lg">
          No items in wishlist.
        </div>
      ) : (
        <ul className="space-y-4">
          {wishlist.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow p-3 sm:p-4 gap-2 sm:gap-4"
            >
              <img
                src={item.thumbnail || item.images?.[0]}
                alt={item.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded border mb-2 sm:mb-0"
              />
              <div className="flex-1 w-full text-center sm:text-left">
                <h3 className="text-base sm:text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.brand}</p>
                <p className="text-blue-600 font-bold text-sm sm:text-base">
                  ₹{item.price}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 sm:px-4 py-2 rounded shadow transition w-full sm:w-auto"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 py-2 rounded shadow transition w-full sm:w-auto"
                  onClick={() => toggleWishlist(item)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
