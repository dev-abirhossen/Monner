import React from 'react'

const Input = ({onchange, className, type, placeholder}) => {
  return (
    <input onChange={onchange} className={className} type={type} placeholder={placeholder}  />
  )
}

export default Input