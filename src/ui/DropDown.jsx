"use client"
import React, { useState } from 'react'

export default function Dropdown({ options = [], placeholder = 'Select an option', className = '' }) {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState('')

    return (
        <div className={`relative w-full max-w-[295px] ${className}`}>
            {/* main */}
            <div
                className="rounded-[10px] h-[56px] px-6 bg-[#F6F7F9] text-xs flex items-center justify-between cursor-pointer select-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={selected ? 'text-secondary-500' : 'text-secondary-300'}>{selected || placeholder}</span>
                <img
                    src="/arrow-down.svg"
                    alt="dropdown arrow"
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            {/* open menu */}
            {isOpen && (
                <ul className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-[10px] text-sm max-h-48 overflow-y-auto">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setSelected(option)
                                setIsOpen(false)
                            }}
                            className="px-6 py-2 hover:bg-[#F6F7F9] cursor-pointer text-secondary-500"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
