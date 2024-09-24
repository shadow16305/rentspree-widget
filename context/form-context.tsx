"use client";

import { checkboxes } from "@/constants";
import { CheckedItems } from "@/types/checklist";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface FormContextObject {
  checkedItems: CheckedItems;
  setCheckedItems: React.Dispatch<React.SetStateAction<CheckedItems>>;
  totalPrice: string;
  setTotalPrice: React.Dispatch<React.SetStateAction<string>>;
}

export const FormContext = createContext<FormContextObject>({
  checkedItems: {},
  setCheckedItems: () => {},
  totalPrice: "49.99$",
  setTotalPrice: () => {},
});

export const FormContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialCheckedItems = checkboxes.reduce((acc, checkbox) => {
    acc[checkbox.id] = true;
    return acc;
  }, {} as CheckedItems);

  const [checkedItems, setCheckedItems] = useState<CheckedItems>(initialCheckedItems);
  const [totalPrice, setTotalPrice] = useState<string>("49.99");

  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);

  return (
    <FormContext.Provider value={{ checkedItems, setCheckedItems, totalPrice, setTotalPrice }}>
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
