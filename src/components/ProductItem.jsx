import React from 'react'

function ProductItem({item}) {
  return (
    <li className='w-[250px] p-5 rounded-xl bg-white shadow-md '>
      <img className='rounded-lg' src={item.images[0]} alt="Products img" width={200} height={300} />
      <h2>Title:<b>{item.title}</b></h2>
      <p className='line-clamp-2'>Description:<span>{item.description}</span></p>
      <strong>Price:{item.price}</strong>
      <p>Category:<b>{item.category.name}</b></p>

    </li>
  )
}

export default ProductItem