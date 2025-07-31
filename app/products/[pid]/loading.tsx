import { ProductItemSkeleton } from "@/components/ui/product-item";

const LoadingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <ProductItemSkeleton />
    </div>
  );
};

export default LoadingPage;
