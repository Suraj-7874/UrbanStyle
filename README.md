# UrbanStyle

UrbanStyle is a modern, responsive e-commerce web application for fashion and lifestyle products. It features a beautiful UI, category-based product browsing, wishlist, cart, and a smooth checkout experience.

## Features
- **Product Grid:** Browse products by category, with one featured product per category. Click a product to see all items in that category.
- **Product Details:** View detailed information, images, reviews, and add to cart.
- **Wishlist:** Add/remove products to your wishlist.
- **Cart/Bag:** Add products to your bag, remove them, and proceed to checkout.
- **Checkout:** Place orders, print/download invoices, and see order history (if logged in).
- **Authentication:** Simple registration/login with localStorage persistence.
- **Responsive Design:** Looks great on mobile, tablet, and desktop.

## Folder Structure
```
src/
  Components/
    Product/
      ProductGrid.jsx        # Product grid and category logic
      ProductCard.jsx        # Individual product card
      ProductDetails.jsx     # Product details page
    Navbar/
    Footer/
    Slider/
  Pages/
    AuthContext.jsx         # Auth logic and context
    CartContext.jsx         # Cart logic and context
    WishlistContext.jsx     # Wishlist logic and context
    Checkout.jsx            # Checkout page
    PageNotFound.jsx        # 404 page
  App.jsx                   # Main app and routes
  main.jsx                  # Entry point
```

## How to Run Locally
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5174) in your browser.
4. live demo :- https://suraj-7874.github.io/UrbanStyle/

## Main Dependencies
- React 19+
- react-router 7+
- Tailwind CSS 4+

## Product & Category Grid Logic
- The grid shows one product per allowed category by default.
- Clicking a product shows all products in that category.
- A premium "Back to All Categories" button returns to the main grid.
- Search filters products by title in real time.

## UI/UX Highlights
- Modern gradients, shadows, and rounded corners throughout.
- Responsive layouts for all devices.
- Premium button styles and smooth transitions.
- Accessible navigation and clear feedback for actions.
![Homepage Screenshot](https://your-image-url.com/image.jpg)


## Special Notes
- **Authentication, cart, and wishlist** are stored in localStorage for demo purposes.
- **Product data** is fetched from [dummyjson.com](https://dummyjson.com/).
- No backend server is required for demo/testing.

---

Enjoy exploring UrbanStyle! For questions or contributions, open an issue or pull request.

---

## Maintainer / Contact
If you have any issues or questions, please contact:
- **Name:** Suraj
- **Email:** Survesuraj#8@gmail.com
