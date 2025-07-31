import React from "react";
import Form from "next/form";

const PreOrderForm = () => {
  return (
    <Form action="/api/preorder" className="w-full mx-auto">
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>

      <button
        type="submit"
        className="text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </Form>
  );
};

export default PreOrderForm;
