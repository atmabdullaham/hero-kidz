import Products from "@/components/home/Products";
import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import { Suspense } from "react";

function ProductsLoading() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-normal md:font-semibold mb-10">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[...Array(9)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

const ProductsPage = () => {
  return (
    <div>
      <Suspense fallback={<ProductsLoading />}>
        <Products />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
