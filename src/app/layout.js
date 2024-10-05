import { Inter } from "next/font/google";
import Providers from "./reduxcode/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home T-shirt",
  description: "T-shirt cool website",
};

export default function RootLayout({ children }) {
  return (
    
    
    <html lang="en">
      <body className={inter.className} ><Providers>{children}</Providers></body>
    </html>
    
    
  );
}
 