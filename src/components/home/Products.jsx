import products from "@/data/toys.json";
import ProductCard from "../cards/ProductCard";
const Products = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-normal md:font-semibold mb-10">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
