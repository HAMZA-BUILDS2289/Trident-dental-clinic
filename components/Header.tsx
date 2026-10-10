"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { BUSINESS, nav } from "@/lib/data";
import { WaButton } from "./ui";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Trident Dental Clinic home">
      <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-ocean-600 to-ink shadow-glowblue ring-1 ring-gold-400/60 transition group-hover:rotate-6">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-gold-300" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M12 21c-.9 0-1.2-1.3-1.6-3.2-.3-1.5-.7-2.8-1.5-2.8s-1.1 1.3-1.4 2.9C7.100 19.600 6.700 21 5.800 21 4.400 21 4 17.200 4 14.200 4 12 3 10.600 3 8.400 3 5.500 5.200 4 7.300 4c1.800 0 3 .8 4.700.8S14.900 4 16.700 4C18.800 4 21 5.500 21 8.400c0 2.200-1 3.600-1 5.800 0 3-.4 6.800-1.800 6.800-.9 0-1.300-1.400-1.700-3.300-.3-1.600-.6-2.900-1.400-2.900s-1.200 1.300-1.500 2.800C13.200 19.700 12.900 21 12 21z" />
        </svg>
      </span>
      <span className="leading-none">
        <span className={`display block text-[1.35rem] ${light ? "text-white" : "text-ink"}`}>Trident</span>
        <span className={`mt-1 block text-[10px] font-bold uppercase tracking-[0.3em] ${light ? "text-gold-300" : "text-ocean-600"}`}>
          Dental Clinic
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* announcement bar */}
      <div className="relative bg-gradient-to-r from-ocean-800 via-ink to-ocean-800 text-[13px] text-aqua-100">
        <div className="container-wide flex items-center justify-center gap-x-6 gap-y-1 py-2.5 text-center sm:justify-between">
          <span className="font-semibold text-gold-200">
            ✦ Now booking appointments in Abuja — tap Book Appointment to chat on WhatsApp
          </span>
          <span className="hidden items-center gap-6 sm:flex">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-gold-300" /> {BUSINESS.addressShort}
            </span>
            <a href={`tel:${BUSINESS.phoneTel}`} className="flex items-center gap-2 font-semibold hover:text-white">
              <Phone className="h-3.5 w-3.5 text-gold-300" /> {BUSINESS.phoneDisplay}
            </a>
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition duration-300 ${
          scrolled ? "border-b border-gold-400/30 bg-white/85 py-3 shadow-glass backdrop-blur-2xl" : "border-b border-white/40 bg-white/70 py-4 backdrop-blur-xl"
        }`}
      >
        <div className="container-wide flex items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.map((n) => {
              const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`rounded-full px-4 py-2 text-[15px] font-semibold transition ${
                    active ? "bg-ink text-white" : "text-ink/75 hover:bg-white hover:text-ink"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <WaButton className="hidden !px-6 !py-3 sm:inline-flex" label="Book Appointment" />
            <button
              onClick={() => setOpen(true)}
              className="grid h-12 w-12 place-items-center rounded-full border border-ink/10 bg-white/80 text-ink backdrop-blur lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-ink/97 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="container-wide flex items-center justify-between py-5">
              <Logo light />
              <button
                onClick={() => setOpen(false)}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="container-wide mt-8 flex flex-col gap-1" aria-label="Mobile">
              {[...nav, { href: "/appointment", label: "Book Appointment" }].map((n, i) => (
                <motion.div
                  key={n.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link href={n.href} className="display block border-b border-white/10 py-4 text-4xl text-white">
                    {n.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="container-wide mt-10 flex flex-col gap-3">
              <WaButton label="Chat Us On WhatsApp" />
              <a href={`tel:${BUSINESS.phoneTel}`} className="btn-ghost-dark">
                <Phone className="h-4 w-4" /> Emergency? Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
