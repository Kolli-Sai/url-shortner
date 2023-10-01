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
  title: "Create Next App",
  description: "Generated by create next app",
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
