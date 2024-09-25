"use client";

import { checkboxes } from "@/constants";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { PaymentRadioGroup } from "./payment-radio-group";
import { useFormContext } from "@/context/form-context";

export const CheckList = () => {
  const { checkedItems, setCheckedItems, selectedPaymentPerson, setSelectedPaymentPerson, totalPrice } =
    useFormContext();

  const handleCheckboxChange = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const creditReportIndex = 1;
  const verificationReportIndex = 4;

  let verificationReportIsChecked = checkedItems[checkboxes[verificationReportIndex].id];
  let creditReportChecked = checkedItems[checkboxes[creditReportIndex].id];

  const documentFee = verificationReportIsChecked ? "& documents" : "";

  let inquiryString = `Who will pay the $${
    creditReportChecked ? totalPrice : "39.99"
  } screening reports ${documentFee} fee?`;

  return (
    <>
      <ul className="list-none mt-4 space-y-2">
        {checkboxes.map((checkbox, index) => (
          <li key={checkbox.id} className={cn("flex justify-between w-full items-center")}>
            <div className="flex items-center gap-x-2">
              <label
                htmlFor={checkbox.id}
                className={cn(
                  "relative flex items-center justify-center size-9 rounded-sm transition",
                  index > 1 && !creditReportChecked ? "cursor-not-allowed" : "cursor-pointer hover:bg-[#1f15e129]"
                )}>
                <input
                  type="checkbox"
                  id={checkbox.id}
                  disabled={index > 1 && !creditReportChecked}
                  checked={checkedItems[checkbox.id] || false}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                  className={cn(
                    "peer appearance-none h-5 w-5 border-2 border-black rounded-sm transition",
                    index > 1 && !creditReportChecked
                      ? "cursor-not-allowed opacity-40"
                      : "cursor-pointer checked:bg-black opacity-100"
                  )}
                />
                <Check
                  className={cn(
                    "absolute size-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white transition",
                    index > 1 && !creditReportChecked ? "opacity-0" : "opacity-0 peer-checked:opacity-100"
                  )}
                />
              </label>
              <label
                htmlFor={checkbox.id}
                className={cn(
                  "cursor-pointer text-black",
                  index > 1 && !creditReportChecked ? "cursor-not-allowed opacity-40" : "opacity-100"
                )}>
                {checkbox.label}
              </label>
            </div>
            <span className="text-neutral-500">{checkbox.price}</span>
          </li>
        ))}
      </ul>
      <PaymentRadioGroup
        creditReportChecked={creditReportChecked}
        inqueryString={inquiryString}
        selectedPaymentPerson={selectedPaymentPerson}
        onPaymentPersonChange={setSelectedPaymentPerson}
      />
    </>
  );
};
