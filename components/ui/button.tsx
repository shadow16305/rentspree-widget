import { cn } from "@/lib/utils";

export const Button = ({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "bg-[#1f15e1] rounded-lg h-12 flex items-center justify-center w-fit px-4 text-white disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}>
      {props.children}
    </button>
  );
};
