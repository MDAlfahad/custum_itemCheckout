import React from 'react'

const AddedItemsBox = ({id,productName, ProductBrand, specification, gst, price, onClick }) => {
  return (
    <div className='flex items-center justify-between border-t border-black/50 text-sm'>
        <span>{id}</span>
        <span>{productName}</span>
        <span>{ProductBrand}</span>
        <span>{specification}</span>
        <span className='flex items-center gap-2'><button>-</button><p>0</p><button>+</button></span>
        <span>{gst}</span>
        <span>{price}</span>
        <button className='px-2 py-1 hover:text-red-500'
        onClick={onClick}>Remove</button>
    </div>
  )
}

export default AddedItemsBox