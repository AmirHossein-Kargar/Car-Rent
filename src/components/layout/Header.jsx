import Image from "next/image";
import Link from "next/link";
import SearchInput from "../SearchInput";

const headerIcons = [
    {
        src: "/heart-dark.svg",
        width: 24,
        height: 24,
        alt: "heart",
        hasNotification: false
    },
    {
        src: "/notification.svg",
        width: 24,
        height: 24,
        alt: "notification",
        hasNotification: true
    },
    {
        src: "/setting.svg",
        width: 24,
        height: 24,
        alt: "setting",
        hasNotification: false
    }
];


export default function Header() {
    return (
        <header className="w-full h-[288px] md:h-[124px] bg-white px-6 lg:px-16 py-8 md:py-10">
            <section className="flex justify-between items-center">
                <div className="flex items-center gap-x-8 lg:gap-x-16">
                    <Link href="/">
                        <Image src={"/Logo.svg"} width={108} height={28} alt="logo" className="md:w-[148px] md:h-11" />
                    </Link>
                    <SearchInput variant="desktop" />
                </div>

                <div className="flex items-center gap-5">
                    {/* Other icons - only show on md and above */}
                    <div className="hidden md:flex gap-5">
                        {headerIcons.map((icon, index) => (
                            <div key={index} className="w-11 h-11 border border-[rgba(195,212,233,0.4)] rounded-full flex justify-center items-center relative">
                                {icon.hasNotification && (
                                    <div className="w-2.5 h-2.5 bg-[#FF4423] absolute top-0.5 right-0.5 rounded-full z-10"></div>
                                )}
                                <Image
                                    src={icon.src}
                                    width={icon.width}
                                    height={icon.height}
                                    alt={icon.alt}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Profile icon - always visible */}
                    <div className="w-7 h-7 md:w-11 md:h-11 border border-[rgba(195,212,233,0.4)] rounded-full flex justify-center items-center">
                        <Image src={"/profile.svg"} width={28} height={28} className="md:w-11 md:h-11" alt="profile" />
                    </div>
                </div>

            </section>

            <SearchInput variant="mobile" />

        </header>
    );
}