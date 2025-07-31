import { Locale } from "@/components/ui/product-item";
import { StaticImageData } from "next/image";



export type Product = {
  pid: number;
  title: string;
  description: Record<Locale, string>;
  price: number;
  imgUrl: string | StaticImageData;
};

export const products: Product[] = [
  {
    pid: 1,
    title: "Professor Copperfield's Miracle Legumes",
    description: {
      fr: 'FR - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      en: 'EN - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    price: 42,
    imgUrl: "/products.jpg",
  },
  {
    pid: 2,
    title: "A ram of paper",
    description: {
      fr: 'FR - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      en: 'EN - Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    price: 12,
    imgUrl: "/paper.jpg",
  },
];