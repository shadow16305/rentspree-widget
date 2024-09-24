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
}

export const FormContext = createContext<FormContextObject>({
  checkedItems: {},
  setCheckedItems: () => {},
  totalPrice: "49.99$",
  setTotalPrice: () => {},
  address: { street: "", unit: "", city: "", state: "", zip: "" },
  setAddress: () => {},
});

export const FormContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialCheckedItems = checkboxes.reduce((acc, checkbox) => {
    acc[checkbox.id] = true;
    return acc;
  }, {} as CheckedItems);

  const [checkedItems, setCheckedItems] = useState<CheckedItems>(initialCheckedItems);
  const [totalPrice, setTotalPrice] = useState<string>("49.99");
  const [address, setAddress] = useState<AddressFields>({ street: "", unit: "", city: "", state: "", zip: "" });

  useEffect(() => {
    console.log("Checked items: ", checkedItems);
    console.log("Address: ", address);
  }, [checkedItems, address]);

  return (
    <FormContext.Provider value={{ checkedItems, setCheckedItems, totalPrice, setTotalPrice, address, setAddress }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextObject => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
