import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Bharat Travels",
  description: "Bharat Travels",
  generator: "Lokesh Sharma",
  keywords: ["Bharat Travels", "Rajasthan", "Tourism", "Travel"],
  authors: [{ name: "Lokesh Sharma" }],
  openGraph: {
    title: "Bharat Travels",
    description: "Bharat Travels",
    type: "website",
    locale: "en",
    siteName: "Bharat Travels",
    url: "https://bharat-travels.vercel.app",
    images: [
      {
        url: "/image.png?height=400&width=600&query=logo bharat travels",
        height: 400,
        width: 600,
        alt: "Bharat Travels Logo",
      },
    ],
  },
  icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}