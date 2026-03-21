import Link from "next/link";

import { FooterSocialLink } from "./FooterSocialLink";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { LINKS } from "@/utils/constants";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-900 pb-4 text-slate-300">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-start gap-10 px-4 py-12 sm:flex-row sm:justify-between sm:gap-8 sm:px-8">
        {/* links */}
        <div className="flex w-full flex-col items-start justify-start gap-4 text-sm">
          <Link
            target="_blank"
            aria-label="Site pessoal"
            href={LINKS.personalWebsite}
            className="hover:underline"
          >
            Site Pessoal
          </Link>
          <Link
            target="_blank"
            aria-label="Site da Embasa"
            href={LINKS.embasa}
            className="hover:underline"
          >
            Site da Embasa
          </Link>
          <Link
            target="_blank"
            aria-label="Tabela de tarifas"
            href={LINKS.taxes}
            className="hover:underline"
          >
            Tabela de Tarifas
          </Link>
          <Link
            aria-label="Página Sobre"
            href="/sobre"
            className="transition-colors hover:text-white hover:underline"
          >
            Sobre os cálculos
          </Link>
        </div>

        {/* Contact */}
        <div className="order-1 flex w-full flex-col gap-5 sm:order-3 sm:items-end">
          <p>
            <span className="font-semibold text-white sm:max-xl:hidden">
              Encontrou algum erro?
            </span>{" "}
            <span className="sm:max-xl:hidden">Entre em contato:</span>
            {/* <span className="font-medium text-white xl:hidden">
              Entre em contato
            </span> */}
          </p>

          <div className="flex flex-col items-start justify-center gap-6 sm:flex-row sm:justify-start">
            <FooterSocialLink
              href={LINKS.personalGithub}
              Icon={FaGithub}
              aria-label="Github Pessoal"
            >
              Github
            </FooterSocialLink>
            <FooterSocialLink
              href={LINKS.personalInstagram}
              Icon={FaInstagram}
              aria-label="Instagram Pessoal"
            >
              Instagram
            </FooterSocialLink>
            <FooterSocialLink
              href={LINKS.personalLinkedIn}
              Icon={FaLinkedin}
              aria-label="LinkedIn Pessoal"
            >
              LinkedIn
            </FooterSocialLink>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="order-last flex w-full flex-col text-center text-sm text-slate-400 sm:order-2 sm:items-center sm:justify-center sm:text-left">
        <p className="text-center">
          Desenvolvido por{" "}
          <Link
            target="_blank"
            aria-label="Site pessoal"
            href={LINKS.personalWebsite}
            className="font-semibold text-slate-300 transition-colors hover:text-white hover:underline"
          >
            Jailson de Oliveira
          </Link>
        </p>
        <p className="mt-1">&copy; 2024 - {currentYear}</p>
      </div>
    </footer>
  );
};
