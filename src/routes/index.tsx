import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Anchor, ArrowRight, Heart, Sparkles, Star, ArrowLeft, Search } from "lucide-react";

import luffy from "@/assets/char-luffy.jpg";
import zoro from "@/assets/char-zoro.jpg";
import nami from "@/assets/char-nami.jpg";
import usopp from "@/assets/char-usopp.jpg";
import sanji from "@/assets/char-sanji.jpg";
import chopper from "@/assets/char-chopper.jpg";
import brook from "@/assets/char-brook.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "One Piece NFT — Collect Legendary Pirate Crew Art" },
      { name: "description", content: "Mint and collect extraordinary One Piece pirate NFTs. Featuring Luffy, Zoro, Nami and the entire Straw Hat crew on the high seas of the blockchain." },
      { property: "og:title", content: "One Piece NFT" },
      { property: "og:description", content: "Collect extraordinary One Piece pirate NFTs on the blockchain." },
    ],
  }),
  component: Index,
});

const polaroids = [
  { name: "Monkey D. Luffy", price: "1.5 ETH", img: luffy, rotate: "-6deg", top: "0%", left: "4%" },
  { name: "Roronoa Zoro", price: "1.2 ETH", img: zoro, rotate: "8deg", top: "18%", left: "38%" },
  { name: "Nami", price: "0.9 ETH", img: nami, rotate: "-4deg", top: "42%", left: "10%" },
];

const topArtworks = [
  { name: "Black Leg Sanji", bid: "2.14 ETH", img: sanji, likes: 142 },
  { name: "Tony Tony Chopper", bid: "1.89 ETH", img: chopper, likes: 318 },
  { name: "Soul King Brook", bid: "2.47 ETH", img: brook, likes: 209 },
];

function Countdown() {
  const [t, setT] = useState({ h: 7, m: 13, s: 56 });
  useEffect(() => {
    const id = setInterval(() => {
      setT(({ h, m, s }) => {
        if (s > 0) return { h, m, s: s - 1 };
        if (m > 0) return { h, m: m - 1, s: 59 };
        if (h > 0) return { h: h - 1, m: 59, s: 59 };
        return { h: 0, m: 0, s: 0 };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const box = (n: number, l: string) => (
    <div className="flex flex-col items-center justify-center rounded-xl bg-secondary/80 px-5 py-3 min-w-[78px] border border-border">
      <span className="text-2xl font-bold text-foreground tabular-nums">{String(n).padStart(2, "0")}</span>
      <span className="text-xs uppercase tracking-wider text-muted-foreground">{l}</span>
    </div>
  );
  return (
    <div className="flex gap-3">{box(t.h, "hrs")}{box(t.m, "min")}{box(t.s, "sec")}</div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-hero text-foreground overflow-hidden">
      {/* Nav */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2 text-xl font-bold">
          <Anchor className="h-6 w-6 text-primary" />
          <span className="font-display">One Piece</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#marketplace" className="hover:text-foreground transition">Marketplace</a>
          <a href="#stats" className="hover:text-foreground transition">Stats</a>
          <a href="#collections" className="hover:text-foreground transition">Collections</a>
          <a href="#explore" className="hover:text-foreground transition">Explore</a>
        </nav>
        <button className="rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
          Connect Wallet
        </button>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pt-10 pb-32">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-widest text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Grand Line Drop · Season 01
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              Collect Extra<br/>
              Ordinary <span className="text-primary text-glow">Pirate</span><br/>
              Art &amp; NFTs.
            </h1>
            <p className="mt-6 max-w-md text-base text-muted-foreground">
              Set sail with the Straw Hat crew. Mint legendary One Piece character NFTs directly on Ethereum and BNB Chain — every bounty unlocks a piece of the One Piece.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
                Explore <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-xl border border-primary/40 px-6 py-3 text-sm font-semibold text-foreground hover:bg-primary/10 transition">
                How it works?
              </button>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[luffy, nami, zoro].map((s, i) => (
                  <img key={i} src={s} alt="" className="h-10 w-10 rounded-full border-2 border-background object-cover" />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold text-foreground">+12k Pirate Artists</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> 4.9 crew rating
                </div>
              </div>
            </div>
          </div>

          {/* Polaroid stack */}
          <div className="relative h-[520px] lg:h-[600px]">
            {polaroids.map((p, i) => (
              <div
                key={p.name}
                className="absolute w-56 sm:w-64 rounded-md bg-card p-3 pb-4 shadow-polaroid animate-float"
                style={{
                  top: p.top, left: p.left, transform: `rotate(${p.rotate})`,
                  animationDelay: `${i * 1.2}s`,
                }}
              >
                <img src={p.img} alt={p.name} className="aspect-[4/5] w-full rounded-sm object-cover" />
                <div className="mt-3 flex items-end justify-between px-1">
                  <div>
                    <div className="font-display text-sm font-bold text-foreground">{p.name}</div>
                    <div className="text-[10px] text-muted-foreground">@strawhat</div>
                  </div>
                  <div className="rounded-md bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary">{p.price}</div>
                </div>
              </div>
            ))}
            {/* glow orb */}
            <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative -mx-2 -rotate-2 border-y border-primary/30 bg-card/40 py-4 backdrop-blur">
        <div className="marquee">
          <div className="marquee-track">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12 text-2xl font-bold text-foreground">
                <span className="font-display tracking-tight">PIRATE NFT</span>
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
            ))}
          </div>
          <div className="marquee-track" aria-hidden>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12 text-2xl font-bold text-foreground">
                <span className="font-display tracking-tight">PIRATE NFT</span>
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Drop */}
      <section id="collections" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-card">
              <img src={usopp} alt="God Usopp" className="w-full rounded-xl object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-4 -left-4 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
          </div>
          <div>
            <div className="text-sm uppercase tracking-widest text-muted-foreground">15 Nov, 2026</div>
            <h2 className="mt-2 font-display text-4xl font-bold text-foreground sm:text-5xl">
              Legendary Crew Collectables
            </h2>
            <div className="mt-8">
              <div className="mb-3 text-sm text-muted-foreground">Next Drop releases in</div>
              <Countdown />
            </div>
            <div className="mt-8 flex items-center gap-3">
              <img src={nami} alt="" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <div className="text-xs text-muted-foreground">Owner</div>
                <div className="text-sm font-semibold text-foreground">@cat_burglar</div>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <button className="rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition">
                View All Upcomings
              </button>
              <div className="ml-auto flex gap-2">
                <button aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground transition">
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button aria-label="Next" className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Artworks */}
      <section id="marketplace" className="mx-auto max-w-7xl px-6 pb-32">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Top Bounties</h2>
            <p className="mt-2 text-sm text-muted-foreground">The most wanted pirates of the week.</p>
          </div>
          <button className="hidden items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition sm:inline-flex">
            <Search className="h-4 w-4" /> Search crew
          </button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topArtworks.map((a) => (
            <article key={a.name} className="group rounded-2xl border border-border bg-card p-4 shadow-card transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
              <div className="relative overflow-hidden rounded-xl">
                <img src={a.img} alt={a.name} className="aspect-square w-full object-cover transition group-hover:scale-105" loading="lazy" />
                <div className="absolute bottom-3 left-3 rounded-md bg-background/70 px-2 py-1 text-xs font-mono text-foreground backdrop-blur">
                  03:18:24
                </div>
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{a.name}</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <img src={luffy} alt="" className="h-6 w-6 rounded-full object-cover" />
                    <div className="text-xs">
                      <div className="text-muted-foreground">Owner</div>
                      <div className="font-medium text-foreground">@strawhat</div>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition">
                  <Heart className="h-4 w-4" /> {a.likes}
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <span className="text-xs text-muted-foreground">Current Bid</span>
                <span className="text-sm font-bold text-primary">{a.bid}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} One Piece NFT · Built for nakama on the Grand Line
      </footer>
    </div>
  );
}
