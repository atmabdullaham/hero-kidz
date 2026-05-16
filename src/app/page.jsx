import Banner from "@/components/home/Banner";
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
        {[...Array(6)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center space-y-20">
      <section>
        <Banner />
      </section>
      <section>
        <Suspense fallback={<ProductsLoading />}>
          <Products />
        </Suspense>
      </section>
    </div>
  );
}
