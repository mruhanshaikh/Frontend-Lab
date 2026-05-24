import React from 'react'

const Button = ({children,className='',...rest}) => {
  return (
      <button {...rest} className={`px-2 py-3 text-black font-bold bg-white active:scale-95 rounded-lg ${className}`}>{children}</button>
  )
}

export default Button
