import Image from "next/image";
import Input from "@/ui/Input";

export default function SearchInput({ variant = "desktop" }) {
    if (variant === "mobile") {
        return (
            <div className="flex items-center justify-center gap-4 my-8 md:hidden px-4">
                <Input
                    className="bg-white border border-[#C3D4E966] flex-1 max-w-md h-12 px-4"
                    placeholder="Search something here"
                />
                <button className="w-12 h-12 border border-[#C3D4E966] rounded-[10px] flex justify-center items-center">
                    <Image src="/filter.svg" width={24} height={24} alt="filter" />
                </button>
            </div>
        );
    }

    return (
        <div className="relative hidden md:block">
            <Input
                className="max-w-[500px]! h-8! font-medium text-sm text-secondary-400 bg-white border border-[#C3D4E966] rounded-[70px] px-4 pl-10 pr-10"
                placeholder="Search something here"
            />
            <Image
                src="/search.svg"
                width={16}
                height={16}
                alt="search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <Image
                src="/filter.svg"
                width={16}
                height={16}
                alt="filter"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            />
        </div>
    );
}