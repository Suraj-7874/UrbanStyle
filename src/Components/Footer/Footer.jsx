import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-400 to-purple-500 text-white mt-6 mb-0 pb-0 font-serif shadow-2xl">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          <div className="space-y-6 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">UrbanStyle</h3>
            <p className="text-white text-base sm:text-md">
              Your one-stop destination for trendy fashion and lifestyle
              products. Discover the latest styles and exclusive deals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-500 transition">
                <svg
                  className="w-7 mt-2.5 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-red-500 transition">
                <svg
                  className="w-7 mt-2.5 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d=" M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.38-.88a.88" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-red-400 transition">
                <svg
                  className="w-7 mt-2.5 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-base sm:text-sm">
              <li>
                <Link to="/" className="hover:text-gray-900 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gray-900 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-gray-900 transition">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/bag" className="hover:text-gray-900 transition">
                  Bag
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Categories</h3>
            <ul className="space-y-2 text-base sm:text-md">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Men's Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Women's Fashion
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Beauty & Health
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">Contact Us</h3>
            <div className="space-y-2 text-base sm:text-sm">
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Survesuraj38@gmail.com
              </p>
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                +91 9011452576
              </p>
              <p className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                123 Fashion St, Style Pune City
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 pb-8 text-center text-sm sm:text-md">
          <p className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <span>&copy; 2025 UrbanStyle. All rights reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span>Privacy Policy</span>
            <span className="hidden sm:inline">|</span>
            <span>Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
