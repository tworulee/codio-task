import Image from "next/image";

const Loading = () => {
  return (
    <>
      <div className="flex items-center mb-4  ">
        <div className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-800 w-full max-w-sm mx-auto">
          <select className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium">
            <option value=""></option>
            <option value="name_asc">A'dan Z'ye</option>
            <option value="name_desc">Z'den A'ya</option>
            <option value="price_asc">Fiyat Artan</option>
            <option value="price_desc">Fiyat Azalan</option>
          </select>
        </div>
      </div>
      <div className="flex mt-5 ml-20">
        <div className="border-2 rounded-md shadow-lg mb-5 ml-20 ">
          <div className="ml-3 ">
            <Image
              src="/gallery.png"
              alt="abstract"
              className="m-20 rounded"
              width={200}
              height={200}
            />
          </div>
          <div className=" justify-center text-center m-3 ">
            <h1 className="bg-[#dee1ea] w-[130px] h-[20px] rounded-lg ml-[110px]">
              {" "}
            </h1>
            <h1 className="bg-[#dee1ea] w-[130px] h-[20px] rounded-lg ml-[110px] mt-2">
              {" "}
            </h1>
            <h1 className="bg-[#dee1ea] w-[130px] h-[20px] rounded-lg ml-[110px] mt-2"></h1>
          </div>
          <div className="flex items-center justify-center gap-8">
            <button className="bg-[#5977cf] w-[130px] h-[20px] rounded-lg "></button>
            <button className="bg-[#5977cf] w-[130px] h-[20px] rounded-lg "></button>
          </div>
        </div>
        <div className="border-2 rounded-md shadow-lg mb-5 ml-20 ">
          <div className="ml-3 ">
            <Image
              src="/gallery.png"
              alt="abstract"
              className="m-20 rounded"
              width={200}
              height={200}
            />
          </div>
          <div className=" justify-center text-center m-3 ">
            <h1 className="bg-[#dee1ea] w-[130px] h-[20px] rounded-lg ml-[110px]">
              {" "}
            </h1>
            <h1 className="bg-[#dee1ea] w-[130px] h-[20px] rounded-lg ml-[110px] mt-2">
              {" "}
            </h1>
            <h1 className="bg-[#dee1ea] w-[130px] h-[20px] rounded-lg ml-[110px] mt-2"></h1>
          </div>
          <div className="flex items-center justify-center gap-8">
            <button className="bg-[#5977cf] w-[130px] h-[20px] rounded-lg "></button>
            <button className="bg-[#5977cf] w-[130px] h-[20px] rounded-lg "></button>
          </div>
        </div>
        <div className="border-2 rounded-md shadow-lg mb-3 ml-20 ">
          <div className="ml-3 ">
            <Image
              src="/gallery.png"
              alt="abstract"
              className="m-20 rounded"
              width={200}
              height={200}
            />
          </div>
          <div className=" justify-center text-center m-3 ">
            <h1 className="bg-[#dee1ea] w-[130px] h-[20px] rounded-lg ml-[110px]">
              {" "}
            </h1>
            <h1 className="bg-[#dee1ea] w-[130px] h-[20px] rounded-lg ml-[110px] mt-2">
              {" "}
            </h1>
            <h1 className="bg-[#dee1ea] w-[130px] h-[20px] rounded-lg ml-[110px] mt-2"></h1>
          </div>
          <div className="flex items-center justify-center gap-8 mb-4">
            <button className="bg-[#5977cf] w-[130px] h-[20px] rounded-lg "></button>
            <button className="bg-[#5977cf] w-[130px] h-[20px] rounded-lg "></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
