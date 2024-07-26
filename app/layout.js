import { Inter } from "next/font/google";
import "./globals.css";
import Heads from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Formulário SACCEEI",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Heads />
        {children}
      </body>
    </html>
  );
}
