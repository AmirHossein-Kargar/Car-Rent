"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '../../ui/Button'
import Link from 'next/link'

export default function Card() {
    const [liked, setLiked] = useState(false)
    return (
        <article className='w-full max-w-[327px] md:max-w-[304px] md:h-[388px] h-[240px] rounded-[10px] p-6 flex flex-col relative'>
            <button
                onClick={() => setLiked(!liked)}
                className='absolute right-6 top-6 md:w-[24px] md:h-[24px] w-4 h-4 bg-transparent border-none cursor-pointer transition-transform hover:scale-110'
                aria-label="Add to favorites"
            >
                <Image
                    src={liked ? "/heart.svg" : "/heart-stroke.svg"}
                    width={16}
                    height={16}
                    alt='heart'
                    className='w-full h-full'
                />
            </button>
            <header className='w-[96px] h-fit flex flex-col gap-1'>
                <h1 className='font-semibold md:font-bold text-[16px] md:text-[20px] text-secondary-500'>CR  - V</h1>
                <p className='font-medium md:font-bold text-[12px] md:text-sm text-secondary-300'>SUV</p>
            </header>

            <main className="flex flex-row justify-between md:flex-col gap-4 my-4 md:my-10 p-1 md:gap-9">
                <figure className="relative w-[160px] md:w-full h-[64px] md:h-[100px] overflow-hidden rounded-md">
                    <Image
                        src="/Car.svg"
                        alt="CR-V SUV car"
                        fill
                        className="object-center"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[30px] md:h-[50px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#ffffff_100%)] z-10 pointer-events-none" />
                </figure>

                <section className='flex flex-col md:flex-row justify-center md:justify-center font-medium gap-4 text-xs text-secondary-300 w-fit h-fit md:w-full' aria-label="Car specifications">
                    <div className='flex items-center gap-1'>
                        <Image src={"/gas-station.svg"} width={14} height={14} className="md:w-6 md:h-6" alt='fuel capacity'></Image>
                        <span>80L</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Image src={"/gearbox.svg"} width={14} height={14} className="md:w-6 md:h-6" alt='transmission type'></Image>
                        <span>Manual</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Image src={"/user.svg"} width={14} height={14} className="md:w-6 md:h-6" alt='seating capacity'></Image>
                        <span>6 People</span>
                    </div>
                </section>
            </main>

            <footer className='flex justify-between items-center mt-auto'>
                <div>
                    <span className='font-bold text-[16px] md:text-[20px] text-secondary-500'>$80.00/</span>
                    <span className='text-secondary-300 font-bold text-[12px] md:text-sm'>day</span>
                </div>
                <Link href={"/"}>
                    <Button size='medium'>Rental Now</Button>
                </Link>
            </footer>
        </article>
    )
}