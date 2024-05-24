import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from 'next/image'
import "./globals.css";
import GitHubLogo from "@/public/github-logo.png";
import Analytics from "@/app/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convert mBTC to USD",
  description: "Convert mBTC to USD with live Bitcoin pricing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics/>
      <body className={inter.className}>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        {children}
        <div className="absolute bottom-0 left-0 p-2 bg-slate-300">
          <a href="https://github.com/CordMarston/mbtc_cordmarston_com" target="_blank"><Image src={GitHubLogo} alt="Github Logo" width={100}/></a>
        </div>
      </body>
    </html>
  );
}
