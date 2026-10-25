import React from 'react'
import { Price } from '../component/PriceComponent'

const AddedItemsBox = ({id,productName, ProductBrand, specification, gst, price, onClick }) => {
  return (
    <div className='flex items-center justify-between border-b border-black/50 text-sm'>
        <span className='w-[200px] text-start font-regular text-[12px] line-clamp-1'>{id}</span>
        <span className='w-[150px] text-start font-semibold text-[12px]'>{productName}</span>
        <span className='w-[100px] text-start font-light text-[12px]'>{ProductBrand}</span>
        <span className='w-[300px] text-start font-light text-[12px]'>{specification}</span>
        <span className='flex items-center border border-green-500  rounded-sm '><button className='p-1 hover:bg-green-500/50'>-</button><p className='px-2 py-1 border-x border-green-500'>0</p><button className='p-1 hover:bg-green-500/50'>+</button></span>
        <span className='w-[100px] text-start font-light text-[12px]'>{gst}</span>
        <span className='w-[140px] text-start font-semibold text-[12px]'><Price amount={price} currency='INR' locale='en-IN'/></span>
        <button className='px-2 border border-green-500 rounded-full p-1 hover:bg-red-500/80'
        onClick={onClick}>Remove</button>
    </div>
  ) 
}

export default AddedItemsBox