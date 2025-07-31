import { Locale } from "@/components/ui/product-item";
import { Product } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export type ProductCardProps = {
  product: Product;
  locale?: Locale;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  locale = "fr",
}) => {
  const href = `/products/${product.pid}`;

  return (
    <Link
      key={product.title}
      className="group flex flex-col items-center gap-3 border border-gray-200 hover:border-pink-400 hover:shadow-pink-400 rounded-sm shadow-sm p-2"
      href={href}
    >
      <span className="font-bold group-hover:text-pink-400">
        {product.title}
      </span>
      <Image
        className="max-w-64 max-h-40"
        width={256}
        height={160}
        src={product.imgUrl}
        alt="img"
      />
      <span>{product.description[locale]}</span>
    </Link>
  );
};
