import Image from "next/image";

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
    },
    {
        src: "/profile.svg",
        width: 44,
        height: 44,
        alt: "profile",
        hasNotification: false
    }
];


export default function Header() {
    return <header className="w-full h-[288px] md:h-[124px] border border-[#C3D4E966] px-6 py-8 md:px-16 md:py-10 bg-white">

        {/* logo and profile */}
        <div className="flex h-fit w-full justify-between mb-8">
            <div className="flex gap-16">
                <Image src={"/Logo.svg"} width={108} height={28} alt="logo" className="md:w-36 md:h-11" />
                <div className="relative w-[492px] hidden md:block">
                    <Image
                        src="/search.svg"
                        width={24}
                        height={24}
                        alt="search"
                        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10"
                    />
                    <Image
                        src="/filter.svg"
                        width={24}
                        height={24}
                        alt="filter"
                        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
                    />
                    <input type="text" className="border border-[#C3D4E966] bg-white w-full h-11 rounded-[70px] outline-none pl-16 pr-16 placeholder:text-secondary-400 placeholder:font-medium placeholder:text-sm" placeholder="Search something here" />
                </div>
            </div>



            <div className="flex">
                {/* Mobile: Show only profile icon */}
                <div className="md:hidden">
                    <Image
                        className="border rounded-full border-[#C3D4E966] w-7 h-7"
                        src="/profile.svg"
                        width={28}
                        height={28}
                        alt="profile"
                    />
                </div>

                {/* Desktop: Show all icons */}
                <div className="hidden md:flex gap-5">
                    {headerIcons.map((icon, index) => (
                        <div key={index} className="border rounded-full border-[#C3D4E966] w-11 h-11 flex justify-center relative">
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
            </div>

        </div>

        <div className="relative w-[263px] md:hidden">
            <Image
                src="/search.svg"
                width={24}
                height={24}
                alt="search"
                className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10"
            />
            <input
                type="text"
                className="w-full h-12 border border-[#C3D4E966] rounded-[10px] pl-16 pr-6 text-secondary-400 placeholder:text-sm placeholder:font-medium outline-none"
                placeholder="Search something here"
                name=""
                id=""
            />
        </div>

    </header>
}