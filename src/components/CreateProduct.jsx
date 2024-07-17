"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateProduct = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [avatar, setAvatar] = useState("");
  const [createAt, setCreateAt] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://66957d684bd61d8314cb71a8.mockapi.io/codio/product",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, brand, price, avatar, createAt }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      setMessage("Product created successfully!");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      setMessage(`Error: ${data.error}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Create a New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Marka:</label>
          <input 
            type="text" 
            value={brand} 
            onChange={(e) => setBrand(e.target.value)} 
            required 
            className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Fiyat:</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required 
            className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Avatar URL:</label>
          <input 
            type="text" 
            value={avatar} 
            onChange={(e) => setAvatar(e.target.value)} 
            required 
            className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Oluşturulma Zamanı:</label>
          <input 
            type="text" 
            value={createAt} 
            onChange={(e) => setCreateAt(e.target.value)} 
            required 
            className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Create Product
        </button>
      </form>
      {message && <p className="mt-4 text-center text-gray-900 dark:text-gray-100">{message}</p>}
    </div>
  </div>
  );
};

export default CreateProduct;
