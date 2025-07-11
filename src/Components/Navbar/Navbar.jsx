import { Link } from "react-router";
import { useCart } from "../../Pages/CartContext";
const Navbar = ({ onSearch }) => {
  const { cart } = useCart();
  return (
    <>
      <div className="bg-gray-100 text-black shadow-xl flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <h1 className="font-bold pt-4 sm:pt-5 pl-4 sm:pl-20 font-serif text-xl sm:text-2xl flex items-center gap-2 w-full sm:w-auto">
          <img className="h-8" src="/src/assets/logo.svg" alt="logo" />
          UrbanStyle
        </h1>
        <nav className="flex flex-col sm:flex-row gap-3 sm:gap-8 p-3 sm:p-4 sm:pr-20 font-medium font-serif tracking-wide items-center w-full sm:w-auto">
          <div className="relative flex items-center w-full max-w-full sm:max-w-sm md:max-w-md mb-2 sm:mb-0">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <img
                className="h-5 w-5"
                src="/src/assets/search .svg"
                alt="search"
              />
            </span>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-2xl pl-10 pr-10 sm:pr-32 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200 text-base placeholder-gray-500 bg-white transition-all duration-200"
              placeholder="Search for product"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <Link to="/Wishlist" className="flex flex-col items-center group">
            <svg
              className="h-6 mb-1 transition-colors duration-200 group-hover:text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                className="transition-colors duration-200"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
            <span className="text-sm">Wishlist</span>
          </Link>

          <Link
            to="/Bag"
            className="relative flex flex-col items-center hover:text-yellow-400"
          >
            <img className="h-6 mb-1" src="/src/assets/bag.svg" alt="bag" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {cart.length}
              </span>
            )}
            <span className="text-sm">Bag</span>
          </Link>

          <Link
            to="/Login"
            className="flex flex-col items-center hover:text-yellow-400"
          >
            <img
              className="h-6 mb-1"
              src="/src/assets/profile.svg"
              alt="login"
            />
            <span className="text-sm">Login</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
