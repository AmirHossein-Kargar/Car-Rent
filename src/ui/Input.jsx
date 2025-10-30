import React from 'react'

export default function Input({ type, placeholder, className = '', ...props }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`rounded-[10px] w-full h-[56px] px-6 bg-[#F6F7F9] outline-none placeholder:font-normal placeholder:text-xs placeholder:text-secondary-300 ${className}`}
            {...props}
        />
    )
}
