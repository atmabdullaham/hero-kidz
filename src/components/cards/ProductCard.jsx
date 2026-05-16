// ProductCard.jsx

import Image from "next/image";

const ProductCard = ({ product }) => {
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="w-full rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <div className="relative w-full h-64 bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="w-full h-full object-cover"
        />
        {/* Discount Badge */}
        <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
          -{product.discount}%
        </span>
        {/* Sold Badge */}
        <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {product.sold} sold
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {product.bangla}
        </h2>

        <p className="text-sm text-gray-600 mt-1 line-clamp-1">
          {product.title}
        </p>

        {/* Ratings */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-yellow-500 text-lg">⭐</span>
          <span className="font-semibold text-sm">{product.ratings}</span>
          <span className="text-gray-500 text-xs">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold text-green-600">
            ৳{Math.round(discountedPrice)}
          </span>
          <span className="text-gray-400 line-through text-sm">
            ৳{product.price}
          </span>
        </div>

        {/* Short Description */}
        {product.description && (
          <p className="text-xs text-gray-600 mt-3 line-clamp-2">
            {typeof product.description === "string"
              ? product.description.split("\n")[0]
              : product.description}
          </p>
        )}

        {/* Key Features */}
        {product.info && product.info.length > 0 && (
          <div className="mt-4 space-y-1">
            <p className="text-xs font-semibold text-gray-700">Key Features:</p>
            <ul className="text-xs text-gray-600 space-y-1">
              {product.info.slice(0, 2).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="line-clamp-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Button */}
        <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3 rounded-lg transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
