"use client";

import { useRouter } from "next/navigation";
import { ListingFields } from "./listing-fields";
import { Button } from "@/components/ui/button";
import { useFormContext } from "@/context/form-context";
import { useState } from "react";
import { AddressFields } from "@/types/adress";

export const ListingAddress = () => {
  const { address, setAddress } = useFormContext();
  const [localAddress, setLocalAddress] = useState<AddressFields>({
    street: address.street || "",
    unit: address.unit || "",
    city: address.city || "",
    state: address.state || "",
    zip: address.zip || "",
  });
  const [isError, setIsError] = useState<boolean>(false);

  const router = useRouter();

  const handleNextClick = () => {
    if (!localAddress.street || !localAddress.city || !localAddress.zip) {
      setIsError(true);
      return;
    }

    setAddress(localAddress);
    router.push("applicant");
  };

  return (
    <div className="md:pr-14 h-full flex flex-col">
      <h1 className="text-xl text-black font-bold">Confirm Listing Address</h1>
      <ListingFields address={localAddress} setLocalAddress={setLocalAddress} isError={isError} />
      <div className="flex-grow h-auto hidden md:block" />
      <hr className="w-full h-px bg-neutral-600 mt-6 md:mt-0" />
      <div className="flex items-center justify-between mt-4">
        <Button
          onClick={() => router.push("/")}
          className="transition bg-transparent hover:bg-neutral-100 text-black underline">
          Back
        </Button>
        <Button onClick={handleNextClick}>Next</Button>
      </div>
    </div>
  );
};
