"use client"

import React from 'react';
import { HiOutlineTrash} from 'react-icons/hi';

export default function RemoveBtn({id}) {
  const handleRemove = async() => {
    const confirmed = confirm('Are you sure?')
    if (confirmed) {
      await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: 'DELETE',
      })
      window.location.reload() 
    }
  }
  return <button onClick={handleRemove} className='text-red-400'>
    <HiOutlineTrash size={24}/>
    </button>
}
