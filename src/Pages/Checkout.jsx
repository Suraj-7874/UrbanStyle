import { useState, useRef, useEffect } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router";
import { useAuth } from "./AuthContext";

const generateOrderId = () =>
  "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase();

const Checkout = () => {
  const { cart } = useCart();
  const { user: authUser, addOrder } = useAuth();
  const [user, setUser] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    payment: "COD",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderInfo, setOrderInfo] = useState(null);
  const [orderId, setOrderId] = useState("");
  const confirmationRef = useRef();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    if (!authUser) {
      navigate("/Login");
    }
  }, [authUser, navigate]);

  useEffect(() => {
    if (authUser && authUser.email && !user.email) {
      setUser((prev) => ({ ...prev, email: authUser.email }));
    }
  }, [authUser, user.email]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    const id = generateOrderId();
    const order = {
      user,
      cart,
      total,
      date: new Date().toLocaleString(),
      orderId: id,
    };
    setOrderId(id);
    setOrderInfo(order);
    setOrderPlaced(true);
    addOrder(order);
  };

  const handlePrint = () => {
    if (confirmationRef.current) {
      const printContents = confirmationRef.current.innerHTML;
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();
    }
  };

  const handleDownload = () => {
    if (orderInfo) {
      const invoice = `Order ID: ${orderInfo.orderId}\nDate: ${
        orderInfo.date
      }\nName: ${orderInfo.user.name}\nAddress: ${
        orderInfo.user.address
      }\nPhone: ${orderInfo.user.phone}\nEmail: ${
        orderInfo.user.email
      }\nPayment: ${orderInfo.user.payment}\n\nItems:\n${orderInfo.cart
        .map((item) => `- ${item.title}: ₹${item.price}`)
        .join("\n")}\n\nTotal: ₹${orderInfo.total}`;
      const blob = new Blob([invoice], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `UrbanStyle_Invoice_${orderInfo.orderId}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  useEffect(() => {
    if (orderPlaced) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [orderPlaced, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex flex-col items-center justify-center font-serif px-2 sm:px-0 py-4 sm:py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 bg-gray-300 hover:bg-blue-200 hover:border-1 hover:border-black text-black px-3 sm:px-4 py-2 rounded shadow-xl transition m-3 sm:m-5 font-semibold w-full max-w-xs sm:max-w-fit"
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
        Back
      </button>
      <div className="max-w-2xl w-full mx-auto p-3 sm:p-6 bg-white/60 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl border border-blue-100">
        {!orderPlaced ? (
          <>
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Checkout</h2>
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-purple-700">
                Order Summary
              </h3>
              <ul className="divide-y divide-blue-100">
                {cart.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between py-2 text-sm sm:text-base"
                  >
                    <span className="text-blue-700 font-semibold">
                      {item.title}
                    </span>
                    <span className="text-green-700 font-bold">
                      ₹{item.price}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between font-bold mt-2 text-lg sm:text-xl">
                <span>Total:</span>
                <span className="text-green-700">₹{total}</span>
              </div>
            </div>
            <form className="space-y-3 sm:space-y-4">
              <input
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full border border-blue-200 rounded p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
                placeholder="Full Name"
                required
              />
              <input
                name="address"
                value={user.address}
                onChange={handleChange}
                className="w-full border border-blue-200 rounded p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
                placeholder="Address"
                required
              />
              <input
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full border border-blue-200 rounded p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
                placeholder="Phone"
                required
              />
              <input
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full border border-blue-200 rounded p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
                placeholder="Email"
                required
              />
              <select
                name="payment"
                value={user.payment}
                onChange={handleChange}
                className="w-full border border-blue-200 rounded p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
              >
                <option value="COD">Cash on Delivery</option>
                <option value="UPI">UPI</option>
                <option value="Card">Credit/Debit Card</option>
              </select>
              <button
                type="button"
                onClick={handleOrder}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white font-bold py-2 sm:py-3 rounded shadow-lg transition-all duration-200 text-base sm:text-lg tracking-wide"
              >
                Place Order
              </button>
            </form>
          </>
        ) : (
          <div ref={confirmationRef} className="animate-fade-in">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2 sm:gap-0">
              <h2 className="text-xl sm:text-2xl font-bold text-green-700">
                Order Placed Successfully!
              </h2>
              <span className="bg-gray-200 text-gray-700 px-2 sm:px-3 py-1 rounded text-xs font-mono">
                Order ID: {orderInfo.orderId}
              </span>
            </div>
            <p className="mb-2 text-sm sm:text-base">
              Thank you for your order,{" "}
              <span className="font-semibold">{orderInfo.user.name}</span>!
            </p>
            <p className="mb-4 text-xs sm:text-sm text-gray-500">
              Order Date: {orderInfo.date}
            </p>
            <h3 className="font-semibold mb-2 text-purple-700 text-sm sm:text-base">
              Order Summary
            </h3>
            <ul className="divide-y divide-blue-100">
              {orderInfo.cart.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between py-2 text-sm sm:text-base"
                >
                  <span className="text-blue-700 font-semibold">
                    {item.title}
                  </span>
                  <span className="text-green-700 font-bold">
                    ₹{item.price}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold mt-2 text-lg sm:text-xl">
              <span>Total:</span>
              <span className="text-green-700">₹{orderInfo.total}</span>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold mb-2 text-purple-700 text-sm sm:text-base">
                Shipping Information
              </h3>
              <p className="text-xs sm:text-base">
                <span className="font-semibold">Name:</span>{" "}
                {orderInfo.user.name}
              </p>
              <p className="text-xs sm:text-base">
                <span className="font-semibold">Address:</span>{" "}
                {orderInfo.user.address}
              </p>
              <p className="text-xs sm:text-base">
                <span className="font-semibold">Phone:</span>{" "}
                {orderInfo.user.phone}
              </p>
              <p className="text-xs sm:text-base">
                <span className="font-semibold">Email:</span>{" "}
                {orderInfo.user.email}
              </p>
              <p className="text-xs sm:text-base">
                <span className="font-semibold">Payment Mode:</span>{" "}
                {orderInfo.user.payment}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sticky bottom-0 bg-white/80 p-3 sm:p-4 rounded-xl shadow-lg border-t border-blue-100">
              <button
                onClick={handlePrint}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded shadow transition font-semibold w-full sm:w-auto"
              >
                Print Bill
              </button>
              <button
                onClick={handleDownload}
                className="bg-purple-500 hover:bg-purple-600 text-white px-3 sm:px-4 py-2 rounded shadow transition font-semibold w-full sm:w-auto"
              >
                Download Invoice
              </button>
            </div>
            <p className="mt-6 text-center text-gray-500 text-xs sm:text-sm">
              You will be redirected to the home page in 10 seconds...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
