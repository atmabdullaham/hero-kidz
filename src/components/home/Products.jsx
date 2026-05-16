import { dbconnect } from "@/lib/dbConnect";
import ProductCard from "../cards/ProductCard";

const Products = async () => {
  let products = [];
  try {
    const collection = dbconnect("products");
    products = await collection.find({}).toArray();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-normal md:font-semibold mb-10">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products available
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
