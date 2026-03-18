"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Blocks,
  Building2,
  Cpu,
  House,
  Mail,
  Menu,
  X
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navigationItems } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";

const iconMap = {
  home: House,
  boxes: Blocks,
  building: Building2,
  cpu: Cpu,
  mail: Mail
};

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="shell header-inner">
        <Link href="/" className="brand-lockup">
          <span className="brand-mark" />
          <span>
            <strong>MAKINO</strong>
            <small>Auto Industries Pvt Ltd</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {navigationItems.map((item) => (
            (() => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={pathname === item.href ? "active" : ""}
                >
                  <Icon size={15} />
                  <span>{item.label}</span>
                </Link>
              );
            })()
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Link className="button button-secondary desktop-cta" href="/contact">
            Let&apos;s Talk
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="mobile-nav-wrap"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="mobile-nav shell" aria-label="Mobile">
              {navigationItems.map((item) => (
                (() => {
                  const Icon = iconMap[item.icon as keyof typeof iconMap];

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={pathname === item.href ? "active" : ""}
                    >
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })()
              ))}
              <ThemeToggle />
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
