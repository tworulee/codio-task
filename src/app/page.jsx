import Products from "@/components/Products";

const Page = async () => {
  const res = await fetch(
    "https://66957d684bd61d8314cb71a8.mockapi.io/codio/product",
    { next: { revalidate: 1 } }
  );

  const data = await res.json();
  // console.log(data, "data");

  return (
    <div className="flex flex-wrap items-center justify-center  gap-8 ">
      {data?.map((dt) => (
        <Products dt={dt} key={dt.id} />
      ))}
    </div>
  );
};

export default Page;
