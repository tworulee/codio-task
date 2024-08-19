"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addProduct } from "@/utils/api";

const CreateProduct = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    await addProduct(data);

    setMessage("Ürün başarıyla oluşturuldu.");
    setTimeout(() => {
      router.push("/");
    }, 2000);
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
          <div className="flex justify-center items-center">
            {message && <p className="text-green-600 text-center">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
