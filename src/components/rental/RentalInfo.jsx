import React from 'react'
import SectionHeader from '@/ui/SectionHeader'
import Image from 'next/image'
import Dropdown from '@/ui/DropDown'

const cities = ['Tehran', 'New York', 'London', 'Paris', 'Tokyo', 'Dubai', 'Los Angeles', 'Sydney']
const times = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM']


export default function RentalInfo() {
    return (
        <section
            className='w-full max-w-sm md:max-w-4xl md:h-fit h-[818px] p-4 md:px-6 bg-white rounded-[10px] mx-auto'
            aria-labelledby="rental-info-title"
        >
            <SectionHeader
                title="Rental Info"
                subtitle="Please select your rental date"
                step={2}
            />

            <form className='space-y-6' role="form" aria-label="Car rental booking form">

                <fieldset className='mt-6 flex flex-col'>
                    <legend className='flex gap-2 items-center'>
                        <Image
                            src="/icons/ui/Mark.svg"
                            width={16}
                            height={16}
                            alt="Pick-up location marker"
                            role="img"
                        />
                        <h2 className='font-semibold text-base text-secondary-500'>Pick-Up</h2>
                    </legend>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="pickup-location" className='font-semibold text-sm text-secondary-500'>
                                Location
                            </label>
                            <Dropdown
                                id="pickup-location"
                                options={cities}
                                placeholder='Select your city'
                                aria-label="Select pickup location"
                                aria-required="true"
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="pickup-date" className='font-semibold text-sm text-secondary-500'>
                                Date
                            </label>
                            <Dropdown
                                id="pickup-date"
                                options={['Select date']}
                                placeholder='Select your date'
                                aria-label="Select pickup date"
                                aria-required="true"
                            />
                        </div>

                        <div className='flex flex-col gap-2 md:col-span-2'>
                            <label htmlFor="pickup-time" className='font-semibold text-sm text-secondary-500'>
                                Time
                            </label>
                            <Dropdown
                                id="pickup-time"
                                options={times}
                                placeholder='Select your time'
                                aria-label="Select pickup time"
                                aria-required="true"
                            />
                        </div>
                    </div>
                </fieldset>

                <fieldset className='flex flex-col'>
                    <legend className='mt-6 flex gap-2 items-center'>
                        <Image
                            src="/icons/ui/MarkDrop.svg"
                            width={16}
                            height={16}
                            alt="Drop-off location marker"
                            role="img"
                        />
                        <h2 className='font-semibold text-base text-secondary-500'>Drop-Off</h2>
                    </legend>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="dropoff-location" className='font-semibold text-sm text-secondary-500'>
                                Location
                            </label>
                            <Dropdown
                                id="dropoff-location"
                                options={cities}
                                placeholder='Select your city'
                                aria-label="Select drop-off location"
                                aria-required="true"
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="dropoff-date" className='font-semibold text-sm text-secondary-500'>
                                Date
                            </label>
                            <Dropdown
                                id="dropoff-date"
                                options={['Select date']}
                                placeholder='Select your date'
                                aria-label="Select drop-off date"
                                aria-required="true"
                            />
                        </div>

                        <div className='flex flex-col gap-2 md:col-span-2'>
                            <label htmlFor="dropoff-time" className='font-semibold text-sm text-secondary-500'>
                                Time
                            </label>
                            <Dropdown
                                id="dropoff-time"
                                options={times}
                                placeholder='Select your time'
                                aria-label="Select drop-off time"
                                aria-required="true"
                            />
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    )
}