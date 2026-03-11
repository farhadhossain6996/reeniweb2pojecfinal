import React from 'react'

export default function Image({ImgSrc,AltImg,className}) {
  return (
    <>
    <img src={ImgSrc} alt={AltImg} className={`${className}`} />
    </>
  )
}

