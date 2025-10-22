import BillingInfo from "@/components/BillingInfo";
import Confirmation from "@/components/Confirmation";
import PaymentMethod from "@/components/PaymentMethod";
import RentalInfo from "@/components/RentalInfo";


export default function Home() {
  return (
    <div className="min-h-screen flex justify-center px-4 py-8">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center space-y-8">
          <BillingInfo />
          <RentalInfo />
          <PaymentMethod />
          <Confirmation />
        </div>
      </div>
    </div>
  );
}
