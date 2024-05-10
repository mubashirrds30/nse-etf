import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "NSE_ETF"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("bg-background min-h-screen bg-background font-sans antialiased", inter.variable)}>
        {children}</body>
    </html>
  );
}
