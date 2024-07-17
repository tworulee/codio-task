import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getProduct = async (id) => {
  const res = await fetch(
    `https://66957d684bd61d8314cb71a8.mockapi.io/codio/product/${id}`
  );
  return await res.json();
};

const Page = async ({ params }) => {
  const id = params.id;
  const productDetail = await getProduct(id);

  return (
    <div className="border-2 rounded-md shadow-lg max-w-md mx-auto p-4">
      <div className="flex items-center justify-center ml-1 mt-2">
        <Image
          className="rounded"
          width={380}
          height={400}
          src={productDetail.avatar}
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center m-4">
        <h1 className="font-black">{productDetail.name}</h1>
        <h1>Marka: {productDetail.brand}</h1>
        <h1>Fiyat: {productDetail.price}</h1>
        <h1>Oluşturulma Zamanı: {productDetail.createdAt}</h1>
      </div>
      <div className="flex items-center justify-center gap-8">
        <EditButton productDetail={productDetail} />
        <DeleteButton id={id} />
      </div>
    </div>
  );
};

export default Page;
