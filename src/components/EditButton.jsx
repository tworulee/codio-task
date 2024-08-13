import Link from "next/link";

const EditButton = ({ productDetail }) => {
  return (
    <Link
      href={`/editpage/${productDetail?.id}`}
      className="border-2 rounded-md p-2 hover:border-gray-700 mb-3"
    >
      Düzenle
    </Link>
  );
};

export default EditButton;
