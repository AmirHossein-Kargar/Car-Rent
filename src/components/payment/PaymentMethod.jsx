'use client'
import Input from '@/ui/Input'
import SectionHeader from '@/ui/SectionHeader'
import Image from 'next/image'
import React, { useState } from 'react'

export default function PaymentMethod() {
    const [selectedMethod, setSelectedMethod] = useState('Credit Card')
    const [expandedMethod, setExpandedMethod] = useState(null)

    const paymentMethods = [
        { name: 'Credit Card', icon: '/Visa.svg', alt: 'Visa' },
        { name: 'PayPal', icon: '/PayPal.svg', alt: 'paypal' },
        { name: 'Bitcoin', icon: '/Bitcoin.svg', alt: 'Bitcoin' }
    ]

    const cardFields = [
        { label: 'Card Number', placeholder: 'Card number', type: 'number' },
        { label: 'Card Holder', placeholder: 'Card holder', type: 'text' },
        { label: 'Expiration Date', placeholder: 'DD/MMYY', type: 'text' },
        { label: 'CVC', placeholder: 'CVC', type: 'text' }
    ]

    const handleMethodSelect = (method) => {
        setSelectedMethod(method)
        setExpandedMethod(expandedMethod === method ? null : method)
    }

    return (
        <section className='w-full max-w-sm md:max-w-4xl h-[732px] md:h-[596px] bg-white rounded-[10px] p-4 overflow-hidden mx-auto'>
            <SectionHeader title={"Payment Method"} subtitle={"Please enter your payment method"} step={3} />

            {paymentMethods.map((method) => (
                <div key={method.name} className='my-6'>
                    <div
                        className={`w-full bg-[#F6F7F9] rounded-[10px] px-4 cursor-pointer transition-all duration-500 ease-in-out overflow-hidden ${expandedMethod === method.name ? 'h-auto py-4' : 'h-[52px]'
                            }`}
                        onClick={() => handleMethodSelect(method.name)}
                    >
                        <div className={`flex justify-between items-center h-[52px] ${expandedMethod === method.name ? 'mb-4' : ''}`}>
                            <div className='flex items-center gap-3'>
                                <div className={`w-4 h-4 rounded-full flex items-center justify-center ${selectedMethod === method.name ? '' : 'border-2 border-secondary-300'}`}>
                                    {selectedMethod === method.name && (
                                        <Image src={"/Mark.svg"} width={16} height={16} alt='selected' />
                                    )}
                                </div>
                                <span className='font-semibold text-base text-secondary-500'>{method.name}</span>
                            </div>
                            <Image src={method.icon} width={96} height={20} alt={method.alt} />
                        </div>

                        {expandedMethod === method.name && method.name === 'Credit Card' && (
                            <div className='space-y-3 md:grid md:grid-cols-2' onClick={(e) => e.stopPropagation()}>
                                {cardFields.map((field, index) => (
                                    <div key={field.label} className='space-y-2'>
                                        <h3 className='font-semibold text-sm text-secondary-500'>
                                            {field.label}
                                        </h3>
                                        <Input
                                            placeholder={field.placeholder}
                                            className='bg-white'
                                            type={field.type}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}

        </section>
    )
}