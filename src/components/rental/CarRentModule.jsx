import Image from "next/image";

// Reusable component for the three-section layout
function ThreeSectionLayout({ sections }) {
    return (
        <div className="flex items-center justify-between">
            {sections.map((section, index) => (
                <div key={index} className="flex items-center">
                    <section className="h-11 flex-1">
                        <h2 className="font-bold text-base text-secondary-500">{section}</h2>
                    </section>
                    {index < sections.length - 1 && (
                        <hr className="w-[44px] h-full border-r border-[#C3D4E966] rotate-90" />
                    )}
                </div>
            ))}
        </div>
    );
}

export default function CarRentModule() {
    return (
        <div className="w-full h-[120px] rounded-[10px] bg-white relative p-4">
            <div className="flex items-center space-x-2 mb-6">
                <Image src="/Mark.svg" width={16} height={16} alt="Mark" />
                <h1 className="font-semibold text-base text-secondary-500">Pick - Up</h1>
            </div>

            <ThreeSectionLayout sections={["Locations", "Date", "Time"]} />

            <button className="w-[60px] h-[60px] bg-primary-500 rounded-[10px] flex justify-center items-center absolute left-[40%]">
                <Image src="/Swap.svg" width={24} height={24} alt="Swap" />
            </button>
        </div>
    );
}