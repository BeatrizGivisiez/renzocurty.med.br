"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { navLinks } from "@/lib/data";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className={styles.brand}>
          <Image
            src="/images/logo-renzo-curty.png"
            alt="Dr. Renzo Curty"
            width={50}
            height={41}
            className={styles.monogram}
            priority
          />
          <div className={styles.brandText}>
            <span className={styles.brandName}>Dr. Renzo Curty</span>
            <span className={styles.brandRole}>Médico</span>
          </div>
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${isActive(link.href) ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#contato" className={styles.cta}>
            Agendar consulta
          </Link>
        </nav>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {open && (
        <div className={styles.mobilePanel}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${isActive(link.href) ? styles.active : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/#contato" className={styles.mobileCta} onClick={() => setOpen(false)}>
            Agendar consulta
          </Link>
        </div>
      )}
    </header>
  );
}
