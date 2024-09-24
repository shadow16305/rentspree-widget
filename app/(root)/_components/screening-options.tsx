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
    <>
      <h1 className="mt-4 text-xl text-black font-bold">Select screening items</h1>
      <CheckList />
      <div className="mt-4 flex items-center gap-x-1 text-sm">
        <p>*Screening reports by</p>{" "}
        <Image src="/images/transunion.png" alt="transunion" width={84} height={22} className="pb-2.5" />
        <a
          href="https://support.rentspree.com/en/screening-restrictions-and-limitations"
          target="_blank"
          rel="noreferrer"
          className="text-black underline">
          Screening Restrictions
        </a>
      </div>
      <hr className="w-full h-px bg-neutral-600 mt-6" />
      <div className="mt-4 flex justify-end">
        <Button disabled={!isNextButtonEnabled} onClick={() => router.push("property")}>
          Next
        </Button>
      </div>
    </>
  );
};
