import { Poppins } from "next/font/google";
import "./globals.css";
import { Navebar } from '../components/Navbar/index';
const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "LensCorp",
  description: "LensCorp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body className={inter.className}>
            <Navebar />
            {children}
          </body>
        </html>
        );
}
