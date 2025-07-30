"use client";

import { ProductItem } from "@/components/ui/product-item";
import { products } from "@/lib/products";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

type ProductPageProps = {
  params: Promise<{ pid: string }>;
};

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const { pid } = use(params);
  const productId = parseInt(pid);

  const product = products.find((p) => p.pid === productId);

  if (!product) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Link className="link" href={"/"}>
        Back to home
      </Link>
      <ProductItem product={product} />
    </div>
  );
};

export default ProductPage;
