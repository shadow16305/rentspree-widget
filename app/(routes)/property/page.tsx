import { Card } from "@/components/ui/card";
import { Steps } from "@/components/ui/steps";
import { ListingAddress } from "./_components/listing-address";

export default function PropertyPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Card>
        <Steps />
        <ListingAddress />
      </Card>
    </main>
  );
}
