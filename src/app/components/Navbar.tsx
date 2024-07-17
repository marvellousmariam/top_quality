import Link from 'next/link';
import React from 'react'
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='-full h-[80px] bg-white  '>
        <div className='container m-auto w-full h-full flex items-center justify-between'>
            <Link href="/" className='logo'>Shop</Link>
            <button className='card-icon'>
            <AiOutlineShopping />
            <span className='card-item-qty'>0</span>
            </button>
            
        </div>
    </div>
  )
}

export default Navbar
