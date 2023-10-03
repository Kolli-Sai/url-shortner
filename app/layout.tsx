import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/navbar";
import Layout from "@/components/layout";
import { Divider } from "@nextui-org/divider";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://url-shortner-drab-delta.vercel.app/"),
  title: {
    default: "Url Shortener",
    template: "%s | Url Shortener",
  },
  description: "A simple url shortener made with Next.js and Prisma",
  applicationName: "Url Shortener",
  keywords: ["url", "shortener", "next.js", "prisma"],
  creator: "sai",
  publisher: "sai",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "sai", url: "https://sai-portofolio.vercel.app" }],
  colorScheme: "dark",
  themeColor: "dark",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
  openGraph: {
    title: "Home Page",
    description: "A simple url shortener made with Next.js and Prisma",
    url: "https://url-shortner-drab-delta.vercel.app/",
    siteName: "Url Shortener",

    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Page",
    description: "A simple url shortener made with Next.js and Prisma",
    // siteId: "1467726470533754880",
    creator: "@saik98187",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <Toaster expand={false} richColors position="top-center" />
          <Layout>
            <Navbar />
          </Layout>
          <Divider className=" mb-6" />
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
