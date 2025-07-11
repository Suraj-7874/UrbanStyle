import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useCart } from '../../Pages/CartContext';
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);
  const fetchSingleProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  if (!product) return <p className="text-center py-8">Loading...</p>;

  return (
    <div className=' font-serif'>
    
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 bg-gray-300 hover:bg-blue-200  hover:border-1 hover:border-black text-black px-4 py-2 rounded shadow-xl transition m-5"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>
      <div className="bg-gradient-to-r from-blue-100 to-purple-200 rounded-xl max-w-5xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="flex gap-4 mt-4 overflow-x-auto">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="gallery"
                  className="h-20 w-20 object-cover rounded border border-gray-300"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-semibold text-blue-600">Brand: {product.brand}</p>
            <p className="text-lg font-bold">₹ {product.price}</p>
            <p className="text-green-600">Discount: {product.discountPercentage}%</p>
            <p className="text-yellow-500">⭐ {product.rating}</p>
            <p className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
              {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
            </p>
            <button
              className={`mt-4 ${added ? 'bg-green-500' : 'bg-yellow-500 hover:bg-yellow-600'} text-white px-6 py-2 rounded transition-all duration-200`}
              onClick={() => {
                addToCart(product);
                setAdded(true);
              }}
              disabled={added}
            >
              {added ? 'Added' : 'Add to Cart'}
            </button>
            {added && (
              <button
                className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded shadow transition"
                onClick={() => navigate('/Bag')}
              >
                Go to Bag
              </button>
            )}
          </div>
        </div>
        
        <div className="mt-10 bg-gray-50 rounded-lg p-6 shadow">
          <h2 className="text-xl font-bold mb-4  bg-gray-200 rounded-lg p-2">More Details</h2>
          <div className="flex flex-wrap gap-6 mb-4">
            {product.tags && product.tags.length > 0 && (
              <div>
                <span className="font-semibold">Tags:</span> {product.tags.join(', ')}
              </div>
            )}
            {product.sku && (
              <div><span className="font-semibold">SKU:</span> {product.sku}</div>
            )}
            {product.weight && (
              <div><span className="font-semibold">Weight:</span> {product.weight}g</div>
            )}
            {product.dimensions && (
              <div><span className="font-semibold">Dimensions:</span> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</div>
            )}
            {product.warrantyInformation && (
              <div><span className="font-semibold">Warranty:</span> {product.warrantyInformation}</div>
            )}
            {product.shippingInformation && (
              <div><span className="font-semibold">Shipping:</span> {product.shippingInformation}</div>
            )}
            {product.returnPolicy && (
              <div><span className="font-semibold">Return Policy:</span> {product.returnPolicy}</div>
            )}
            {product.minimumOrderQuantity && (
              <div><span className="font-semibold">Min. Order:</span> {product.minimumOrderQuantity}</div>
            )}
            {product.meta && product.meta.barcode && (
              <div><span className="font-semibold">Barcode:</span> {product.meta.barcode}</div>
            )}
          </div>
          
          {product.reviews && product.reviews.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 bg-gray-200 rounded-lg p-2">Reviews & Comments</h3>
              <ul className="space-y-3">
                {product.reviews.map((review, idx) => (
                  <li key={idx} className="bg-gray-100 rounded p-3 shadow flex flex-col md:flex-row md:items-center gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500 ">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                      <span className="font-semibold">{review.reviewerName}</span>
                      <span className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString()}</span>
                    </div>
                    <div className="text-gray-700 ml-2">{review.comment}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
