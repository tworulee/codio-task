"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const CreateProduct = () => {
  const router = useRouter();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch(
      "https://66957d684bd61d8314cb71a8.mockapi.io/codio/product",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      const errorData = await response.json();
      console.error(`Error: ${errorData.error}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          Create a New Product
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Name:
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Marka:
            </label>
            <input
              {...register("brand", { required: "Brand is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            {errors.brand && (
              <p className="text-red-500">{errors.brand.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Fiyat:
            </label>
            <input
              type="number"
              {...register("price", { required: "Price is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Avatar URL:
            </label>
            <input
              {...register("avatar", { required: "Avatar URL is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            {errors.avatar && (
              <p className="text-red-500">{errors.avatar.message}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300">
              Oluşturulma Zamanı:
            </label>
            <input
              type="datetime-local"
              {...register("createdAt", { required: "Created At is required" })}
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            {errors.createdAt && (
              <p className="text-red-500">{errors.createdAt.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
