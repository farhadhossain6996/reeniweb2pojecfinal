import React from 'react'

export default function Container({children,className}) {
  return (
    <div className={`max-w-322.5 px-4  mx-auto ${className}`}>{children}</div>
  )
}
