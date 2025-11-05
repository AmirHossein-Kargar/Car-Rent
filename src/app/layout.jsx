import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-plus-jakarta-sans",
});


export const metadata = {
  title: "Morent",
  description: "Morent - Your premier car rental service with competitive prices and exceptional service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} custom-scrollbar`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
