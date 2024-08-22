import Container from "@/components/container";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inherited Games App",
  description: "Pushing the boundaries of immersive gaming experiences with cutting-edge technology and creative storytelling. Join us on our journey to redefine the future of gaming.",
  keywords: ["game development", "gaming startup", "immersive gaming", "cutting-edge technology", "creative storytelling"],
  icons: { icon: '/LogoPic.png' }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <main className="flex flex-col min-h-screen bg-gray-800" >
          <Navbar />
          <Container>
            <div className="flex-grow flex-1" > {children}</div>
            <Toaster />
          </Container>
          <Footer/>
        </main>
      </body>
    </html>
  );
}
