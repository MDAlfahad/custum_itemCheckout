import React from 'react'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const BoxItem = ({name, brand, price, quantity, units}) => {
    
  return (
   <div className="flex items-center justify-between border border-green-500/70 rounded-lg px-4 py-1">
      <div className="flex flex-col items-start gap-1">
        <h1 className="font-semibold text-lg">{name}</h1>
        <p className="text-sm font-lighter">{brand}</p>
        <p className="font-bold text-lg"><span>₹</span>{price}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center  px-2 py-1 text-lg">
         <h1>{quantity}</h1>
         <p>{units}</p>
        </div>
        <h3 className="border border-black/30 p-1 bg-green-500/70 rounded-full"><MdOutlineDeleteOutline size={24}/></h3>
      </div>
    </div>
  )
}

export default BoxItem