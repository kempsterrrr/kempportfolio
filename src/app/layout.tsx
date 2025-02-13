import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import "./global.css";

import Footer from "@/components/footer"; 
import { Navbar } from "@/components/nav";

import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "ar://kemp | Building Blockchain Ecosystems",
    template: "%s | ar://kemp",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description:
      "Building blockchain ecosystems. Currently focused on the Permaweb as Head of Ecosystem @ PDS Inc, decentralising access to Arweaave with AR.IO Network. Supporting builders and founders to solve problems where data permanence and provenance is key.",
    url: baseUrl,
    siteName: "ar://kemp | Building Blockchain Ecosystems",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
