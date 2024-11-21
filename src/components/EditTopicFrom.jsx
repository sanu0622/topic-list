"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newTitle, newDescription }),
      })
      if (!res.ok) {
        throw new Error("Failed to update topic"); 
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return <form onSubmit={handleSubmit} className="flex flex-col ">
    <input type="text"
      onChange={e => setNewTitle(e.target.value)}
      value={newTitle}
      placeholder="Topic Title"
      className="border border-slate-500 px-8 py-2 " />
    <input type="text" onChange={e => setNewDescription(e.target.value)}
      value={newDescription}
      placeholder="Topic Description"
      className="border border-slate-500 px-8 py-2 mt-2 " />
    <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit mt-2">Update Topic</button>
  </form>
}