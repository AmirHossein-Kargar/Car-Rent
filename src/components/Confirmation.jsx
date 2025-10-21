import Button from '@/ui/Button'
import SectionHeader from '@/ui/SectionHeader'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Confirmation() {
    return (
        <div className='w-[450px] md:w-[852px]  h-[476px] rounded-[10px] bg-white border p-4'>
            <SectionHeader
                title="Confirmation"
                subtitle="Almost there! Just a few steps left."
                step={4}
            />

            <div>
                <div className='rounded-[10px] bg-[#F6F7F9] w-full h-16 flex items-center px-4 space-x-3 my-5'>
                    <input id="marketing-checkbox" type="checkbox" className='w-[13px] h-[13px] text-secondary-300 border-secondary-300 border-[1.5px] rounded focus:ring-[#6B7280] relative top-[1.33px] left-[1.33px]' />
                    <label htmlFor="marketing-checkbox" className='font-medium md:font-bold md:text-base text-xs text-[#1F2544] cursor-pointer'>I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
                </div>
                <div className='rounded-[10px] bg-[#F6F7F9] w-full h-16 flex items-center px-4 space-x-3 mb-5'>
                    <input id="terms-checkbox" type="checkbox" className='w-[13px] h-[13px] text-secondary-300 border-secondary-300 border-[1.5px] rounded focus:ring-[#6B7280] relative top-[1.33px] left-[1.33px]' />
                    <label htmlFor="terms-checkbox" className='font-medium md:font-bold md:text-base text-xs text-[#1F2544] cursor-pointer'>I agree with our <Link href="#" className="underline">terms and conditions</Link> and <Link href="#" className="underline">privacy policy</Link>!</label>
                </div>
                <div className="md:hidden">
                    <Button size='medium'>Rental now</Button>
                </div>
                <div className="hidden md:block">
                    <Button size='large'>Rent now</Button>
                </div>
                <div className='space-y-4 mt-5'>
                    <Image src={"/shield.svg"} width={32} height={32} alt='shield' />
                    <SectionHeader
                        title={"All your data are safe"}
                        subtitle={"We are using the most advanced security to provide you the best experience ever."}
                        showStep={false}
                    />
                </div>
            </div>
        </div>
    )
}
