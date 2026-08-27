"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { navLinks } from "@/lib/data";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a href="#topo" className={styles.brand}>
          <div className={styles.monogram}>RC</div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>Dr. Renzo Curty</span>
            <span className={styles.brandRole}>Médico</span>
          </div>
        </a>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
          <a href="#contato" className={styles.cta}>
            Agendar consulta
          </a>
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
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" className={styles.mobileCta} onClick={() => setOpen(false)}>
            Agendar consulta
          </a>
        </div>
      )}
    </header>
  );
}
