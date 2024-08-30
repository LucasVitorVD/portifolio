import type { Metadata } from "next";
import { Bebas_Neue, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Aside from "@/components/Aside";
import Header from "@/components/Header";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"], 
  weight: "400",
  variable: "--font-title"
})

const robotoSlab = Roboto_Slab({
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"],
  variable: "--font-body"
})

export const metadata: Metadata = {
  title: "Portifólio",
  description: "Portifólio - Lucas Vitor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${bebasNeue.variable} ${robotoSlab.variable} font-body`}>
        <div className="flex min-h-screen bg-primary custom-bg">
          <Aside />

          <div className="flex flex-col flex-1">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
