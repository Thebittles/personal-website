
import "./globals.css";


export const metadata = {
  title: "Personal Site",
  description: "Tada from NEXT.JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
