import { Poppins } from "next/font/google"
import Header from "./components/Header";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Traversy Media",
  description: "Web development tutorial and cources",
  keywords: "web development, web design, javascript, react, node, html, css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header/>
        <main className="container">
        {children}
        </main>
      </body>
    </html>
  );
}
