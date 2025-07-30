import { StaticImageData } from "next/image";

export type Product = {
  pid: number;
  title: string;
  description: string;
  price: number;
  imgUrl: string | StaticImageData;
};

export const products: Product[] = [
  {
    pid: 1,
    title: "Professor Copperfield's Miracle Legumes",
    description: "",
    price: 42,
    imgUrl: "/products.jpg",
  },
  {
    pid: 2,
    title: "A ram of paper",
    description: "",
    price: 12,
    imgUrl: "/paper.jpg",
  },
];