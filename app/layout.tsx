import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import PlausibleProvider from "next-plausible";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Civersia",
  description: "Civersia is a multipurpose 3D application, easy to use, that allows you to innovate when organizing product presentations, creating events, selling...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "";
  const customDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_CUSTOM_DOMAIN;
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <head>
        <PlausibleProvider domain={domain} customDomain={customDomain} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <GoogleTagManager gtmId={"G-LQG1D43NH3"} />
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=G-LQG1D43NH3" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>
        <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/2342e491ed19e7ceed863ece/script.js"></script>
      </body>
    </html>
  );
}
