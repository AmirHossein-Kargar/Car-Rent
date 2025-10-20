import SectionHeader from '@/ui/SectionHeader'
import Image from 'next/image'
import React from 'react'

export default function Confirmation() {
    return (
        <div className='w-[450px] h-[476px] rounded-[10px] bg-white border p-4'>
            <SectionHeader
                title="Confirmation"
                subtitle="Almost there! Just a few steps left."
                step={4}
            />

            <div className='mt-8 space-y-3'>
                <Image src={"/shield.svg"} width={32} height={32} alt='shield' />
                <SectionHeader
                    title={"All your data are safe"}
                    subtitle={"We are using the most advanced security to provide you the best experience ever."}
                    showStep={false}
                />
            </div>
        </div>
    )
}
