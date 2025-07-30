"use client";

import { usePathname } from "next/navigation";

const menu = [
  { title: "Home", href: "/" },
  { title: "Flagship", href: "/products/flagship" },
];

export const Navbar = () => {
  const pn = usePathname();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Amazing
          </span>
        </a>

        <div className="block w-auto" id="navbar-default">
          <ul className="font-medium flex  p-0 border-b border-b-gray-100 rounded-lg  flex-row space-x-8 bg-white ">
            {menu.map((m) => {
              const active = pn === m.href;

              return (
                <li key={m.href}>
                  <a
                    href={m.href}
                    className={`block py-2 px-3 link  ${
                      active ? "border-b-2 border-b-pink-500  " : ""
                    }`}
                    aria-current="page"
                  >
                    {m.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
