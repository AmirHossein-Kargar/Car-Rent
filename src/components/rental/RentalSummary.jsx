import Image from 'next/image'
import React from 'react'
import Button from '@/ui/Button'
import Input from '@/ui/Input'

export default function RentalSummary() {
    return (
        <article className='w-full md:max-w-[492px] h-fit md:max-h-[560px] rounded-[10px] bg-white p-4 md:p-8'>
            <header className='space-y-1'>
                <h1 className='font-bold text-base md:text-[20px] text-secondary-500'>Rental Summary</h1>
                <p className='font-medium text-xs md:text-sm text-secondary-300'>Prices may change depending on the length of the rental and the price of your rental car.</p>
            </header>

            <section className='flex gap-4 my-8'>
                <Image src={"/rental.svg"} width={116} height={80} className='md:w-[132px] md:h-[108px]' alt='rental car'></Image>
                <div className='flex flex-col gap-3 md:gap-2'>
                    <h2 className='font-bold text-[20px] md:text-[32px] text-secondary-500'>Nissan GT - R</h2>
                    <div className='flex flex-col gap-1 md:flex-row md:gap-2'>
                        <Image src={"/star.svg"} width={76} height={12} alt='5 star rating'></Image>
                        <p className='font-medium text-xs md:text-sm text-[#3D5278]'>440+ Reviewer</p>
                    </div>
                </div>
            </section>

            <hr className='text-[#C3D4E966]' />

            <section className='space-y-4 mt-4'>
                <div className='flex justify-between'>
                    <span className='font-semibold text-xs md:text-base text-secondary-300'>Subtotal</span>
                    <span className='font-semibold text-base text-secondary-500'>$80.00</span>
                </div>

                <div className='flex justify-between'>
                    <span className='font-semibold text-xs md:text-base text-secondary-300'>Tax</span>
                    <span className='font-semibold text-base text-secondary-500'>$0</span>
                </div>

                <form className='relative mt-6 w-full'>
                    <label htmlFor="promo-code" className="sr-only">Apply promo code</label>
                    <Input
                        id="promo-code"
                        type="text"
                        placeholder='Apply promo code'
                        className='max-w-none h-10 pl-5 pr-24 placeholder:font-medium'
                    />
                    <div className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                        <Button className="text-xs px-3 py-1" variant='primary' size='small'>Apply now</Button>
                    </div>
                </form>
            </section>

            <footer className='flex justify-between text-secondary-500 mt-6 md:mt-8'>
                <div className='space-y-1'>
                    <h3 className='font-bold text-base md:text-[20px]'>Total Rental Price</h3>
                    <p className='font-normal text-xs text-secondary-300'>Overall price rental <span className='hidden md:inline'>and includes rental discount</span></p>
                </div>
                <span className='font-bold text-[20px] md:text-[32px]'>$80.00</span>
            </footer>

        </article>
    )
}