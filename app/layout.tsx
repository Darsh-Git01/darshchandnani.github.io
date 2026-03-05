import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  title: "Darsh Chandnani",
  description: "An AI engineer with a strong robotics background, focused on building automated systems powered by scalable ML models.",
  keywords: "Darsh Chandnani, AI Engineer, Developer, Robotics , Python, Java, Portfolio",
  authors: [{ name: "Darsh Chandnani" }],
  creator: "Darsh Chandnani",
  publisher: "Darsh Chandnani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Darsh Chandnani- AI Engineer",
    description: "An AI engineer with a strong robotics background, focused on building automated systems powered by scalable ML models.",
    url: "https://darshchandnani.github.io",
    siteName: "Darsh Chandnani's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darsh Chandnani- AI Engineer",
    description: "An AI engineer with a strong robotics background, focused on building automated systems powered by scalable ML models.",
  },
  verification: {
    google: "GsRYY-ivL0F_VKkfs5KAeToliqz0gCrRAJKKmFkAxBA",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={'G-7WD4HM3XRE'}/>
    </html>
  );
}
