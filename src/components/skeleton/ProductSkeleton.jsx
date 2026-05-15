// Skeleton Loader Component
const ProductSkeleton = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-72 bg-gray-300"></div>

      <div className="p-5">
        {/* Title */}
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>

        {/* Rating */}
        <div className="flex gap-2 mb-4">
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
        </div>

        {/* Price */}
        <div className="flex gap-3 mb-4">
          <div className="h-6 w-24 bg-gray-300 rounded"></div>
          <div className="h-5 w-16 bg-gray-200 rounded"></div>
        </div>

        {/* Description */}
        <div className="space-y-2 mb-5">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          <div className="h-4 w-32 bg-gray-300 rounded"></div>

          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex gap-2 items-center">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="h-12 bg-gray-300 rounded-xl"></div>
      </div>
    </div>
  );
};

// Actual Product Card

export default ProductSkeleton;
