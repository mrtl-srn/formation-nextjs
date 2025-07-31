import { PropsWithChildren } from "react";

export const Button: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <button
      type="button"
      className="text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none "
    >
      {children}
    </button>
  );
};
