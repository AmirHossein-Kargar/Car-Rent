import BillingInfo from "@/components/BillingInfo";
import Card from "@/components/card";
import Confirmation from "@/components/Confirmation";
import PaymentMethod from "@/components/PaymentMethod";
import RentalInfo from "@/components/RentalInfo";
import RentalSummary from "@/components/RentalSummary";


export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 p-8">
      <Card />
      <RentalSummary />
      <BillingInfo />
      <RentalInfo />
      <PaymentMethod /> 
      <Confirmation />
    </div>
  );
}
