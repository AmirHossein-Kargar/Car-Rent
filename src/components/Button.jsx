import React from 'react'

export default function Button({ size = "small", children }) {
    const sizes = {
        small: `py-1.5 px-4 text-xs`,
        medium: `py-2.5 px-4 text-sm`,
        large: `py-3.5 px-6 text-base`,
    }

    return (
        <button
            className={`${sizes[size]} font-semibold rounded-sm bg-primary-500 cursor-pointer flex justify-center items-center border border-transparent focus:border-button-border-active active:border-button-border-active transition-colors`}
        >
            {children}
        </button>
    )
}
