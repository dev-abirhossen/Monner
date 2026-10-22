import React from 'react'

const Image = ({className, onclick, src, alt="img"}) => {
  return (
    <img className={className} onClick={onclick} src={src} alt={alt} />

)
}

export default Image