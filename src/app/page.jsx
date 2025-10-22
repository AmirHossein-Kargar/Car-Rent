import BillingInfo from "@/components/BillingInfo";
import Confirmation from "@/components/Confirmation";
import PaymentMethod from "@/components/PaymentMethod";
import RentalInfo from "@/components/RentalInfo";


export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <BillingInfo />
          <RentalInfo />
          <PaymentMethod />
          <Confirmation />
        </div>

        
      </div>
    </div>
  );
}
