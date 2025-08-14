import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { AddItem } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Card = ({name,image,id,price,type}) => {
  let dispatch = useDispatch();
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg
    flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 
    transition-all cursor-pointer'>
      <div className='w-[100%] h-[60%] overflow-hidden
      rounded-lg'>
<img src={image} alt="" className='object-cover'/>
      </div>
      <div className='text-2xl font-semibold'>
{name}
      </div>
      <div className='flex w-full justify-between items-center'>
<div className='text-lg font-semibold text-green-500'>Rs {price} </div>
<div className='flex justify-center items-center gap-2 text-green-500 
text-lg font-semibold'> {type==="veg"?<LuLeafyGreen/>
:<GiChickenOven/>} <span>{type}</span></div>
      </div>
      <button className='w-[100%] p-3 rounded-lg bg-green-200 
      cursor-pointer text-gray-700 hover:bg-green-300 transition-all'
      onClick={() => {dispatch(AddItem({id:id,name:name,image:image,
      price:price,qty:1}));
      toast.success("Item Added to Cart");}
      }>Add to Cart</button>
    </div>
  )
}

export default Card
