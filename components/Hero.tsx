"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Award, Accessibility, Siren, Star } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { LinkButton, WaButton } from "./ui";

const Tooth3D = dynamic(() => import("./Tooth3D"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full place-items-center">
      <div className="h-40 w-40 animate-pulse rounded-full bg-gold-300/30 blur-2xl" />
    </div>
  ),
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yStage = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section ref={ref} className="noise relative isolate overflow-hidden bg-gradient-to-br from-ocean-900 via-ink to-ocean-700 text-white">
      <div className="aurora opacity-70" />
      <div className="grid-bg-dark absolute inset-0 -z-10" />
      <div className="absolute inset-x-0 bottom-0 h-px gold-line" />

      <div className="container-wide relative grid min-h-[calc(100svh-110px)] items-center gap-6 pb-24 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32 lg:pt-16">
        <motion.div style={{ y: yText, opacity: fade }} className="relative z-10">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="eyebrow-dark">
            <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" /> {BUSINESS.rating} stars · {BUSINESS.reviewCount} reviews · Abuja
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-xl mt-7 text-white"
          >
            Abuja’s <span className="text-gold-gradient italic">five-star</span>
            <br className="hidden sm:block" /> dental experience.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-aqua-100/85 sm:text-xl"
          >
            {BUSINESS.tagline}. The best dental clinic in Abuja, according to the patients who sit in our chairs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <WaButton label="Get Your Dream Smile in Abuja" arrow className="sm:!px-9 sm:!py-5 sm:!text-base" />
            <LinkButton href="/#reviews" variant="ghost-dark" className="sm:!px-8 sm:!py-5">
              <Star className="h-4 w-4 fill-gold-400 text-gold-400" /> See Why We Are 4.7 Stars
            </LinkButton>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {[
              { i: <Star className="h-5 w-5 text-gold-400" />, t: "4.7★ on Google", s: "15 patient reviews" },
              { i: <Award className="h-5 w-5 text-gold-400" />, t: "Best in Abuja", s: "Patient-voted" },
              { i: <Accessibility className="h-5 w-5 text-gold-400" />, t: "Fully accessible", s: "Wheelchair-friendly" },
            ].map((b) => (
              <li key={b.t} className="glass-dark flex items-center gap-3 rounded-2xl px-4 py-3">
                {b.i}
                <span className="leading-tight">
                  <span className="block text-sm font-bold text-white">{b.t}</span>
                  <span className="text-xs text-aqua-200/70">{b.s}</span>
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* 3D stage */}
        <motion.div style={{ y: yStage }} className="relative z-0 h-[420px] sm:h-[560px] lg:h-[720px]">
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-gold-400/30 via-aqua-400/10 to-ocean-500/40 blur-3xl" />
          <div className="absolute inset-0">
            <Tooth3D />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="glass-dark absolute right-0 top-8 animate-float rounded-3xl px-5 py-4 sm:right-4"
          >
            <p className="display text-3xl text-gold-gradient">{BUSINESS.rating}★</p>
            <p className="text-xs font-semibold text-aqua-100/80">{BUSINESS.reviewCount} Google reviews</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="glass-dark absolute bottom-24 left-0 animate-float rounded-3xl px-5 py-4 [animation-delay:-2s] sm:left-4"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gold-300">8 treatments</p>
            <p className="display mt-1 text-xl text-white">One premium roof.</p>
          </motion.div>
          <motion.a
            href={`tel:${BUSINESS.phoneTel}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="glass-dark absolute bottom-4 right-2 flex animate-float items-center gap-3 rounded-full py-2 pl-2 pr-5 [animation-delay:-4s] sm:right-10"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-red-500 text-white">
              <Siren className="h-5 w-5" />
            </span>
            <span className="text-sm font-bold text-white">Emergency? Call Now</span>
          </motion.a>
        </motion.div>
      </div>

      <a href="#stats" aria-label="Scroll down" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-gold-300 lg:block">
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
