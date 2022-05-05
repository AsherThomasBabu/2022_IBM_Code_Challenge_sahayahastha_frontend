/* eslint-disable @next/next/no-img-element */
import React from 'react'
const Avatar = () => {
  return (
    <div className="relative w-20 h-20">
    <img className="rounded-full border border-gray-100 shadow-sm" src="/images/11.jpg" alt="user image" />
    <div className="absolute bottom-0 right-0 h-4 w-4 my-1 border-2 border-white rounded-full bg-green-300 z-2"></div>
    </div>
  )
}

export default Avatar