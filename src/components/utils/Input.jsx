import React from 'react'

const Input = ({onchange, className, type, placeholder,name}) => {
  return (
    <input name={name} onChange={onchange} className={className} type={type} placeholder={placeholder}  />
  )
}

export default Input