"use client";

import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const Steps = () => {
  const pathname = usePathname();

  // Create refs for each step to target them for scrollIntoView
  const stepRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    // Find the current active step and scroll it into view
    if (pathname === "/") {
      stepRefs.current[0]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    } else if (pathname === "/property") {
      stepRefs.current[1]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    } else if (pathname === "/applicant") {
      stepRefs.current[2]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [pathname]);

  return (
    <div className="overflow-x-auto overflow-y-hidden md:overflow-hidden whitespace-nowrap pt-4 md:pt-0 pb-4 scrollbar-hide">
      <nav className="flex items-center gap-x-2">
        <div className="flex items-center">
          {(pathname === "/property" || pathname === "/applicant") && <CircleCheck className="text-green-500" />}
          <span
            ref={(el) => {
              stepRefs.current[0] = el; // No return statement
            }}
            className={cn("py-2 px-3 rounded-3xl text-neutral-500", pathname === "/" && "text-black bg-[#1f15e129]")}>
            1. Screening options
          </span>
        </div>
        <hr className="bg-neutral-300 w-6 h-0.5 inline-block" />
        <div className="flex items-center">
          {pathname === "/applicant" && <CircleCheck className="text-green-500" />}
          <span
            ref={(el) => {
              stepRefs.current[1] = el; // No return statement
            }}
            className={cn(
              "py-2 px-3 rounded-3xl text-neutral-500",
              pathname === "/property" && "text-black bg-[#1f15e129]"
            )}>
            2. Property info
          </span>
        </div>
        <hr className="bg-neutral-300 w-6 h-0.5 inline-block" />
        <span
          ref={(el) => {
            stepRefs.current[2] = el; // No return statement
          }}
          className={cn(
            "py-2 px-3 rounded-3xl text-neutral-500",
            pathname === "/applicant" && "text-black bg-[#1f15e129]"
          )}>
          3. Applicant info
        </span>
      </nav>
    </div>
  );
};
