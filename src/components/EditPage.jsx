"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { updateProduct } from "@/utils/api";

const EditPage = ({ productUpdate, id }) => {
  const router = useRouter();

  // React Hook Form'u initialize ediyoruz
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: productUpdate?.name || "",
      brand: productUpdate?.brand || "",
      price: productUpdate?.price || "",
      avatar: productUpdate?.avatar || "",
      createdAt: productUpdate?.createdAt || "",
    },
  });

  const onSubmit = async (data) => {
    await updateProduct(id, data);

    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          Update Product
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
              Brand:
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
              Price:
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
              Created At:
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
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
