import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { FormContextProvider } from "@/context/form-context";

export const metadata: Metadata = {
  title: "Rentspree widget",
  description: "Submission widget",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans", poppins.variable)}>
        <FormContextProvider>{children}</FormContextProvider>
      </body>
    </html>
  );
}
