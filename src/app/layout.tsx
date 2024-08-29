import type { Metadata } from "next";
import { Bebas_Neue, Jersey_25 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Aside from "@/components/Aside";
import Header from "@/components/Header";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" })
const jersey25 = Jersey_25({ subsets: ["latin"], weight: "400" })

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
      <body className={cn(`${bebasNeue.className} ${jersey25.className}`)}>
        <div className="flex min-h-screen bg-primary">
          <Aside />

          <div className="flex-1">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
