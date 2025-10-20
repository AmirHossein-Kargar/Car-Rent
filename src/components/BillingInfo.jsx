import Input from '@/ui/Input'
import React from 'react'

export default function BillingInfo() {
    const formFields = [
        { label: 'Name', placeholder: 'Your name' },
        { label: 'Phone Number', placeholder: 'Phone number' },
        { label: 'Address', placeholder: 'Address' },
        { label: 'Town/City', placeholder: 'Town or city' }
    ];

    return (
        <section className='w-[327px] md:w-[852px] h-[516px] md:h-[336px] bg-white rounded-[10px] p-4 md:p-6'>
            <div className='flex justify-between'>
                <div className='space-y-1'>
                    <h1 className='font-bold text-base md:text-[20px] text-secondary-500'>Billing Info</h1>
                    <h2 className='font-medium text-xs md:text-sm text-secondary-300'>Please enter your billing info</h2>
                </div>
                <span className='font-medium text-xs text-secondary-300'>Step 1 of 4</span>
            </div>

            <div className='w-full h-[412px] mt-6 grid grid-cols-1 md:grid-cols-2 md:gap-4 md:h-fit'>
                {formFields.map((field, index) => (
                    <div key={index} className='space-y-2'>
                        <h3 className='font-semibold text-sm text-secondary-500'>{field.label}</h3>
                        <Input placeholder={field.placeholder} className='max-w-[386px]'/>
                    </div>
                ))}
            </div>

        </section>
    )
}
