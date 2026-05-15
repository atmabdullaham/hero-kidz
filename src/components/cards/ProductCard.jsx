// ProductCard.jsx

import Image from "next/image";

const ProductCard = ({ product }) => {
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div className="w-auto rounded-2xl  border border-gray-200">
      {/* Product Image */}
      <div className="relative">
        <Image
          src={product.image}
          alt={product.title}
          width={80}
          height={40}
          className="w-full"
        />
        {/* Discount Badge */}
        <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
          -{product.discount}%
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800">{product.bangla}</h2>

        <p className="text-sm text-gray-500 mt-1">{product.title}</p>

        {/* Ratings */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-yellow-500 text-lg">⭐</span>
          <span className="font-semibold">{product.ratings}</span>
          <span className="text-gray-500 text-sm">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold text-green-600">
            ৳{discountedPrice}
          </span>

          <span className="text-gray-400 line-through">৳{product.price}</span>
        </div>

        {/* Sold */}
        <p className="text-sm text-gray-500 mt-2">Sold: {product.sold} pcs</p>

        {/* Description */}
        {/* <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          {product.description}
        </p> */}

        {/* Features */}
        {/* <div className="mt-4">
          <h3 className="font-semibold text-gray-800 mb-2">Key Features:</h3>

          <ul className="space-y-2">
            {product.info.map((item, index) => (
              <li
                key={index}
                className="text-sm text-gray-600 flex items-start gap-2"
              >
                <span className="text-green-500">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div> */}

        {/* Button */}
        <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
