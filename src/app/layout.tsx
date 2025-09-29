import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/Header/header";
import { I18nProvider } from "@/components/I18nProvider";

const inter = Inter({
  variable: "--font-amazon-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bookshelf - Sua Livraria Online",
  description: "Encontre os melhores livros com preços incríveis. Entrega rápida e segura.",
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased w-full h-full min-h-screen`}
      >
        <I18nProvider>
          <Providers>
            <Header />
            {children}
          </Providers>
        </I18nProvider>
      </body>
    </html>
  );
}
