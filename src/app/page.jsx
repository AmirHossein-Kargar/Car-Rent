import BillingInfo from "@/components/BillingInfo";
import Card from "@/components/card";
import RentalSummary from "@/components/RentalSummary";
import Input from "@/ui/Input";


export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col gap-4 p-8">
      <Card />
      <RentalSummary />
      <BillingInfo />
      <Input type={"text"} placeholder={"Your name"}/>
    </div>
  );
}
