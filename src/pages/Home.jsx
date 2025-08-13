import React, {useContext, useState} from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'

const Home = () => {
  let {cate, setCate, input } = useContext(dataContext);

  function filter(category) {
    if (category === 'All') {
      setCate(food_items)
    }
      else{
        let newList = food_items.filter(item => item.food_category === category);
        setCate(newList);
      }
}

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />
      {!input?<div className='flex flex-wrap justify-center items-center gap-5 w-full'>
        {Categories.map((item) => {
          return (
            <div 
              key={item.name}
              className='w-[140px] h-[150px] bg-white flex flex-col 
              items-center justify-center gap-3 text-[20px] font-semibold 
              text-gray-600 rounded-lg shadow-xl hover:bg-green-200 
              cursor-pointer transition-all duration-200'onClick={() => filter(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          )
        })}
      </div>:null}
      
      <div className='w-full flex flex-wrap justify-center items-center gap-5 p-5'>
        {cate.map((item) => {
          return (
            <Card 
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              id={item.id}
              price={item.price}
              type={item.food_type}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
