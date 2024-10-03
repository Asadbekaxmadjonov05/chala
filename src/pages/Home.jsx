import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem'
import { Input } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

function Home() {
   const [products,setProducts] = useState([]) 
useEffect(() =>{
axios.get("https://api.escuelajs.co/api/v1/products?offset=1&limit=12").then(res =>{
    setProducts(res.data);
    
})
},[])


  return (
   <>
   <header className='w-full bg-gray-400 p-3'>
   <div className='mx-10  flex items-center justify-between'>
    <Input name='searching' placeholder='Search Products' size='large' allowClear className='w-[300px] '/>
   </div>
   </header>
   <ul className='flex flex-wrap justify-between gap-4  p-10'>
   {products.map(item => <ProductItem key={item.id} item={item}/>)}
   </ul>
   <LoadingOutlined/>
   </>
  )
}

export default Home