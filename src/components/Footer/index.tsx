import Link from "next/link";

import { FooterSocialLink } from "./FooterSocialLink";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { LINKS } from "@/utils/constants";

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="flex flex-col items-start justify-center gap-9 bg-primary px-4 py-5 text-white sm:flex-row sm:items-end sm:justify-between sm:gap-0 sm:px-8">
      {/* links */}
      <div className="flex w-full flex-col items-start justify-center gap-3 text-sm text-white">
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
      </div>

      {/* Contact */}
      <div className="order-1 flex w-full flex-col gap-6 sm:order-3 sm:items-end">
        <p>
          <span className="font-bold sm:max-xl:hidden">
            Encontrou algum erro?
          </span>{" "}
          Entre em contato
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

      {/* Copyright */}
      <div className="order-last flex w-full flex-col text-center sm:order-2">
        <p className="text-center">
          Desenvolvido por{" "}
          <Link
            target="_blank"
            aria-label="Site pessoal"
            href={LINKS.personalWebsite}
            className="font-bold hover:underline"
          >
            Jailson de Oliveira
          </Link>
        </p>
        <p>&copy; 2024 - {currentYear}</p>
      </div>
    </footer>
  );
};
