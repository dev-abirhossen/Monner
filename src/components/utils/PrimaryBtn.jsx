import React from 'react'

const PrimaryBtn = ({className, onClick, text,type}) => {
  return (
    <button onClick={onClick} type={type} className={`px-7.5 py-3.75 text-sm font-semibold font-Monts rounded-[25px] transition-all duration-300 hover:scale-[1.1] cursor-pointer active:active ${className}`}>{text}</button>
  )
}

export default PrimaryBtn