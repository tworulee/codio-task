"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const EditPage = ({productUpdate}) => {
    const router = useRouter();

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = {
        name: e.target.name.value,
        brand: e.target.brand.value,
        price: e.target.price.value,
        avatar: e.target.avatar.value,
        createAt: e.target.createdAt.value,
      };
  
      const response = await fetch(`https://66957d684bd61d8314cb71a8.mockapi.io/codio/product/${productUpdate.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        router.push('/');
      }
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Update Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Name:</label>
          <input
            type="text"
            name="name"
            value={productUpdate.name}
            required
            className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Marka:</label>
          <input
            type="text"
            name="brand"
            value={productUpdate.brand}
            required
            className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Fiyat:</label>
          <input
            type="number"
            name="price"
            value={productUpdate.price}
            required
            className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Avatar URL:</label>
          <input
            type="text"
            name="avatar"
            value={productUpdate.avatar}
            required
            className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Oluşturulma Zamanı:</label>
          <input
            type="datetime-local"
            name="createAt"
            value={productUpdate.createdAt}
            required
            className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
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
  )
}

export default EditPage
