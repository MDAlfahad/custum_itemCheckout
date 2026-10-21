

const Button = ({text, onClick}) => {
  return (
    <button 
    className='px-6 py-2 text-sm md:text-[16px] border border-black/40 hover:bg-green-400'
    onClick={onClick}
    >{text}</button>
  )
}

export default Button