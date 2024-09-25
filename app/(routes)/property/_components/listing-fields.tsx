"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { states } from "@/constants";
import { cn } from "@/lib/utils";
import { AddressFields } from "@/types/adress";

interface ListingFieldsProps {
  address: AddressFields;
  setLocalAddress: (address: AddressFields) => void;
  isError: boolean;
}

export const ListingFields = ({ address, setLocalAddress, isError }: ListingFieldsProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "zip" && value.length > 5) return;
    setLocalAddress({
      ...address,
      [name]: value,
    });
  };

  const handleStateChange = (value: string) => {
    setLocalAddress({
      ...address,
      state: value,
    });
  };

  return (
    <div className="mt-4">
      <div className="w-full relative">
        <input
          type="text"
          name="street"
          placeholder="Street address"
          value={address.street}
          onChange={handleInputChange}
          className={cn(
            "appearance-none border border-black rounded-lg focus:outline-none h-14 px-4 w-full placeholder:text-neutral-500",
            isError && !address.street && "border-red-500"
          )}
        />
        {isError && !address.street && <p className="text-red-500 text-sm absolute left-0">Required</p>}
      </div>
      <div className="flex items-center justify-between gap-4 mt-8 w-full">
        <input
          type="number"
          name="unit"
          placeholder="Unit number"
          value={address.unit}
          onChange={handleInputChange}
          className="appearance-none border border-black rounded-lg focus:outline-none h-14 px-4 w-1/2 placeholder:text-neutral-500"
        />
        <div className="w-1/2 relative">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleInputChange}
            className={cn(
              "appearance-none border border-black rounded-lg focus:outline-none h-14 px-4 w-full placeholder:text-neutral-500",
              isError && !address.city && "border-red-500"
            )}
          />
          {isError && !address.city && <p className="text-red-500 text-sm absolute left-0">Required</p>}
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 mt-8 w-full">
        <div className="w-1/2 relative">
          <Select onValueChange={handleStateChange}>
            <SelectTrigger
              className={cn(
                "appearance-none border border-black rounded-lg focus:outline-none h-14 px-4 w-full text-base",
                isError && !address.state && "border-red-500",
                !address.state ? "text-neutral-500" : "text-black"
              )}>
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              {states.map((state) => (
                <SelectItem key={state} value={state} className="cursor-pointer">
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {isError && !address.state && <p className="text-red-500 text-sm absolute left-0">Required</p>}
        </div>
        <div className="w-1/2 relative">
          <input
            type="number"
            name="zip"
            placeholder="ZIP code"
            value={address.zip}
            onChange={handleInputChange}
            className={cn(
              "appearance-none border border-black rounded-lg focus:outline-none h-14 px-4 w-full placeholder:text-neutral-500",
              isError && !address.zip && "border-red-500"
            )}
          />
          {isError && !address.zip && <p className="text-red-500 text-sm absolute left-0">Required</p>}
        </div>
      </div>
    </div>
  );
};
