import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Harinath Gurram | AI & ML Engineer Portfolio",
  description: "Premium developer portfolio of Harinath Gurram, specializing in AI, Machine Learning, and Music Store Analytics.",
  keywords: ["AI Engineer", "Machine Learning Student", "Music BI", "Harinath Gurram", "Data Science"],
  authors: [{ name: "Harinath Gurram" }],
  openGraph: {
    title: "Harinath Gurram | AI & ML Engineer Portfolio",
    description: "Building intelligent systems using AI, data, and modern technologies.",
    type: "website",
    url: "https://hari2809-art.github.io/portfolio/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harinath Gurram Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harinath Gurram | AI & ML Engineer Portfolio",
    description: "Building intelligent systems using AI, data, and modern technologies.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-main`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
