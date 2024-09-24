import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { states } from "@/constants";

export const ListingFields = () => {
  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Street address"
        className="appearance-none border border-black rounded-lg focus:outline-none h-14 px-4 w-full"
      />
      <div className="flex items-center justify-between gap-4 mt-8">
        <input
          type="number"
          placeholder="Unit number"
          className="appearance-none border border-black rounded-lg focus:outline-none h-14 px-4 w-full"
        />
        <input
          type="text"
          placeholder="City"
          className="appearance-none border border-black rounded-lg focus:outline-none h-14 px-4 w-full"
        />
      </div>
      <div className="flex items-center justify-between gap-4 mt-8">
        <Select>
          <SelectTrigger className="border border-black rounded-lg focus:outline-none h-14 px-4 w-full text-base text-neutral-600">
            <SelectValue placeholder="State" />
          </SelectTrigger>
          <SelectContent>
            {states.map((state) => (
              <SelectItem key={state} value={state} className="cursor-pointer">
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input
          type="number"
          placeholder="ZIP code"
          className="appearance-none border border-black rounded-lg focus:outline-none h-14 px-4 w-full"
        />
      </div>
    </div>
  );
};
