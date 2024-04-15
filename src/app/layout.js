
import { Micro_5 } from "./ui/fonts";
import "./globals.css";


export const metadata = {
  title: "Personal Site",
  description: "Tada from NEXT.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Micro_5.className}>{children}</body>
    </html>
  );
}
