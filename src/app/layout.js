import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/component/header";
import Navbar from "@/component/navbar";
import Search from "@/component/Search";
import Providers from "@/app/Providers";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "IMDB clone",
  description: "this is movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <Header />
        <Navbar/>
        <Search/>
        {children}
        </Providers>
        </body>
    </html>
  );
}

