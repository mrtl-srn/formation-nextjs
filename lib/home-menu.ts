import { StaticImageData } from "next/image";

export type Menu = {
  title: string;
  imgUrl: string | StaticImageData;
  description: string;
  href: string;
};

export const menu: Menu[] = [
  {
    title: "Flagship Product",
    imgUrl: "/flagship.jpg",
    description: "Our topselling product. you can't beat it",
    href: "/products/flagship",
  },
  {
    title: "Discover ou products",
    imgUrl: "/products.jpg",
    description: "Access the list of all our products",
    href: "/products",
  },
  {
    title: "Buy a spaceship",
    imgUrl: "/spaceship.jpg",
    description: "For your nexts holidays, think big, go to Mars!",
    href: "/products/spaceship",
  },
  {
    title: "Buy a weird ring",
    imgUrl: "/ring.jpg",
    description: "More a fantasy person? Get ther and back again!",
    href: "/products/ring",
  },
];