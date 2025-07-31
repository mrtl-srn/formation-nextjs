import { MenuCard } from "@/components/ui/menu-card";
import { menu } from "@/lib/home-menu";
import { use } from "react";

type HomeProps = {
  searchParams: Promise<{ referrer: string }>;
};

export default function Home({ searchParams }: HomeProps) {
  console.log({ searchParams });

  const { referrer } = use(searchParams);

  return (
    <div className="font-sans grid grid-rows-[250px_1fr_10px] items-center justify-items-center min-h-screen ">
      <header className="flex flex-col items-center gap-10">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-pink-600">Amazing!</span>
        </h1>
        <span>Referrer: {referrer}</span>
      </header>

      <main className="flex flex-col items-start sm:items-start">
        <div className="grid grid-cols-2 items-center gap-10 ">
          {menu.map((m) => (
            <MenuCard key={m.title} item={m} />
          ))}
        </div>
      </main>
    </div>
  );
}
