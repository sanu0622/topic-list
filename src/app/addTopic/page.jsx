"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert('title and description are required.')
      return
    }
    try {
      const response = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      })
      if (response.ok) {
        router.push('/');
      } else {
        throw new Error('Failed to add topic.')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col ">
      <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Topic Title" className="border border-slate-500 px-8 py-2 " />
      <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Topic Description" className="border border-slate-500 px-8 py-2 mt-2 " />
      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit mt-2">Add Topic</button>
    </form>
  )
}

export default AddTopic;