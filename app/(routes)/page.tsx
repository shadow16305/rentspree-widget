import { Card } from "@/components/ui/card";
import { Steps } from "@/components/ui/steps";
import { ScreeningOptions } from "./_components/screening-options";

export default function HomePage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Card>
        <Steps />
        <ScreeningOptions />
      </Card>
    </main>
  );
}
