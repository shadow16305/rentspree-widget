"use client";

import Image from "next/image";
import { CheckList } from "./check-list";
import { Button } from "@/components/ui/button";
import { useFormContext } from "@/context/form-context";
import { useRouter } from "next/navigation";

export const ScreeningOptions = () => {
  const { checkedItems } = useFormContext();
  const router = useRouter();

  const isNextButtonEnabled = checkedItems["rental-app"] || checkedItems["credit-report"];

  return (
    <div className="md:pr-14 h-full flex flex-col">
      <h1 className="text-xl text-black font-bold">Select screening items</h1>
      <CheckList />
      <div className="mt-4 flex flex-col md:flex-row md:items-center gap-1 text-sm">
        <div className="flex items-center gap-x-1">
          <p>*Screening reports by</p>{" "}
          <Image src="/images/transunion.png" alt="transunion" width={84} height={22} className="pb-2.5" />
        </div>
        <a
          href="https://support.rentspree.com/en/screening-restrictions-and-limitations"
          target="_blank"
          rel="noreferrer"
          className="text-black underline">
          Screening Restrictions
        </a>
      </div>
      <div className="flex-grow h-auto hidden md:block" />
      <hr className="w-full h-px bg-neutral-600 mt-6 md:mt-0" />
      <div className="mt-4 flex justify-end">
        <Button disabled={!isNextButtonEnabled} onClick={() => router.push("property")} className="w-full md:w-fit">
          Next
        </Button>
      </div>
    </div>
  );
};
