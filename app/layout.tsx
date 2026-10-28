import type { Metadata } from "next";
import { Nunito, Fredoka } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-body" });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Shrek Consulting IT | IT support from the swamp",
  description: "Managed IT support, cybersecurity, cloud, and 24/7 helpdesk for teams who have better things to do than restart the router."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${nunito.variable} ${fredoka.variable}`}>{children}</body></html>;
}
