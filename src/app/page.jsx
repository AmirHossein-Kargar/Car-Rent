import CardWeb from "@/components/rental/CardWeb";

export default function Home() {
  return <section className="mx-[25px]">
    {/* details */}
    <div className="flex justify-between w-full h-5 font-semibold mt-8 md:mt-9 mb-5">
      <h1 className="text-sm md:text-base md:text-secondary-300">Popular Car</h1>
      <h2 className="text-xs text-primary-500 md:text-base">View All</h2>
    </div>

<CardWeb />
  </section>
}
