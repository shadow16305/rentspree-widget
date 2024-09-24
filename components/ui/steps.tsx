"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const Steps = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-x-2">
      <span className={cn("py-2 px-3 rounded-3xl text-neutral-500", pathname === "/" && "text-black bg-[#1f15e129]")}>
        1. Screening options
      </span>
      <hr className="bg-neutral-300 w-6 h-0.5" />
      <span
        className={cn(
          "py-2 px-3 rounded-3xl text-neutral-500",
          pathname === "/property" && "text-black bg-[#1f15e129]"
        )}>
        2. Property info
      </span>
      <hr className="bg-neutral-300 w-6 h-0.5" />
      <span
        className={cn(
          "py-2 px-3 rounded-3xl text-neutral-500",
          pathname === "/applicant" && "text-black bg-[#1f15e129]"
        )}>
        3. Applicant info
      </span>
    </nav>
  );
};
