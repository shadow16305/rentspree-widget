"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface RequestFieldsProps {
  emailFrom: string;
  setEmailFrom: (email: string) => void;
  emails: string[];
  setEmails: (emails: string[]) => void;
  handleRemoveEmail: (emailToRemove: string) => void;
}

export const RequestFields = ({
  emailFrom,
  setEmailFrom,
  emails,
  setEmails,
  handleRemoveEmail,
}: RequestFieldsProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "," || e.key === "Enter") {
      e.preventDefault();
      const email = inputValue.trim();
      if (email && !emails.includes(email)) {
        setEmails([...emails, email]);
      }
      setInputValue("");
    }
  };

  const handleEmailFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailFrom(e.target.value);
  };

  const handleApplicantEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="mt-4">
      <div>
        <input
          type="email"
          placeholder="Your email"
          value={emailFrom}
          onChange={handleEmailFromChange}
          className="appearance-none border border-black rounded-lg focus:outline-none h-14 px-4 w-full placeholder:text-neutral-500"
        />
        <p className="text-xs mt-2">We’ll notify you once the applications are completed.</p>
      </div>
      <div className="mt-4">
        <div
          className={cn(
            "border border-black rounded-lg flex items-center flex-wrap px-2 w-full max-w-[554px]",
            emails.length > 0 && "py-2"
          )}>
          {emails.map((email, index) => (
            <span key={index} className="bg-neutral-100 text-sm rounded-full px-3 py-1 mr-2 flex items-center">
              {email}
              <button onClick={() => handleRemoveEmail(email)} className="ml-2 text-xl text-black font-medium">
                ×
              </button>
            </span>
          ))}
          <input
            type="email"
            value={inputValue}
            onKeyDown={handleKeyDown}
            onChange={handleApplicantEmailChange}
            placeholder="Applicant emails"
            className="appearance-none border-none outline-none h-14 px-4 max-w-64 w-full placeholder:text-neutral-500"
          />
        </div>
        <p className="text-xs mt-2">Send multiple requests by separating each email with a comma.</p>
      </div>
    </div>
  );
};
