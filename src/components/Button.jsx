import React from 'react'

export default function Button({ size = "small", variant = "secondary", children, disabled = false }) {
  const sizes = {
    small: `py-1.5 px-4 text-xs`,
    medium: `py-2.5 px-4 text-sm`,
    large: `py-3.5 px-6 text-base`,
  }

  const variants = {
    primary: `text-white bg-primary-500 active:bg-primary-700 border-transparent border focus:border-button-border-active ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`,
    secondary: `bg-white border text-secondary-400 hover:border-secondary-400 hover:text-secondary-500 active:bg-primary-100 active:border-secondary-300 ${disabled ? 'border-primary-100 cursor-not-allowed' : 'border-secondary-300 cursor-pointer'}`
  }

  return (
    <button
      disabled={disabled}
      className={`${sizes[size]} ${variants[variant]} font-semibold rounded-sm flex justify-center items-center transition-colors`}
    >
      {children}
    </button>
  )
}
