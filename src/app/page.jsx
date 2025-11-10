"use client"

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import CardWeb from "@/components/rental/CardWeb";

const supabaseUrl = 'https://xttfonxqhljsdegkalgg.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data, error } = await supabase
          .from('cars')
          .select('*');

        if (error) {
          console.error('Supabase error:', error);
          return;
        }

        console.log('Cars data:', data);
        setCars(data || []);
      } catch (error) {
        console.error('Error loading cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const popularCars = cars.slice(0, 4);
  const recommendedCars = cars.slice(4);

  return <section className="mx-[25px]">

    {/* details */}
    <div className="flex justify-between w-full md:w-[1312px] h-5 font-semibold mt-8 md:mt-9 mb-5 md:mx-auto">
      <h1 className="text-sm md:text-base text-secondary-300">Popular Car</h1>
      <h2 className="text-xs text-primary-500 md:text-base">View All</h2>
    </div>

    {loading ? (
      <div className="text-center py-10">Loading cars...</div>
    ) : (
      <>
        {/* Mobile - Horizontal scroll with CardWeb */}
        <div className="flex gap-4 overflow-x-auto md:hidden">
          {popularCars.map((car) => (
            <CardWeb key={car.id} car={car} />
          ))}
        </div>

        {/* Desktop - Grid with CardWeb - 4 cards, 1312px width, 388px height, 32px gap */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 w-[1312px] h-[388px] mx-auto">
          {popularCars.map((car) => (
            <CardWeb key={car.id} car={car} />
          ))}
        </div>

        {/* Recommendation Car title */}
        {recommendedCars.length > 0 && (
          <>
            <div className="w-full md:w-[1312px] md:mx-auto my-8">
              <h2 className="font-semibold text-sm text-secondary-300 md:text-base">Recomendation Car</h2>
            </div>

            {/* Recommended Cars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 w-full md:w-[1312px] md:mx-auto mb-8">
              {recommendedCars.map((car) => (
                <CardWeb key={car.id} car={car} />
              ))}
            </div>
          </>
        )}
      </>
    )}
  </section>
}
