"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const DeleteButton = ( {id}) => {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleDeleteClick = async (e) => {
    e.stopPropagation();
    try {
      const response = await fetch(
        `https://66957d684bd61d8314cb71a8.mockapi.io/codio/product/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setMessage("Ürün başarıyla silindi");
        setTimeout(() => {
            router.push("/"); 
        }, 3000);
      } else {
        const data = await response.json();
        setMessage(`Hata: ${data.error}`);
      }
    } catch (error) {
      console.error("Silme işlemi sırasında bir hata oluştu:", error.message);
      setMessage("Silme işlemi sırasında bir hata oluştu");
    }
  };
  return (
    <>
      <button
        onClick={handleDeleteClick}
        className="border-2 rounded-md p-2 hover:bg-amber-300 mb-3"
      >
        Sil
      </button>
      {message && <p className="text-red-600">{message}</p>}
    </>
  );
};

export default DeleteButton;
