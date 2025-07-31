import { Locale, ProductItem } from "@/components/ui/product-item";
import { getProductQuantity } from "@/core/server/productService";
import { products } from "@/lib/products";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: Promise<{ pid: string }>;
};

export const dynamic = "force-dynamic";

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { pid } = await params;
  const productId = parseInt(pid);

  const product = products.find((p) => p.pid === productId);

  const headersList = await headers();
  const acceptLanguage = headersList.get("Accept-Language");
  const locale = (acceptLanguage?.slice(0, 2) || "fr") as Locale;

  console.log("ProductPage - product", product);
  console.log("ProductPage - acceptLanguage", acceptLanguage);
  console.log("ProductPage - locale", locale);

  if (!product) {
    return notFound();
  }

  const qty = await getProductQuantity(product.pid);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Link className="link" href="/">
        Back to home
      </Link>
      <ProductItem product={product} locale={locale} qty={qty} />
    </div>
  );
};

export default ProductPage;
