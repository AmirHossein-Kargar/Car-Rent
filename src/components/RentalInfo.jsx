import React from 'react'
import SectionHeader from '@/ui/SectionHeader'
import Image from 'next/image'
import Dropdown from '@/ui/DropDown'
import Input from '@/ui/Input'

const cities = ['Tehran', 'New York', 'London', 'Paris', 'Tokyo', 'Dubai', 'Los Angeles', 'Sydney']
const times = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM']


export default function RentalInfo() {
    return (
        <section className='w-[327px] md:w-[852px] md:h-[664px] h-[818px] p-4 md:px-6 bg-white rounded-[10px] border'>

            <SectionHeader
                title="Rental Info"
                subtitle="Please select your rental date"
                step={2}
            />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                <div className='flex flex-col'>
                    <div className='mt-6 flex gap-2'>
                        <Image src={"/Mark.svg"} width={16} height={16} alt='marker'></Image>
                        <h2 className='font-semibold text-base text-secondary-500'>Pick - Up</h2>
                    </div>

                    <div className='my-3 space-y-2'>
                        <h3 className='font-semibold text-sm text-secondary-500'>Locations</h3>
                        <Dropdown options={cities} placeholder='Select your city' />
                    </div>

                    <div className='my-3 space-y-2'>
                        <h3 className='font-semibold text-sm text-secondary-500'>Time</h3>
                        <Dropdown options={times} placeholder='Select your time' />
                    </div>

                    <div className='my-3 space-y-2'>
                        <h3 className='font-semibold text-sm text-secondary-500'>Date</h3>
                        <Input type="date" className="text-secondary-500" />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='mt-6 flex gap-2'>
                        <Image src={"/MarkDrop.svg"} width={16} height={16} alt='marker drop off'></Image>
                        <h2 className='font-semibold text-base text-secondary-500'>Drop - Off</h2>
                    </div>

                    <div className='my-3 space-y-2'>
                        <h3 className='font-semibold text-sm text-secondary-500'>Locations</h3>
                        <Dropdown options={cities} placeholder='Select your city' />
                    </div>

                    <div className='my-3 space-y-2'>
                        <h3 className='font-semibold text-sm text-secondary-500'>Time</h3>
                        <Dropdown options={times} placeholder='Select your time' />
                    </div>

                    <div className='my-3 space-y-2'>
                        <h3 className='font-semibold text-sm text-secondary-500'>Date</h3>
                        <Input type="date" className="text-secondary-500" />
                    </div>
                </div>

            </div>

        </section>
    )
}
