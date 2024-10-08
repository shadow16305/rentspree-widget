"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { RequestFields } from "./request-fields";
import { useFormContext } from "@/context/form-context";

export const ApplicantInfo = () => {
  const { emails, setEmails, emailFrom, setEmailFrom } = useFormContext();

  const router = useRouter();

  const handleRemoveEmail = (emailToRemove: string) => {
    setEmails(emails.filter((email) => email !== emailToRemove));
  };

  return (
    <div className="md:pr-14 h-full flex flex-col">
      <h1 className="text-xl text-black font-bold">Request Applications</h1>
      <RequestFields
        emailFrom={emailFrom}
        setEmailFrom={setEmailFrom}
        emails={emails}
        setEmails={setEmails}
        handleRemoveEmail={handleRemoveEmail}
      />
      <div className="flex-grow h-auto hidden md:block" />
      <hr className="w-full h-px bg-neutral-600 mt-6 md:mt-0" />
      <div className="flex items-center justify-between mt-4">
        <Button
          onClick={() => router.push("property")}
          className="transition bg-transparent hover:bg-neutral-100 text-black underline">
          Back
        </Button>
        <Button>Send Request</Button>
      </div>
    </div>
  );
};
