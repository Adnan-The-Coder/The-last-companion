import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond, Amiri } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationPermissionProvider from "@/components/LocationPermissionProvider";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const amiri = Amiri({
  weight: ["400", "700"],
  variable: "--font-arabic",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "The Last Companion | Islamic Funeral Services",
  description: "Compassionate Islamic funeral services with 24/7 support, ensuring dignified and proper Islamic burial rites for your loved ones.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${cormorant.variable} ${amiri.variable} antialiased`}
      >
        <LocationPermissionProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </LocationPermissionProvider>
      </body>
    </html>
  );
}
