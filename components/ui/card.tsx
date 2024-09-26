import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white md:shadow-md max-w-[91%] md:rounded-2xl md:max-w-none md:w-1/2 2xl:w-5/12 md:pl-14 md:py-8 h-full md:h-[610px] md:border border-[#e2f0ff] relative flex flex-col">
      {children}
    </div>
  );
};
