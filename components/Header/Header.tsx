"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 901px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <>
      <header className={`${styles.header} ${open ? styles.headerOpen : ""}`}>
        <div className={styles.bar}>
          <Link href="/" className={styles.brand} onClick={close}>
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
            className={`${styles.menuToggle} ${open ? styles.menuToggleOpen : ""}`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </button>
        </div>
      </header>

      <div
        id="menu-mobile"
        className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileLink} ${isActive(link.href) ? styles.active : ""}`}
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/#contato" className={styles.mobileCta} onClick={close}>
          Agendar consulta
        </Link>
      </div>
    </>
  );
}
