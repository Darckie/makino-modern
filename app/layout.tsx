import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

const displayFont = Sora({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Makino Auto Industries Pvt Ltd",
  description:
    "Premium digital experience for Makino Auto Industries Pvt Ltd, engineering precision across clutch, brake, and friction systems."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try {
            var saved = localStorage.getItem("makino-theme");
            var theme = saved || "light";
            document.documentElement.dataset.theme = theme;
          } catch (error) {
            document.documentElement.dataset.theme = "light";
          }`}
        </Script>
        <div className="page-frame" />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
