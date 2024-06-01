import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-5 bg-gray-100 rounded-lg m-2 py-1'>{name}</button>
    </div>
  )
}

export default Button
