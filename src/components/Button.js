import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-5 text-sm bg-[#212121] font-medium hover:bg-[#606060] text-white rounded-lg m-2 py-1'>{name}</button>
    </div>
  )
}

export default Button
