// Skeleton Loader Component
const ProductSkeleton = () => {
  return (
    <div className="w-full rounded-2xl border border-gray-200 overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-64 bg-gray-300"></div>

      <div className="p-5">
        {/* Bangla Title Skeleton */}
        <div className="h-5 bg-gray-300 rounded w-4/5 mb-2"></div>

        {/* English Title Skeleton */}
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>

        {/* Rating Skeleton */}
        <div className="flex gap-2 items-center mb-4">
          <div className="h-4 w-12 bg-gray-300 rounded"></div>
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>

        {/* Price Skeleton */}
        <div className="flex gap-3 items-center mb-4">
          <div className="h-7 w-28 bg-gray-300 rounded"></div>
          <div className="h-5 w-16 bg-gray-200 rounded"></div>
        </div>

        {/* Description Skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        </div>

        {/* Features Header */}
        <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>

        {/* Features List Skeleton */}
        <div className="space-y-2 mb-4">
          {[1, 2].map((item) => (
            <div key={item} className="flex gap-2 items-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <div className="h-3 bg-gray-200 rounded flex-1"></div>
            </div>
          ))}
        </div>

        {/* Button Skeleton */}
        <div className="w-full h-10 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
