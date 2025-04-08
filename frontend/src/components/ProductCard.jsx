import { Heart, ShoppingCart, Store } from 'lucide-react'

const ProductCard = ({ image, name, description, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />

      {/* Product Info */}
      <div className="mt-4 space-y-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-lg font-bold text-green-600">₹{price}</p>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-between items-center">
        <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
          <ShoppingCart size={16} /> Add to Cart
        </button>
        <button className="text-red-500 hover:text-red-600">
          <Heart />
        </button>
        <button className="text-green-500 hover:text-green-600">
          <Store />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
