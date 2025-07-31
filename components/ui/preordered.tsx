"use client";

import { useSearchParams } from "next/navigation";

export const Preordered: React.FC = () => {
  const searchParams = useSearchParams();

  const success = searchParams.get("success");

  return success ? (
    <div
      className="p-4 mb-4 text-2xl text-green-700 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
      role="alert"
    >
      <span className="font-medium">Success!</span> Product pre ordered
      successfully
    </div>
  ) : null;
};
