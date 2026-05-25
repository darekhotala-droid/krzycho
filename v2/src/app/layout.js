import { Outfit, Lora } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

export const metadata = {
  title: "Dalakit House Villa Two | Siquijor, Philippines",
  description: "Your private oasis in the heart of the Philippine jungle.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
