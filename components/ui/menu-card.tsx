import { Menu } from "@/lib/home-menu";
import Image from "next/image";
import Link from "next/link";

export type MenuCardProps = {
  item: Menu;
};

export const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <Link
      key={item.title}
      className="group flex flex-col items-center gap-3 border border-gray-200 hover:border-pink-400 hover:shadow-pink-400 rounded-sm shadow-sm p-2"
      href={item.href}
    >
      <span className="font-bold group-hover:text-pink-400">{item.title}</span>
      <Image
        className="max-w-64 max-h-40"
        width={256}
        height={160}
        src={item.imgUrl}
        alt="img"
      />
      <span>{item.description}</span>
    </Link>
  );
};
