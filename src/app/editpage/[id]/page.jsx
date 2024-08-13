"use client";
import { useEffect, useState } from "react";
import EditPage from "@/components/EditPage";

const ProductEditPage = ({ params }) => {
  const { id } = params;
  const [productUpdate, setProductUpdate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await fetch(
          `https://66957d684bd61d8314cb71a8.mockapi.io/codio/product/${id}`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await res.json();
        setProductUpdate(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setError('Error loading product data.');
      }
    };

    fetchProductData();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!productUpdate) {
    return <p>Loading...</p>;
  }

  return <EditPage productUpdate={productUpdate} id={id} />;
};

export default ProductEditPage;
