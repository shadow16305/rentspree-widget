"use client";

import { checkboxes } from "@/constants";
import { AddressFields } from "@/types/adress";
import { CheckedItems } from "@/types/checklist";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface FormContextObject {
  checkedItems: CheckedItems;
  setCheckedItems: React.Dispatch<React.SetStateAction<CheckedItems>>;
  totalPrice: string;
  setTotalPrice: React.Dispatch<React.SetStateAction<string>>;
  address: AddressFields;
  setAddress: React.Dispatch<React.SetStateAction<AddressFields>>;
  emailFrom: string;
  setEmailFrom: React.Dispatch<React.SetStateAction<string>>;
  emails: string[];
  setEmails: React.Dispatch<React.SetStateAction<string[]>>;
  selectedPaymentPerson: string;
  setSelectedPaymentPerson: React.Dispatch<React.SetStateAction<string>>;
}

export const FormContext = createContext<FormContextObject>({
  checkedItems: {},
  setCheckedItems: () => {},
  totalPrice: "49.99$",
  setTotalPrice: () => {},
  address: { street: "", unit: "", city: "", state: "", zip: "" },
  setAddress: () => {},
  emailFrom: "",
  setEmailFrom: () => {},
  emails: [],
  setEmails: () => {},
  selectedPaymentPerson: "Applicants",
  setSelectedPaymentPerson: () => {},
});

export const FormContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialCheckedItems = checkboxes.reduce((acc, checkbox) => {
    acc[checkbox.id] = true;
    return acc;
  }, {} as CheckedItems);

  const [checkedItems, setCheckedItems] = useState<CheckedItems>(initialCheckedItems);
  const [totalPrice, setTotalPrice] = useState<string>("49.99");
  const [address, setAddress] = useState<AddressFields>({ street: "", unit: "", city: "", state: "", zip: "" });
  const [emailFrom, setEmailFrom] = useState<string>("");
  const [emails, setEmails] = useState<string[]>([]);
  const [selectedPaymentPerson, setSelectedPaymentPerson] = useState<string>("Applicants");

  useEffect(() => {
    const creditReportChecked = checkedItems["credit-report"];
    const verificationReportChecked = checkedItems["income-verification"];

    if (!creditReportChecked) {
      setTotalPrice("Free");
    } else {
      setTotalPrice(verificationReportChecked ? "49.99" : "39.99");
    }
  }, [checkedItems]);

  const formCtxValue = {
    checkedItems,
    setCheckedItems,
    totalPrice,
    setTotalPrice,
    address,
    setAddress,
    emailFrom,
    setEmailFrom,
    emails,
    setEmails,
    selectedPaymentPerson,
    setSelectedPaymentPerson,
  };

  return <FormContext.Provider value={formCtxValue}>{children}</FormContext.Provider>;
};

export const useFormContext = (): FormContextObject => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
};
