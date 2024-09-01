import {Inter} from "next/font/google";
import "../globals.css";
import SidebarProvider from "@/app/(home)/(dashboard)/SidebarContext";
import {Sidebar} from "@/app/(home)/(dashboard)/Sidebar";
import {Header} from "@/app/(home)/(dashboard)/Header";
import React from "react";
import {SessionProvider} from "next-auth/react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Flexi-Uploader",
    description: "NextJS Single Page Application, test and continuous integration development.",
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
          <body className={`${inter.className} layout`}>
              <SessionProvider>
                  <SidebarProvider>
                      <Sidebar></Sidebar>
                      <Header></Header>
                      {children}
                  </SidebarProvider>
              </SessionProvider>
          </body>
    </html>
  );
}
