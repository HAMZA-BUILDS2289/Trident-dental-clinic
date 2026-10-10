"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX } from "lucide-react";

/**
 * Clinic video player. Plays muted + looping when scrolled into view (so the page feels alive),
 * and lets the visitor tap to enable sound or pause.
 */
export function VideoCard({
  src,
  poster,
  label,
  className = "",
  autoPlayInView = true,
}: {
  src: string;
  poster?: string;
  label?: string;
  className?: string;
  autoPlayInView?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v || !autoPlayInView) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          v.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [autoPlayInView]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => undefined);
    else {
      v.pause();
      setPlaying(false);
    }
  };
  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => undefined);
  };

  return (
    <div className={`group relative overflow-hidden bg-ink ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onClick={toggle}
        aria-label={label}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/10" />

      {!playing && (
        <button
          onClick={toggle}
          aria-label={`Play video${label ? `: ${label}` : ""}`}
          className="absolute inset-0 grid place-items-center"
        >
          <span className="relative grid h-24 w-24 place-items-center rounded-full bg-gold-400 text-ink shadow-glow">
            <span className="absolute inset-0 animate-pulseRing rounded-full bg-gold-300" />
            <Play className="relative h-9 w-9 translate-x-0.5 fill-current" />
          </span>
        </button>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 sm:p-6">
        {label && <span className="rounded-full bg-ink/70 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gold-200 backdrop-blur">{label}</span>}
        <span className="ml-auto flex gap-2">
          <button
            onClick={toggle}
            aria-label={playing ? "Pause video" : "Play video"}
            className="grid h-11 w-11 place-items-center rounded-full bg-white/90 text-ink backdrop-blur transition hover:bg-gold-200"
          >
            {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button
            onClick={toggleSound}
            aria-label={muted ? "Turn sound on" : "Turn sound off"}
            className="flex h-11 items-center gap-2 rounded-full bg-white/90 px-4 text-sm font-bold text-ink backdrop-blur transition hover:bg-gold-200"
          >
            {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            <span className="hidden sm:inline">{muted ? "Tap for sound" : "Sound on"}</span>
          </button>
        </span>
      </div>
    </div>
  );
}

/** Cinematic photo tour with slow zoom (Ken Burns), crossfade, thumbnails and auto-advance. */
export function PhotoTour({ slides }: { slides: { src: string; title: string }[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 5200);
    return () => clearInterval(t);
  }, [paused, n]);

  const s = slides[i];
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-gold-400/40 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)] sm:aspect-[16/10]">
        <AnimatePresence mode="sync">
          <motion.div
            key={s.src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt={s.title} className="h-full w-full animate-kenburns object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-300">
              {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
            </p>
            <p className="display mt-2 text-2xl text-white sm:text-4xl">{s.title}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setI((i - 1 + n) % n)} aria-label="Previous photo" className="grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/25">
              <ChevronLeft />
            </button>
            <button onClick={() => setI((i + 1) % n)} aria-label="Next photo" className="grid h-12 w-12 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/25">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="scrollbar-none mt-4 flex gap-3 overflow-x-auto pb-2">
        {slides.map((sl, k) => (
          <button
            key={sl.src}
            onClick={() => setI(k)}
            aria-label={`Show ${sl.title}`}
            className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-2xl border-2 transition ${k === i ? "border-gold-400" : "border-transparent opacity-60 hover:opacity-100"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={sl.src} alt="" className="h-full w-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
