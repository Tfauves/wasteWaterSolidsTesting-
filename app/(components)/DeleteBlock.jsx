"use client";
import { Trash } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  // console.log(id);
  const deleteReport = async () => {
    const res = await fetch(`http://localhost:3000/api/SolidsReport/${id}`, {
      method: "DELETE",
    });
    console.log("Response status:", res.status);

    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <div className="hover:cursor-pointer hover:text-red-400">
      <Trash size={25} onClick={deleteReport} />
    </div>
  );
};

export default DeleteBlock;
