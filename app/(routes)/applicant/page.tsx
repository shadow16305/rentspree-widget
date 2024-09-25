import { Card } from "@/components/ui/card";
import { Steps } from "@/components/ui/steps";
import { ApplicantInfo } from "./_components/applicant-info";

export default function ApplicantPage() {
  return (
    <main className="flex items-center justify-center h-screen">
      <Card>
        <Steps />
        <ApplicantInfo />
      </Card>
    </main>
  );
}
