"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '@/ui/Button'
import Link from 'next/link'

export default function CardWeb({ car }) {
    const [liked, setLiked] = useState(false)

    const specifications = [
        { icon: "/icons/car/gas-station.svg", value: `${car?.tank_capacity || 80}L`, alt: "fuel capacity" },
        { icon: "/icons/car/gearbox.svg", value: car?.transmission || "Manual", alt: "transmission type" },
        { icon: "/icons/ui/user.svg", value: `${car?.seating_capacity || 6} People`, alt: "seating capacity" }
    ]

    return (
        <article className='w-[280px] md:w-full md:max-w-[304px] h-[388px] rounded-[10px] p-6 flex flex-col relative bg-white shrink-0'>
            <button
                onClick={() => setLiked(!liked)}
                className='absolute right-6 top-6 w-[24px] h-[24px] bg-transparent border-none cursor-pointer transition-transform hover:scale-110'
                aria-label="Add to favorites"
            >
                <Image
                    src={liked ? "/icons/ui/heart.svg" : "/icons/ui/heart-stroke.svg"}
                    width={24}
                    height={24}
                    alt='heart'
                    className='w-full h-full'
                />
            </button>

            <header className='w-fit h-fit flex flex-col gap-1 font-bold'>
                <h1 className='text-[20px] text-secondary-500'>{car?.model || 'CR - V'}</h1>
                <p className='text-sm text-secondary-300'>{car?.brand || 'SUV'}</p>
            </header>

            <main className="flex flex-col gap-9 my-10">
                <figure className="relative w-full h-[100px] overflow-hidden rounded-md">
                    <Image
                        src={car?.image_url || "https://ik.imagekit.io/9r9vtkidc/CR%20-V.svg?updatedAt=1762610294323"}
                        alt={`${car?.brand || 'Honda'} ${car?.model || 'CR-V'} car`}
                        fill
                        className="object-center"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[50px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#ffffff_100%)] z-10 pointer-events-none" />
                </figure>

                <section className='flex flex-row justify-between font-medium gap-4 text-xs text-secondary-300 w-full' aria-label="Car specifications">
                    {specifications.map((spec, index) => (
                        <div key={index} className='flex items-center gap-1.5'>
                            <Image src={spec.icon} width={24} height={24} alt={spec.alt} className='w-[14px] h-[14px] md:w-6 md:h-6' />
                            <span className='text-sm'>{spec.value}</span>
                        </div>
                    ))}
                </section>

            </main>

            <footer className='flex justify-between items-center'>
                <div>
                    <span className='font-bold text-[20px] text-secondary-500'>${car?.price_per_day || 80}.00/</span>
                    <span className='text-secondary-300 font-bold text-sm'> day</span>
                </div>
                <Link href={`/car/${car?.id || ''}`}>
                    <Button size='medium'>Rent Now</Button>
                </Link>
            </footer>

        </article>
    )
}