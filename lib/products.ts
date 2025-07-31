import { Locale } from "@/components/ui/product-item";
import { StaticImageData } from "next/image";



export type Product = {
  pid: number;
  title: string;
  description: Record<Locale, string>;
  price: number;
  imgUrl: string | StaticImageData;
  preorder?: boolean;
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
    preorder: false,
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
    preorder: false,
  },
  {
    pid: 3,
    title: "iToaster",
    description: {
      fr: "Le toaster qui grille vos tranches de pain avec style !",
      en: "The toaster that toasts your bread slices in style!",
    },
    price: 49.99,
    imgUrl: "/itoaster.jpeg",
    preorder: true,
  },
];