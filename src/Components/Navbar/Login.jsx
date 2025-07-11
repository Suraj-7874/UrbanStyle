import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../Pages/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const { user, login, logout, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (isRegister) {
      if (!name || !email || !password) {
        setError("All fields are required.");
        return;
      }
      const ok = register(name, email, password);
      if (!ok) {
        setError("User already exists. Please login.");
      }
    } else {
      const ok = login(email, password);
      if (!ok) {
        setError("Invalid email or password.");
      }
    }
  };

  if (user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex flex-col items-center justify-center font-serif px-2 sm:px-0">
        <div className="w-full flex justify-center mt-6">
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded shadow transition font-semibold text-center w-full max-w-xs sm:max-w-fit"
          >
            Back to Home
          </Link>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center min-h-[70vh] w-full">
          <div className="w-full max-w-md sm:max-w-lg md:w-[500px] bg-white/60 backdrop-blur-lg shadow-2xl rounded-3xl p-6 sm:p-10 md:p-16 m-4 sm:m-8 min-h-[520px] border border-blue-200 flex flex-col justify-center gap-8 sm:gap-10 overflow-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-10 gap-4 sm:gap-0">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-800 drop-shadow text-center sm:text-left">
                Welcome, {user.name || user.email}
              </h2>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-5 py-2 rounded-xl shadow font-semibold text-base sm:text-lg w-full sm:w-auto"
              >
                Logout
              </button>
            </div>
            <hr className="border-blue-100 mb-2 sm:mb-4" />
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-purple-700 text-center sm:text-left">
              Order History
            </h3>
            {user.orders && user.orders.length > 0 ? (
              <ul className="divide-y divide-blue-100">
                {user.orders.map((order, idx) => (
                  <li key={idx} className="py-3 sm:py-4">
                    <div className="text-blue-700 font-semibold text-sm sm:text-base">
                      Order ID: {order.orderId}
                    </div>
                    <div className="text-gray-500 text-xs sm:text-sm">
                      Date: {order.date}
                    </div>
                    <div className="text-green-700 font-bold text-sm sm:text-base">
                      Total: ₹{order.total}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mt-6 sm:mt-10 text-center">
                No orders yet.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex flex-col items-center justify-center font-serif px-2 sm:px-0">
      <div className="w-full flex justify-center mt-6">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded shadow transition font-semibold text-center w-full max-w-xs sm:max-w-fit"
        >
          Back to Home
        </Link>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center min-h-[70vh] w-full">
        <div className="w-full max-w-md sm:max-w-lg md:w-[500px] bg-white/60 backdrop-blur-lg shadow-2xl rounded-3xl p-6 sm:p-10 md:p-16 m-4 sm:m-8 min-h-[520px] border border-blue-200 flex flex-col justify-center gap-8 sm:gap-10 overflow-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center text-blue-800 tracking-tight drop-shadow">
            {isRegister ? "Register" : "Login"}
          </h2>
          <hr className="border-blue-500" />
          {error && (
            <div className="text-red-500 mb-4 text-center font-semibold text-base sm:text-lg">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {isRegister && (
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border border-blue-200 rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 shadow-sm"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-blue-200 rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 shadow-sm"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full border border-blue-200 rounded-xl px-4 sm:px-5 py-2.5 sm:py-3 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 shadow-sm"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 sm:py-4 rounded-2xl shadow-xl transition-all duration-200 text-lg sm:text-xl tracking-wide mt-2 drop-shadow-lg"
            >
              {isRegister ? "Register" : "Login"}
            </button>
          </form>
          <p className="text-center text-sm sm:text-base text-gray-600 ">
            {isRegister ? (
              <>
                Already have an account?
                <button
                  onClick={() => {
                    setIsRegister(false);
                    setError("");
                  }}
                  className="text-blue-600 hover:underline ml-1 font-semibold"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                Don’t have an account?
                <button
                  onClick={() => {
                    setIsRegister(true);
                    setError("");
                  }}
                  className="text-blue-600 hover:underline ml-1 font-semibold"
                >
                  Register
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
