import "./globals.css";
import Image from "next/image";
import Link from "next/link";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { FaGithub } from "react-icons/fa";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LINKS } from "@/utils/constants";

import waterDrop from "@/assets/water-drop.svg";
import { SocialBar } from "@/components/AdsTerra/social-bar";
import { AdsTerra320 } from "@/components/AdsTerra/banner-320";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Calculadora de Conta de Água - Bahia",
  description:
    "Saiba antecipadamente o valor da sua conta de água. Use a calculadora de conta de água da Bahia.",
  applicationName: "Calculadora de Conta de Água - Bahia",
  creator: "Jailson de Oliveira",
  referrer: "origin-when-cross-origin",
  authors: [
    {
      name: "Jailson de Oliveira",
      url: "https://jailsondeoliveira.vercel.app",
    },
  ],
  keywords: ["Conta de água", "Bahia", "Embasa", "Calculadora"],
  openGraph: {
    siteName: "Calculadora de Conta de Água - Bahia",
    type: "website",
    url: "https://calculadoracontadeagua.vercel.app",
    title: "Calculadora de Conta de Água - Bahia",
    description:
      "Saiba antecipadamente o valor da sua conta de água. Use a calculadora de conta de água da Bahia.",
    images: [
      {
        url: "https://ik.imagekit.io/jayllson/calculadora-ca_Is5bD97_Id.png",
        width: 1200,
        height: 563,
        alt: "Imagem do site calculadora de conta de água",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ojailson17",
    title: "Calculadora de Conta de Água - Bahia",
    images: ["https://ik.imagekit.io/jayllson/calculadora-ca_Is5bD97_Id.png"],
    description:
      "Saiba antecipadamente o valor da sua conta de água. Use a calculadora de conta de água da Bahia.",
    site: "https://calculadoracontadeagua.vercel.app",
  },
  verification: {
    google: "mNHo0kVRWw-LyGwyJpcuIaIV3iEzKPtwrLB0IqxglCA",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6549347220559150"
          crossOrigin="anonymous"
        ></script> */}
      </head>
      <body
        className={`${inter.className} overflow-x-hidden bg-white antialiased`}
      >
        <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <header className="flex w-full items-center justify-between bg-primary px-4 py-8 sm:px-8">
          <Link
            href={"/"}
            aria-label="Ir para a página inicial"
            className="flex w-full items-center justify-center gap-3 focus:border-none sm:w-max"
          >
            <Image
              alt="Ícone de uma gota de água"
              src={waterDrop}
              width={48}
              height={48}
              className="hidden sm:block"
            />
            <h1 className="text-center text-2xl font-bold text-white">
              Calculadora de Conta de Água{" "}
              <span className="hidden sm:inline-block">-</span> Bahia
            </h1>
          </Link>

          <Link
            target="_blank"
            aria-label="Ir para o Github"
            href={LINKS.projectGithub}
            className="hidden sm:block"
          >
            <FaGithub size={32} fill="white" />
          </Link>
        </header>
        {children}
        <SocialBar />
        <AdsTerra320 />
      </body>
    </html>
  );
}
