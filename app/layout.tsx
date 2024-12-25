import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "rute-krl - Lihat Jadwal Dengan Mudah",
  description: "rute-krl - Lihat Jadwal Dengan Mudah",
  keywords: ["jadwal krl", "rute krl", "kai access"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/fav-icon.png" />
      </head>
      <body className="dark:bg-stone-900">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}