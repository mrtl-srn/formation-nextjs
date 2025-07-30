import React from "react";
import Link from "next/link";
import { ProductItem } from "@/components/ui/product-item";
import { getFlagshipProductFromDb } from "@/core/server/productService";

export const revalidate = 600;

const FlagshipPage: React.FC = async () => {
  const flagshipProduct = await getFlagshipProductFromDb();

  const timestamp = new Date().toString();

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <span>{timestamp}</span>
      <ProductItem product={flagshipProduct} />

      <Link className="link" href={"/"}>
        Back SPA
      </Link>
    </div>
  );
};

export default FlagshipPage;
