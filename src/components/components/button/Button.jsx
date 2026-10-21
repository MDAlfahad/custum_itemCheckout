import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button 
    className='px-4 py-2 text-sm md:text-[16px] border border-black/40 hover:bg-green-400'
    onClick={onClick}
    >{text}</button>
  )
}

export default Button