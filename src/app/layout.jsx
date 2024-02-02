import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daily News Bangladesh",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={"max-w-7xl mx-auto"}>{children}</div>
        <Footer />
        <NextTopLoader color="#E60000" height={2} speed={200} />
      </body>
    </html>
  );
}
