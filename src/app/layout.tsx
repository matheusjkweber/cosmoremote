import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cosmoremote.app"),
  title: {
    default: "CosmoRemote",
    template: "%s | CosmoRemote",
  },
  description: "Seus agentes, ao seu alcance!",
  openGraph: {
    title: "CosmoRemote",
    description: "Seus agentes, ao seu alcance!",
    type: "website",
    siteName: "CosmoRemote",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "CosmoRemote",
    description: "Seus agentes, ao seu alcance!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
