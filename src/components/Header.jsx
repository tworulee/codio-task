import React from "react";
import ThemeComp from "./ThemeComp";
const Header = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center h-30 p-5 space-x-20 ">
        <div className="rounded-lg p-3 text-3xl font-bold">
          Product Management
        </div>
        <div className="flex flex-wrap p-4 space-x-7">
          <ThemeComp />
          <select className="font-medium">
            <option value="default">Sıralama</option>
            <option value="price">price</option>
            <option value="popularity">popularity</option>
            <option value="date">date</option>
          </select>
          <button className="font-medium">Ürün Ekleme</button>
        </div>
      </div>
    </>
  );
};

export default Header;
