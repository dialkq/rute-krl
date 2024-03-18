import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";


export const metadata: Metadata = {
  title: "Rute KRL",
  description: "Cek Rute KRL kamu di sini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
