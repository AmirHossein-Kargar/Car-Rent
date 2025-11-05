import Input from '@/ui/Input'
import SectionHeader from '@/ui/SectionHeader'
import React from 'react'

export default function BillingInfo() {
    const formFields = [
        { label: 'Name', placeholder: 'Your name' },
        { label: 'Phone Number', placeholder: 'Phone number' },
        { label: 'Address', placeholder: 'Address' },
        { label: 'Town/City', placeholder: 'Town or city' }
    ];

    return (
        <section className='w-full max-w-sm md:max-w-4xl h-[516px] md:h-[336px] bg-white rounded-[10px] p-4 md:p-6 mx-auto'>
            <SectionHeader
                title="Billing Info"
                subtitle="Please enter your billing info"
                step={1}
            />

            <div className='w-full h-[412px] mt-6 grid grid-cols-1 md:grid-cols-2 md:gap-4 md:h-fit'>
                {formFields.map((field, index) => (
                    <div key={index} className='space-y-2'>
                        <h3 className='font-semibold text-sm text-secondary-500'>{field.label}</h3>
                        <Input placeholder={field.placeholder} className='max-w-[386px]' />
                    </div>
                ))}
            </div>

        </section>
    )
}