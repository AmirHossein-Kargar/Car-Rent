import Image from "next/image";

export default function SearchInput({ variant = "desktop" }) {
    const isMobile = variant === "mobile";

    const containerClass = isMobile
        ? "flex items-center gap-4 my-8 md:hidden h-12"
        : "relative hidden md:block";

    const inputClass = `
        bg-white border border-[rgba(195,212,233,0.4)] 
        w-full ${isMobile ? "h-12 px-4 pl-12 rounded-[10px]" : "max-w-lg h-11 rounded-[70px] pl-12 pr-15 xl:pr-56"} 
        placeholder:font-medium placeholder:text-sm placeholder:text-secondary-400 
        outline-none
    `;

    return (
        <div className={containerClass}>
            <div className={isMobile ? "relative flex-1" : "relative"}>
                <input
                    type="text"
                    className={inputClass}
                    placeholder="Search something here"
                />

                {/* Search Icon */}
                <Image
                    src="/icons/ui/search.svg"
                    width={isMobile ? 24 : 20}
                    height={isMobile ? 24 : 20}
                    alt="search"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                />

                {/* Filter Icon */}
                {!isMobile && (
                    <Image
                        src="/icons/ui/filter.svg"
                        width={20}
                        height={20}
                        alt="filter"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    />
                )}
            </div>

            {/* Mobile Filter Button */}
            {isMobile && (
                <button className="w-12 h-12 border border-[rgba(195,212,233,0.4)] rounded-[10px] flex justify-center items-center shrink-0">
                    <Image src="/icons/ui/filter.svg" width={24} height={24} alt="filter" />
                </button>
            )}
        </div>
    );
}