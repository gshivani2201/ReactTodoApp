import React from 'react'

export const Footer = () => {

  return (
    <div 
      className="bg-dark text-light py-3 mt-5" 
      style={{
      position: "absolute",
      left: 0,
      bottom: 0,
      right: 0,
    }}>
        <p className="text-center mb-0">
        Copyright &copy; Shivani's todolist.com
        </p>
    </div>
  )
}
