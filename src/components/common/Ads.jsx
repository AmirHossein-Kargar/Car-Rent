import Image from 'next/image'
import Button from '@/ui/Button'

export default function Ads() {
    return <div className="flex justify-center relative">
        <Image src={"/Ads.svg"} width={327} height={232} alt="ads" />
        <h1 className="absolute top-4 left-10 flex items-center justify-center text-white font-semibold text-base">The Best Platform for Car Rental</h1>
        <span className="absolute top-12 left-10 font-medium text-xs text-white max-w-[216px] leading-[160%]">Ease of doing a car rental safely and reliably. Of course at a low price.</span>
        <div className="absolute top-25 left-10">
            <Button size="small">Rental car</Button>
        </div>
    </div>
}