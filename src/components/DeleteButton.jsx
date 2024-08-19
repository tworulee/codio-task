"use client";
import { useState } from "react";
import { deleteProduct } from "@/utils/api";

const DeleteButton = ({ idxsd }) => {
  const [message, setMessage] = useState("");

  const handleDeleteClick = async (e) => {
    e.stopPropagation();
     await deleteProduct(idxsd);

    setMessage("Ürün başarıyla silindi.");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  return (
    <>
      <button
        onClick={handleDeleteClick}
        className="border-2 rounded-md p-2 hover:border-gray-700 mb-3"
      >
        Sil
      </button>
      {message && <p className="text-red-600">{message}</p>}
    </>
  );
};

export default DeleteButton;
