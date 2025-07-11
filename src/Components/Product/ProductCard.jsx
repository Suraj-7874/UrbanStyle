import React from "react";
import { Link } from 'react-router';
import { useWishlist } from "../../Pages/WishlistContext"; 

const ProductCard = ({ product, onClick }) => {
  const { toggleWishlist, isWishlisted } = useWishlist();

  return (
    <div
      className="relative bg-white shadow-md rounded-lg p-3 sm:p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group cursor-pointer"
      onClick={onClick}
    >
      <button
        className="absolute top-3 right-3 z-10 transition-transform duration-200 group-hover:scale-125"
        onClick={(e) => {
          e.stopPropagation();
          toggleWishlist(product);
        }}
      >
        {isWishlisted(product.id) ? (
          <span role="img" aria-label="liked" className="text-red-500 text-2xl animate-pulse">❤️</span>
        ) : (
          <span role="img" aria-label="not liked" className="text-gray-400 text-2xl group-hover:text-red-400 transition-colors duration-200"> 
            <img
              className="h-8 mb-1 filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-200"
              src="./src/assets/wishlist.svg"
              alt="wishlist"
            />
          </span>
        )}
      </button>
      <div className="overflow-hidden rounded">
        <img
          src={product.thumbnail|| product.images?.[0]}
          alt={product.title}
          className="w-full h-48 sm:h-64 md:h-80 object-cover rounded transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h2 className="mt-2 text-base sm:text-lg font-semibold group-hover:text-blue-700 transition-colors duration-200">{product.title}</h2>
      <p className="text-gray-600 text-xs sm:text-sm">{product.brand}</p>
      <p className="text-blue-600 font-bold text-sm sm:text-md mt-1">₹ {product.price}</p>
      <p className="text-xs sm:text-sm text-green-600">
        {product.discountPercentage}% off
      </p>
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white font-semibold py-2 sm:py-2.5 px-3 sm:px-4 rounded shadow transition-all duration-200 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;