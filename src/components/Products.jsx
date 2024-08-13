"use client";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://66957d684bd61d8314cb71a8.mockapi.io/codio/product"
        );
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSortChange = (e) => {
    const selectedSortType = e.target.value;
    setSortType(selectedSortType);
    sortProducts(selectedSortType);
  };

  const sortProducts = (selectedSortType) => {
    let sortedProducts = [...products];
    switch (selectedSortType) {
      case "name_asc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name_desc":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price_asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setProducts(sortedProducts);
  };

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error.message}</p>;

  return (
    <div>
      <div className="flex items-center mb-4  ">
        <div className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 w-full max-w-sm mx-auto">
          <select
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium"
            onChange={handleSortChange}
            value={sortType}
          >
            <option value="">Sıralama</option>
            <option value="name_asc">A'dan Z'ye</option>
            <option value="name_desc">Z'den A'ya</option>
            <option value="price_asc">Fiyat Artan</option>
            <option value="price_desc">Fiyat Azalan</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {products.map((dt) => (
          <Product dt={dt} key={dt.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
