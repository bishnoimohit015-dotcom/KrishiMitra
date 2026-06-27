import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KrishiMitra AI - Smart Farming Assistant",
  description: "AI-powered farming assistant for expense tracking, disease detection, weather forecasts, and agricultural insights",
  keywords: ["farming", "agriculture", "AI", "disease detection", "weather", "expenses", "India"],
  authors: [{ name: "KrishiMitra AI" }],
  openGraph: {
    title: "KrishiMitra AI - Smart Farming Assistant",
    description: "AI-powered farming assistant for expense tracking, disease detection, weather forecasts, and agricultural insights",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
