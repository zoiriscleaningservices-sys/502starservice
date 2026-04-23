import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "502 Star Service | #1 Cleaning Services in Louisville, KY",
  description: "Looking for top-rated cleaning services in Louisville, KY? 502 Star Service offers expert house cleaning, deep cleaning, and maid services. Get a free quote today!",
  keywords: "cleaning services, house cleaning, maid service, deep cleaning, Louisville KY, commercial cleaning",
  icons: {
    icon: '/images/logo.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="xmGae3ujVfInVGbCGAuESkICJXZZOKLj7iISf8ZkfKI" />
      </head>
      <body className={`${inter.className} font-sans antialiased overflow-x-hidden pt-20 bg-gray-50`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
