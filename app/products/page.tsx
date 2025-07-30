import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/lib/products";

const ProductsPage: React.FC = ({}) => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1>Products</h1>
      <div className="grid grid-cols-2 items-center gap-10 ">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
