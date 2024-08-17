import type { Metadata } from "next";
import "./globals.css";
import favicon from "@/app/favicon.ico";

export const metadata: Metadata = {
  title: "Manago",
  description: "One stop solution for Bangalore Hoteliers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
      </head>
      <body className=" overflow-x-hidden">{children}</body>
    </html>
  );
}