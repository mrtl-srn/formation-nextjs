import React from "react";
import flagship from "@/public/flagship.jpg";
import Link from "next/link";
import { ProductItem } from "@/components/ui/product-item";

type FlagshipPageProps = {};

const FlagshipPage: React.FC<FlagshipPageProps> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <ProductItem
        product={{
          pid: 1,
          title: "Our flagship product",
          description: "FERRARI ENZO V12, 6.0L de 660 ch",
          price: 100000,
          imgUrl: flagship,
        }}
      />

      <Link className="link" href={"/"}>
        Back SPA
      </Link>
    </div>
  );
};

export default FlagshipPage;
