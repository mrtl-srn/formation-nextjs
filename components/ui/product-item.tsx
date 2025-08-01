import { Button } from "@/components/ui/button";
import { InfoButton } from "@/components/ui/info-button";
import PreOrderForm from "@/components/ui/preorder-form";
import { Product } from "@/lib/products";
import Image from "next/image";

export type Locale = "fr" | "en";

export type ProductItemProps = {
  product: Product;
  qty?: number;
  locale?: Locale;
};

export const ProductItem = ({
  product,
  locale = "fr",
  qty,
}: ProductItemProps) => {
  console.log("ProductItem - product", product);

  return (
    <div className="flex flex-col max-w-xl p-6 border border-gray-200 rounded-lg shadow-sm items-center gap-5">
      <h1 className="text-5xl font-bold text-center">{product.title}</h1>
      <h3 className="text-center">{product.description[locale]}</h3>
      <h3 className="text-center">{product.price}€</h3>
      {!product.preorder && (
        <div className="flex gp-2">
          <Button>Buy one {qty && `(${qty} items left)`}</Button>
          <InfoButton>More info</InfoButton>
        </div>
      )}

      <Image src={product.imgUrl} alt="" width={500} height={350} />

      {product.preorder && (
        <>
          <h2 className="block text-gray-700 text-2xl font-bold mb-6 text-center">
            Renseignez votre email pour précommander
          </h2>
          <PreOrderForm />
        </>
      )}
    </div>
  );
};

export const ProductItemSkeleton = () => {
  return (
    <div className="flex flex-col max-w-xl p-6 border border-gray-200 rounded-lg shadow-sm items-center gap-5 animate-pulse">
      <div className="h-5 w-full bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
      <div className="h-2.5 w-full bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
      <div className="h-2.5 w-10 bg-gray-200 rounded-full dark:bg-gray-700  mb-4"></div>
      <div className="flex gap-2">
        <div className="h-10 w-28 bg-gray-200 rounded-md dark:bg-gray-700  mb-4"></div>
        <div className="h-10 w-28 bg-gray-200 rounded-md dark:bg-gray-700  mb-4"></div>
      </div>
      <div className="flex items-center justify-center h-48 w-full mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
    </div>
  );
};
