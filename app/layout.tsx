import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond, Amiri } from "next/font/google";
import Script from "next/script";

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
  title: "The Last Companion | Islamic Funeral Services - Dignified Islamic Burial Rites",
  description: "Compassionate Islamic funeral services with 24/7 emergency support. Professional Islamic burial preparation, janazah prayer arrangements, and grief counseling following authentic Islamic traditions and Sunnah practices.",
  keywords: "Islamic funeral services, Muslim burial, janazah services, Islamic burial rites, Muslim funeral home, ghusl preparation, kafan shrouding, Islamic cemetery, Muslim death rituals, halal funeral services, Islamic mortuary, Muslim bereavement support, janazah prayer, Islamic funeral director, Muslim funeral arrangements",
  authors: [
    {
      name: "Syed Adnan Ali",
      url: "https://www.linkedin.com/in/syedadnanali99",
    },
  ],
  creator: "Syed Adnan Ali",
  publisher: "The Last Companion",
  openGraph: {
    title: "The Last Companion | Islamic Funeral Services - Dignified Islamic Burial Rites",
    description: "Professional Islamic funeral services with 24/7 support. Authentic ghusl preparation, kafan shrouding, janazah arrangements, and Islamic burial services following Sunnah traditions.",
    url: "https://thelastcompanion.com",
    siteName: "The Last Companion - Islamic Funeral Services",
    images: [
      {
        url: "/assets/islamic-funeral-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "The Last Companion - Islamic Funeral Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Last Companion | Islamic Funeral Services",
    description: "Compassionate Islamic funeral services with 24/7 support. Professional Islamic burial preparation and janazah arrangements following authentic Islamic traditions.",
    images: ["/assets/islamic-funeral-services-twitter.jpg"],
    creator: "@LastCompanionServices",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://thelastcompanion.com",
  },
  category: "funeral services",
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Hyderabad',
    'geo.position': '17.3850;78.4867',
    'ICBM': '17.3850, 78.4867',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2D5A27" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="The Last Companion" />
        <link rel="manifest" href="/manifest.json" />
      </head>
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
        <Script id="schema-script" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FuneralHome",
            name: "The Last Companion",
            description: "Professional Islamic funeral services providing dignified Islamic burial rites, janazah arrangements, and comprehensive bereavement support following authentic Islamic traditions.",
            url: "https://thelastcompanion.com",
            logo: "https://thelastcompanion.com/assets/logo.png",
            image: "https://thelastcompanion.com/assets/islamic-funeral-services.jpg",
            telephone: "+91-XXXX-XXXXXX",
            email: "info@thelastcompanion.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Your Street Address",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500001",
              addressCountry: "IN"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "17.3850",
              longitude: "78.4867"
            },
            openingHours: "Mo-Su 00:00-23:59",
            serviceArea: {
              "@type": "City",
              name: "Hyderabad"
            },
            priceRange: "$$",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Islamic Funeral Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Islamic Burial Preparation",
                    description: "Complete ghusl preparation and kafan shrouding following Islamic traditions"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Janazah Prayer Arrangements",
                    description: "Professional coordination of janazah prayers and Islamic funeral ceremonies"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Islamic Cemetery Services",
                    description: "Burial arrangements in Islamic cemeteries with proper qibla orientation"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "24/7 Emergency Support",
                    description: "Round-the-clock assistance for immediate funeral needs"
                  }
                }
              ]
            },
            founder: {
              "@type": "Person",
              name: "Syed Adnan Ali",
              sameAs: "https://www.linkedin.com/in/syedadnanali99"
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "150",
              bestRating: "5"
            },
            review: [
              {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5"
                },
                author: {
                  "@type": "Person",
                  name: "Anonymous Family"
                },
                reviewBody: "The Last Companion provided exceptional Islamic funeral services during our difficult time. Their respect for Islamic traditions and compassionate support made all the difference."
              }
            ],
            sameAs: [
              "https://www.facebook.com/thelastcompanion",
              "https://www.instagram.com/thelastcompanion",
              "https://twitter.com/LastCompanionServices"
            ],
            knowsAbout: [
              "Islamic Funeral Rites",
              "Muslim Burial Traditions",
              "Janazah Prayer",
              "Ghusl Preparation",
              "Kafan Shrouding",
              "Islamic Cemetery Services",
              "Muslim Bereavement Support",
              "Halal Funeral Services",
              "Islamic Death Rituals",
              "Sunnah Funeral Practices"
            ],
            areaServed: [
              {
                "@type": "City",
                name: "Hyderabad",
                sameAs: "https://en.wikipedia.org/wiki/Hyderabad"
              },
              {
                "@type": "State",
                name: "Telangana",
                sameAs: "https://en.wikipedia.org/wiki/Telangana"
              }
            ]
          })}
        </Script>
        <Script id="local-business-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://thelastcompanion.com/#organization",
            name: "The Last Companion",
            alternateName: "Islamic Funeral Services Hyderabad",
            description: "Leading Islamic funeral services provider in Hyderabad offering authentic Islamic burial rites, janazah arrangements, and 24/7 emergency support.",
            url: "https://thelastcompanion.com",
            telephone: "+91-XXXX-XXXXXX",
            email: "info@thelastcompanion.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Your Street Address",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              postalCode: "500001",
              addressCountry: "IN"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "17.3850",
              longitude: "78.4867"
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday", 
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              opens: "00:00",
              closes: "23:59"
            },
            paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Bank Transfer",
            currenciesAccepted: "INR"
          })}
        </Script>
        <Script id="website-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://thelastcompanion.com/#website",
            url: "https://thelastcompanion.com",
            name: "The Last Companion - Islamic Funeral Services",
            description: "Professional Islamic funeral services with authentic burial rites, janazah arrangements, and compassionate support following Islamic traditions.",
            publisher: {
              "@id": "https://thelastcompanion.com/#organization"
            },
            potentialAction: [
              {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://thelastcompanion.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            ],
            inLanguage: "en-US"
          })}
        </Script>
      </body>
    </html>
  );
}