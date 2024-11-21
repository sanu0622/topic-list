import Link from 'next/link'
import React from 'react'
import Image from "next/image";


const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
            <Link href={'/'}  className='flex text-white font-bold'>
                <Image aria-hidden src="/favicon.ico" alt="Logo icon" width={30} height={30}/>
                <span className='ml-1'>Logo</span>
            </Link>
            <Link href={'/addTopic'}  className=' text-white font-bold bg-red-600 p-3 rounded-2xl'>
               Add Topic
            </Link>
            {/* <button href={'/signin'}  className='bg-green-600 hover:bg-green-500 px-6 py-2 rounded-md'>
              Sign In
            </button> */}

        </nav>
    )
}

export default Navbar