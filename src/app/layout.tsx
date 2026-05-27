import type { Metadata } from "next";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edinwood International School | Palakkad, Kerala",
  description: "A CBSE-affiliated, sports-integrated, value-driven institution shaping healthy, skilled, and confident lifelong learners.",
  keywords: ["Edinwood", "School", "Palakkad", "Kerala", "CBSE", "Juventus Academy", "International School"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col font-sans">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
