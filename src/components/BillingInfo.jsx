import React from 'react'

export default function BillingInfo() {
    return (
        <section className='w-[327px] h-[516px] bg-white rounded-[10px] border p-4'>
            <div className='flex justify-between'>
                <div className='space-y-1'>
                    <h1 className='font-bold text-base text-secondary-500'>Billing Info</h1>
                    <h2 className='font-medium text-xs text-secondary-300'>Please enter your billing info</h2>
                </div>
                <span className='font-medium text-xs text-secondary-300'>Step 1 of 4</span>
            </div>

            <div className='max-w-[295px] border h-[412px] mt-6 grid grid-cols-1'>
                <div className='space-y-3'>
                    <h3 className='font-semibold text-sm text-secondary-500'>Name</h3>
                    <input type="text" className='border w-full' placeholder='type...' />
                </div>
            </div>

        </section>
    )
}
