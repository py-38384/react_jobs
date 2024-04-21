import React from 'react'

const Card = ({ children, elementClass = `bg-gray-100` }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${elementClass}`}>{children}</div>
  )
}

export default Card