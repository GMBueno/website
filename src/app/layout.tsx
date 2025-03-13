import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksandFont = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Santerion | Software Development",
  description: "Software on budget & on time",
  icons: {
    icon: '/icon_violet.avif',
    apple: '/icon_violet.avif',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksandFont.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
