import { cn } from "@/lib/utils";

interface PaymentRadioButtonsProps {
  creditReportChecked: boolean;
  inqueryString: string;
  selectedPaymentPerson: string;
  onPaymentPersonChange: (value: string) => void;
}

export const PaymentRadioGroup: React.FC<PaymentRadioButtonsProps> = ({
  creditReportChecked,
  inqueryString,
  selectedPaymentPerson,
  onPaymentPersonChange,
}) => {
  return (
    <div className={cn("mt-6", !creditReportChecked && "opacity-40")}>
      <h2 className="font-semibold text-black">{inqueryString}</h2>
      <div className="mt-2 flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <label
            htmlFor="app"
            className={cn(
              "size-9 transition flex items-center justify-center rounded-full relative cursor-pointer",
              !creditReportChecked ? "cursor-not-allowed" : "cursor-pointer hover:bg-[#1f15e129]"
            )}>
            <input
              type="radio"
              name="payment-person"
              id="app"
              checked={creditReportChecked ? selectedPaymentPerson === "app" : false}
              disabled={!creditReportChecked}
              onChange={() => onPaymentPersonChange("app")}
              className={cn(
                "appearance-none border-2 border-black rounded-full w-5 h-5 peer cursor-pointer",
                !creditReportChecked ? "cursor-not-allowed" : "cursor-pointer"
              )}
            />
            <div className="absolute w-3 h-3 bg-black rounded-full opacity-0 peer-checked:opacity-100" />
          </label>
          <label htmlFor="app" className={cn("cursor-pointer", !creditReportChecked && "cursor-not-allowed")}>
            Applicants
          </label>
        </div>
        <div className="flex items-center gap-x-2">
          <label
            htmlFor="me"
            className={cn(
              "size-9 transition flex items-center justify-center rounded-full relative cursor-pointer",
              !creditReportChecked ? "cursor-not-allowed" : "cursor-pointer hover:bg-[#1f15e129]"
            )}>
            <input
              type="radio"
              name="payment-person"
              id="me"
              checked={creditReportChecked ? selectedPaymentPerson === "me" : false}
              disabled={!creditReportChecked}
              onChange={() => onPaymentPersonChange("me")}
              className={cn(
                "appearance-none border-2 border-black rounded-full w-5 h-5 peer cursor-pointer",
                !creditReportChecked ? "cursor-not-allowed" : "cursor-pointer"
              )}
            />
            <div className="absolute w-3 h-3 bg-black rounded-full opacity-0 peer-checked:opacity-100" />
          </label>
          <label htmlFor="me" className={cn("cursor-pointer", !creditReportChecked && "cursor-not-allowed")}>
            Me
          </label>
        </div>
      </div>
    </div>
  );
};
