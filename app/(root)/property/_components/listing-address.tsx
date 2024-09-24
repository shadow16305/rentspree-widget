"use client";

import { useRouter } from "next/navigation";
import { ListingFields } from "./listing-fields";
import { Button } from "@/components/ui/button";

export const ListingAddress = () => {
  const router = useRouter();

  return (
    <>
      <h1 className="mt-4 text-xl text-black font-bold">Confirm Listing Address</h1>
      <ListingFields />
      <hr className="w-full h-px bg-neutral-600 mt-36" />
      <div className="flex items-center justify-between mt-4">
        <Button onClick={() => router.push("/")} className="bg-neutral-100 text-black border-2 border-black">
          Back
        </Button>
        <Button onClick={() => router.push("")}>Next</Button>
      </div>
    </>
  );
};
