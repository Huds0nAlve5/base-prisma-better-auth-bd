import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import MenuBarPerson from "@/components/menubar-person";

export const metadata: Metadata = {
  title: "Login System",
  description: "Sistema de login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-full">
        <Toaster />
        <MenuBarPerson />
        {children}
      </body>
    </html>
  );
}
