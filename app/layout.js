import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-serif" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "SOFALIVING | Bespoke Sofa Customiser",
  description: "Customise model, colour, fabric and seating. See your price update live.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}