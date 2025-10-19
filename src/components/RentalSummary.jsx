import Image from 'next/image'
import React from 'react'
import Button from './Button'

export default function RentalSummary() {
    return (
        <div className='w-full md:max-w-[492px] h-fit md:max-h-[560px] rounded-[10px] bg-white p-4 md:p-8'>
            <header className='space-y-1'>
                <h1 className='font-bold text-base md:text-[20px] text-secondary-500'>Rental Summary</h1>
                <h2 className='font-medium text-xs md:text-sm text-secondary-300'>Prices may change depending on the length of the rental and the price of your rental car.</h2>
            </header>

            <section className='flex gap-4 my-8'>
                <Image src={"/rental.svg"} width={116} height={80} className='md:w-[132px] md:h-[108px]' alt='rental car'></Image>
                <div className='flex flex-col gap-3 md:gap-2'>
                    <h3 className='font-bold text-[20px] md:text-[32px] text-secondary-500'>Nissan GT - R</h3>
                    <div className='flex flex-col gap-1 md:flex-row md:gap-2'>
                        <Image src={"/star.svg"} width={76} height={12} alt='star'></Image>
                        <h4 className='font-medium text-xs md:text-sm text-[#3D5278]'>440+ Reviewer</h4>
                    </div>
                </div>
            </section>

            <hr className='text-[#C3D4E966]' />

            <div className='flex justify-between mt-4'>
                <span className='font-semibold text-xs md:text-base text-secondary-300'>Subtotal</span>
                <span className='font-semibold text-base text-secondary-500'>$80.00</span>
            </div>

            <div className='flex justify-between mt-4'>
                <span className='font-semibold text-xs md:text-base text-secondary-300'>Tax</span>
                <span className='font-semibold text-base text-secondary-500'>$0</span>
            </div>

            <div className='relative mt-6 w-full'>
                <input type="text" placeholder='Apply promo code' className='bg-[#F6F7F9] w-full  h-10 rounded-[10px] pl-5 pr-24 placeholder:text-secondary-300 placeholder:font-medium placeholder:text-xs focus:outline-none' />
                <div className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                    <Button className="text-xs px-3 py-1" variant='primary' size='small'>Apply now</Button>
                </div>
            </div>

            <div className='flex justify-between text-secondary-500 mt-6 md:mt-8'>
                <div className='space-y-1'>
                    <h2 className='font-bold text-base md:text-[20px]'>Total Rental Price</h2>
                    <span className='font-normal text-xs text-secondary-300'>Overall price rental <span className='hidden md:inline'>and includes rental discount</span></span>
                </div>
                <span className='font-bold text-[20px] md:text-[32px]'>$80.00</span>
            </div>

        </div>
    )
}
