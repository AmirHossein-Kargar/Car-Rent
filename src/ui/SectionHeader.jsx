import React from 'react'

export default function SectionHeader({ title, subtitle, step, totalSteps = 4 }) {
    return (
        <div className='flex justify-between'>
            <div className='space-y-1'>
                <h1 className='font-bold text-base md:text-[20px] text-secondary-500'>{title}</h1>
                <h2 className='font-medium text-xs md:text-sm text-secondary-300'>{subtitle}</h2>
            </div>
            <span className='font-medium text-xs text-secondary-300'>Step {step} of {totalSteps}</span>
        </div>
    )
}