import BillingInfo from "@/components/BillingInfo";
import Card from "@/components/card";
import RentalInfo from "@/components/RentalInfo";
import RentalSummary from "@/components/RentalSummary";


export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 p-8">
      <Card />
      <RentalSummary />
      <BillingInfo />
      <RentalInfo />
    </div>
  );
}
