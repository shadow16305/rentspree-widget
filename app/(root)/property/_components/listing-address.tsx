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
    router.push("");
  };

  return (
    <>
      <h1 className="mt-4 text-xl text-black font-bold">Confirm Listing Address</h1>
      <ListingFields address={localAddress} setLocalAddress={setLocalAddress} isError={isError} />
      <hr className="w-full h-px bg-neutral-600 mt-36" />
      <div className="flex items-center justify-between mt-4">
        <Button onClick={() => router.push("/")} className="bg-neutral-100 text-black border-2 border-black">
          Back
        </Button>
        <Button onClick={handleNextClick}>Next</Button>
      </div>
    </>
  );
};
