"use client";
import Image from "next/image";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { useEffect, useState } from "react";

const Product = ({ dt }) => {
  const [productDetail, setProductDetail] = useState([]);

  const idxsd = dt.id;
  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(
        `https://66957d684bd61d8314cb71a8.mockapi.io/codio/product/${dt.id}`
      );
      const data = await res.json();
      setProductDetail(data);
    };

    getProduct();
  }, []);

  return (
    <div className="  border-2 rounded-md shadow-lg mb-5 ">
      <div className=" min-w-[390px] ml-3 mt-2">
        <Image
          alt="abstract"
          className=" rounded"
          width={380}
          height={400}
          src={dt.avatar}
        />
      </div>
      <div className="text-center m-4 ">
        <h1 className="font-black"> {dt.name}</h1>
        <h1>Marka: {dt.brand}</h1>
        <h1>Fiyat: {dt.price}</h1>
        <h1>Oluşturulma Zamanı: {dt.createdAt}</h1>
      </div>
      <div className="flex items-center justify-center gap-8">
        <EditButton productDetail={productDetail} />
        <DeleteButton idxsd={idxsd} />
      </div>
    </div>
  );
};

export default Product;
