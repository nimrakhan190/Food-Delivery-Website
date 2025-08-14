import React from 'react'
import image1 from '../assets/image1.avif'
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';

const Card2 = ({name,id,price,image,qty}) => {
  let dispatch = useDispatch();
  return (
    <div className='w-full p-2 shadow-lg flex flex-col sm:flex-row justify-between items-center sm:items-start gap-3'>
      
      {/* Left Section */}
      <div className='flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto'>
        
        {/* Product Image */}
        <div className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] overflow-hidden rounded-lg flex-shrink-0'>
          <img src={image} alt="" className='w-full h-full object-cover'/>
        </div>

        {/* Name & Quantity */}
        <div className='flex flex-col items-center sm:items-start justify-center gap-2'>
          <div className='text-lg font-semibold text-center sm:text-left'>{name}</div>
          <div className='flex justify-center items-center font-semibold overflow-hidden shadow-lg 
          rounded-lg border border-green-400 text-xl'>
            <button className='w-10 h-10 bg-white flex justify-center items-center shadow-lg 
            text-green-400 hover:bg-gray-200' onClick={()=>{
              qty>1?dispatch(DecrementQty(id)):1
            }}>-</button>
            <span className='w-10 h-10 bg-slate-200 flex justify-center items-center shadow-lg
            text-green-400'>{qty}</span>
            <button className='w-10 h-10 bg-white flex justify-center items-center shadow-lg 
            text-green-400 hover:bg-gray-200' onClick={()=>{
              dispatch(IncrementQty(id))
            }}>+</button>
          </div>
        </div>
      </div>

      {/* Price & Delete */}
      <div className='flex flex-row sm:flex-col justify-between 
      items-center sm:items-end gap-8'>
        <span className='text-xl text-green-400 font-semibold 
        whitespace-nowrap'>Rs {price}/-</span>
        <RiDeleteBinLine className='w-[30px] h-[30px] text-red-400 cursor-pointer'
        onClick={() => dispatch(RemoveItem(id))}/>
      </div>
    </div>
  )
}

export default Card2
