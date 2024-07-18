"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleDeleteClick = async (e) => {
    e.stopPropagation();
    const response = await fetch(
      `https://66957d684bd61d8314cb71a8.mockapi.io/codio/product/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      setMessage("Ürün başarıyla silindi. Yönlendiriliyosunuz!");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      const data = await response.json();
      setMessage(`Hata: ${data.error}`);
    }
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
