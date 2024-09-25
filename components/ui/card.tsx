import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white shadow-md md:rounded-2xl md:px-14 md:py-8 h-full md:h-[610px] border border-[#e2f0ff] relative flex flex-col">
      {children}
    </div>
  );
};
