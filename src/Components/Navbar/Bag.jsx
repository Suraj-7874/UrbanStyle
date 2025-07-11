import { useCart } from "../../Pages/CartContext";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useAuth } from "../../Pages/AuthContext";

const Bag = () => {
  const { cart, removeFromCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleOrderNow = () => {
    if (!user) {
      navigate("/Login");
    } else {
      navigate("/checkout");
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-6 sm:py-10 font-serif">
      <div className="max-w-3xl mx-auto px-2 sm:px-4 py-6 sm:py-8 bg-white/90 rounded-2xl shadow-2xl border border-blue-200">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 sm:gap-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 flex items-center gap-2">
            <svg
              className="w-7 h-7 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 0 0 7.48 19h9.04a2 2 0 0 0 1.83-1.3L21 13M7 13V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v7"
              />
            </svg>
            Your Bag
          </h2>
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded shadow transition font-semibold w-full sm:w-auto text-center"
          >
            Back to Home
          </Link>
        </div>
        {cart.length === 0 ? (
          <div className="text-center text-gray-500 py-12 text-base sm:text-lg">
            No items in bag.
          </div>
        ) : (
          <ul className="space-y-4">
            {cart.map((item, idx) => (
              <li
                key={idx}
                className="flex flex-col sm:flex-row items-center bg-white rounded-xl shadow-md border border-gray-200 p-3 sm:p-4 gap-2 sm:gap-4 hover:shadow-lg transition"
              >
                <img
                  src={item.thumbnail || item.images?.[0]}
                  alt={item.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded border border-blue-100 shadow-sm mb-2 sm:mb-0"
                />
                <div className="flex-1 w-full text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-semibold text-blue-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {item.brand}
                  </p>
                  <p className="text-blue-600 font-bold text-sm sm:text-base">
                    ₹{item.price}
                  </p>
                </div>
                <button
                  className="mt-2 sm:mt-0 sm:ml-4 bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-300 text-white px-3 sm:px-4 py-2 rounded shadow transition font-semibold w-full sm:w-auto"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <div className="sticky bottom-0 left-0 right-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-xl shadow-lg mt-8 sm:mt-10 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-blue-100">
            <div className="text-lg sm:text-xl font-bold text-blue-800">
              Total: <span className="text-green-600">₹{total}</span>
            </div>
            <button
              className="bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-300 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded shadow-xl transition text-base sm:text-lg tracking-wide w-full sm:w-auto"
              onClick={handleOrderNow}
            >
              Order Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bag;
