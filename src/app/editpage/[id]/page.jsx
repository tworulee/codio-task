import EditPage from "@/components/EditPage";

const productUpdateData = async (id) => {
  const res = await fetch(
    `https://66957d684bd61d8314cb71a8.mockapi.io/codio/product/${id}`
  );
  return await res.json();
};

const page = async ({ params }) => {
  const  id  = params.id;
  const productUpdate = await productUpdateData(id);
  return (
    <>
      <EditPage productUpdate={productUpdate} />
    </>
  );
};

export default page;
