import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

const Nav = () => {
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-8'>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center 
      rounded-md shadow-xl'>
        <MdFastfood className='w-[30px] h-[30px] text-green-500'/>
      </div>
      <form className='w-[70%] h-[60px] bg-white flex items-center 
      px-5 gap-5 rounded-md shadow-md'>
        <IoSearch className='text-green-500 w-[20px] h-[20px] '/>
        <input type="text" placeholder='Search Items...' className='w-full outline-none 
        text-[20px]'/>
      </form>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center 
      rounded-md shadow-xl'>
        <LuShoppingBag className='w-[30px] h-[30px] text-green-500'/>
      </div>
    </div>
  )
}

export default Nav
