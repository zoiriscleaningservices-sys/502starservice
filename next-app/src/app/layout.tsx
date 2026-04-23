import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "502 Star Service",
  description: "Louisville's #1 Rated Cleaning Services",
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
