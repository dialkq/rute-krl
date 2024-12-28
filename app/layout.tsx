import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "rute-krl - Lihat Jadwal Dengan Mudah",
  description: "rute-krl memungkinkan Anda melihat jadwal KRL dengan mudah dan akurat.",
  keywords: ["jadwal krl", "rute krl", "kai access", "jadwal kereta", "transportasi publik"],
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/fav-icon.png",
    apple: "/fav-icon.png",
  },
  openGraph: {
    title: "rute-krl - Lihat Jadwal Dengan Mudah",
    description: "rute-krl memungkinkan Anda melihat jadwal KRL dengan mudah dan akurat.",
    url: "https://rute-krl.vercel.app/",
    siteName: "rute-krl",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gambar Open Graph untuk rute-krl",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "rute-krl - Lihat Jadwal Dengan Mudah",
    description: "rute-krl memungkinkan Anda melihat jadwal KRL dengan mudah dan akurat.",
    images: ["/twitter-image.jpg"],
    site: "@jokowi", 
    creator: "@jokowi", 
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://rute-krl.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "rute-krl",
    url: "https://rute-krl.vercel.app/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://rute-krl.vercel.app//search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="id">
      <head>
        <link rel="shortcut icon" href="/fav-icon.png" />
        <meta name="application-name" content="rute-krl" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="dark:bg-stone-900">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}