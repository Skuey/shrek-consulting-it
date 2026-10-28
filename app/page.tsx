"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

function OnionMark({ small = false }: { small?: boolean }) {
  return <svg aria-hidden="true" width={small ? 28 : 38} height={small ? 28 : 38} viewBox="0 0 48 48" fill="none"><path d="M24 5c-2 5-7 7-11 11-5 5-7 11-6 17 1 8 8 12 17 12s16-4 17-12c1-6-1-12-6-17-4-4-9-6-11-11Z" fill="#4CC9F0" stroke="#D8F5FF" strokeWidth="2"/><path d="M24 5c-1 7 1 9 0 15M12 19c8 4 16 4 24 0M9 29c10 4 20 4 30 0M15 39c6 2 12 2 18 0" stroke="#16496A" strokeWidth="2" strokeLinecap="round"/><path d="M24 5c-4-3-5-4-7-4M24 5c4-3 5-4 7-4" stroke="#B5EEFF" strokeWidth="2" strokeLinecap="round"/></svg>;
}

export default function Home() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "The swamp signal got muddy. Try again.");
      setStatus("success");
      setMessage("Message received! A swamp guide will be in touch soon.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return <>
    <header className="sticky top-0 z-50 border-b border-[#365777]/60 bg-[#0B132B]/90 backdrop-blur-xl">
      <nav className="section-wrap flex h-[76px] items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-2 font-black"><OnionMark small /><span className="font-[family-name:var(--font-heading)] text-lg leading-tight">Shrek Consulting<br className="sm:hidden" /> IT</span></a>
        <div className="hidden items-center gap-7 text-sm font-bold text-[#EAF4FF]/80 md:flex"><a href="#services" className="hover:text-[#4CC9F0]">Services</a><a href="#security" className="hover:text-[#4CC9F0]">Security</a><a href="#plans" className="hover:text-[#4CC9F0]">Plans</a><a href="#faq" className="hover:text-[#4CC9F0]">FAQ</a></div>
        <a className="button !px-5 !py-3 !text-sm" href="#contact">Get a swamp checkup <span aria-hidden="true">↗</span></a>
      </nav>
    </header>

    <main>
      <section id="home" className="relative overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-28">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#4CC9F0]/10 blur-[100px]" />
        <div className="section-wrap relative grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div><p className="eyebrow mb-5">{site.eyebrow}</p><h1 className="max-w-[760px] text-5xl font-black leading-[.98] tracking-[-.045em] sm:text-7xl">Get out of my <span className="text-[#4CC9F0]">swamp</span> of IT problems</h1><p className="section-lede mt-6 max-w-[600px]">{site.heroCopy}</p><div className="mt-8 flex flex-wrap gap-3"><a className="button" href="#contact">Meet your IT ogres <span aria-hidden="true">→</span></a><a className="button button-secondary" href="#services">See what we handle</a></div><div className="mt-9 flex items-center gap-3 text-sm text-[#EAF4FF]/70"><span className="flex -space-x-2"><span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#0B132B] bg-[#4CC9F0]">🧅</span><span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#0B132B] bg-[#5BC0EB]">🫏</span><span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#0B132B] bg-[#365777]">🧌</span></span><span>Helpful humans. Questionable footwear.</span></div></div>
          <div className="relative mx-auto flex w-full max-w-[440px] items-center justify-center py-6"><div className="absolute h-72 w-72 rounded-full bg-[#4CC9F0]/15 blur-3xl"/><div className="onion-orb"/><div className="absolute right-0 top-12 rounded-2xl border border-[#365777] bg-[#132443]/90 p-4 shadow-xl"><span className="text-2xl">🛡️</span><p className="mt-1 text-xs font-black">Layers of protection</p></div><div className="absolute bottom-8 left-0 rounded-2xl border border-[#365777] bg-[#132443]/90 p-4 shadow-xl"><span className="text-2xl">🔵</span><p className="mt-1 text-xs font-black">Swamp status: stable</p></div></div>
        </div>
        <div className="section-wrap mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"><div className="rounded-2xl border border-[#365777]/70 bg-[#132443] p-4"><b className="block text-xl text-[#4CC9F0]">24/7</b><span className="text-xs text-[#EAF4FF]/70">help when you need it</span></div><div className="rounded-2xl border border-[#365777]/70 bg-[#132443] p-4"><b className="block text-xl text-[#4CC9F0]">Layered</b><span className="text-xs text-[#EAF4FF]/70">security by design</span></div><div className="rounded-2xl border border-[#365777]/70 bg-[#132443] p-4"><b className="block text-xl text-[#4CC9F0]">Human</b><span className="text-xs text-[#EAF4FF]/70">answers, no robot maze</span></div><div className="rounded-2xl border border-[#365777]/70 bg-[#132443] p-4"><b className="block text-xl text-[#4CC9F0]">Local-ish</b><span className="text-xs text-[#EAF4FF]/70">in spirit. Very swampy.</span></div></div>
      </section>

      <div className="wave" />
      <section id="services" className="section bg-[#132443]"><div className="section-wrap"><div className="mb-12 max-w-2xl"><p className="eyebrow mb-4">A whole lot of IT, no fairy dust</p><h2 className="section-title">{site.servicesTitle}</h2><p className="section-lede">{site.servicesIntro}</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{site.services.map((service) => <article key={service.title} className="card p-6 sm:p-7"><div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-[#4CC9F0]/30 bg-[#4CC9F0]/10 text-2xl">{service.icon}</div><h3 className="text-xl font-bold">{service.title}</h3><p className="mt-3 leading-7 text-[#EAF4FF]/70">{service.text}</p></article>)}</div></div></section>

      <section id="security" className="section"><div className="section-wrap grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]"><div className="relative mx-auto grid h-[340px] w-[340px] place-items-center sm:h-[430px] sm:w-[430px]"><div className="absolute inset-0 rounded-full border border-[#4CC9F0]/25"/><div className="absolute inset-[9%] rounded-full border border-[#4CC9F0]/35"/><div className="absolute inset-[18%] rounded-full border border-[#4CC9F0]/50"/><div className="absolute inset-[27%] rounded-full border border-[#4CC9F0]/70"/><div className="absolute inset-[37%] rounded-full bg-[#1C3150] shadow-[0_0_70px_#4cc9f035]"/><div className="relative z-10 text-center"><span className="text-5xl">🧅</span><p className="mt-2 text-sm font-black">SECURE CORE</p></div><span className="absolute left-0 top-[18%] rounded-full bg-[#1C3150] px-3 py-2 text-xs font-bold">People</span><span className="absolute right-0 top-[38%] rounded-full bg-[#1C3150] px-3 py-2 text-xs font-bold">Identity</span><span className="absolute bottom-[17%] left-3 rounded-full bg-[#1C3150] px-3 py-2 text-xs font-bold">Devices</span><span className="absolute bottom-[6%] right-8 rounded-full bg-[#1C3150] px-3 py-2 text-xs font-bold">Recovery</span></div><div><p className="eyebrow mb-4">Security with a little more depth</p><h2 className="section-title">{site.onionTitle}</h2><p className="section-lede">{site.onionCopy}</p><ul className="mt-7 space-y-3">{site.layers.map((layer, i) => <li key={layer} className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#4CC9F0]/15 text-sm font-black text-[#4CC9F0]">0{i + 1}</span><span className="font-bold">{layer}</span></li>)}</ul><a className="button mt-8" href="#contact">Build my layers <span aria-hidden="true">→</span></a></div></div></section>

      <div className="wave" />
      <section id="plans" className="section bg-[#132443]"><div className="section-wrap"><div className="mb-12 text-center"><p className="eyebrow mb-4">Clear water, clear pricing</p><h2 className="section-title">Pick your patch of swamp</h2><p className="section-lede mx-auto">Start with a puddle or go all-in on the whole wetland.</p></div><div className="grid items-stretch gap-5 lg:grid-cols-3">{site.plans.map((plan, i) => <article key={plan.name} className={`card relative p-7 ${i === 1 ? "border-[#4CC9F0] shadow-[0_0_35px_#4cc9f020]" : ""}`}>{i === 1 && <span className="absolute -top-3 left-7 rounded-full bg-[#4CC9F0] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#0B132B]">Fan favorite</span>}<p className="eyebrow">{plan.name} plan</p><h3 className="mt-3 font-[family-name:var(--font-heading)] text-3xl">{plan.name}</h3><p className="mt-2 min-h-12 text-sm text-[#EAF4FF]/70">{plan.description}</p><p className="mt-6"><b className="text-4xl">{plan.price}</b><span className="ml-2 text-xs text-[#EAF4FF]/60">{plan.suffix}</span></p><ul className="my-7 space-y-3 border-t border-[#365777] pt-6">{plan.features.map((feature) => <li key={feature} className="flex gap-2 text-sm"><span className="text-[#4CC9F0]">✓</span>{feature}</li>)}</ul><a className={`button w-full ${i !== 1 ? "button-secondary" : ""}`} href="#contact">{i === 2 ? "Talk to a swamp guide" : "Choose " + plan.name}</a></article>)}</div><p className="mt-5 text-center text-xs text-[#EAF4FF]/45">Fictional sample pricing for this parody page.</p></div></section>

      <section className="section"><div className="section-wrap"><div className="mb-12 text-center"><p className="eyebrow mb-4">Notes from the neighborhood</p><h2 className="section-title">Don’t just take our word for it</h2></div><div className="grid gap-4 lg:grid-cols-3">{site.testimonials.map((review) => <figure key={review.name} className="card flex flex-col p-7"><div className="text-[#5BC0EB]" aria-label="5 out of 5 stars">★★★★★</div><blockquote className="my-5 flex-1 text-lg leading-8">“{review.quote}”</blockquote><figcaption className="border-t border-[#365777] pt-4"><b className="block">{review.name}</b><span className="text-sm text-[#EAF4FF]/60">{review.role}</span></figcaption></figure>)}</div></div></section>

      <section id="faq" className="section bg-[#132443]"><div className="section-wrap grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow mb-4">Questions from the village</p><h2 className="section-title">Frequently asked things</h2><p className="section-lede">A few answers before you take the bridge.</p></div><div className="space-y-3">{site.faqs.map((faq) => <details key={faq.question} className="card group p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">{faq.question}<span className="text-xl text-[#4CC9F0] transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 leading-7 text-[#EAF4FF]/70">{faq.answer}</p></details>)}</div></div></section>

      <section id="contact" className="section"><div className="section-wrap grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><p className="eyebrow mb-4">Send up a swamp signal</p><h2 className="section-title">{site.contactTitle}</h2><p className="section-lede">{site.contactCopy}</p><div className="mt-8 rounded-2xl border border-[#365777] bg-[#132443] p-5"><p className="font-black">🕰️ Helpdesk never sleeps</p><p className="mt-1 text-sm text-[#EAF4FF]/60">Our fictional team is ready around the clock.</p></div></div><form onSubmit={submitContact} className="card grid gap-4 p-6 sm:grid-cols-2 sm:p-8"><label className="grid gap-2 text-sm font-bold">Your name<input required minLength={2} maxLength={80} name="name" placeholder="Alex Ogre" /></label><label className="grid gap-2 text-sm font-bold">Work email<input required type="email" maxLength={254} name="email" placeholder="alex@company.com" /></label><label className="grid gap-2 text-sm font-bold sm:col-span-2">Company<input required minLength={2} maxLength={120} name="company" placeholder="Acorn & Co." /></label><label className="grid gap-2 text-sm font-bold sm:col-span-2">What’s going on?<textarea required minLength={10} maxLength={2000} rows={5} name="message" placeholder="Tell us where the tech mud is deepest..." /></label><div className="sm:col-span-2"><button className="button w-full sm:w-auto" type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending through the reeds…" : "Send my message"} <span aria-hidden="true">→</span></button>{message && <p role="status" aria-live="polite" className={`mt-4 text-sm font-bold ${status === "error" ? "text-[#8BC5F0]" : "text-[#9ADCF5]"}`}>{message}</p>}</div></form></div></section>
    </main>

    <footer className="border-t border-[#365777]/70 bg-[#080F20] py-8"><div className="section-wrap flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"><a href="#home" className="flex items-center gap-2"><OnionMark small /><span className="font-[family-name:var(--font-heading)] font-bold">Shrek Consulting IT</span></a><p className="max-w-xl text-xs leading-5 text-[#EAF4FF]/45">{site.footerNote}</p><a href="#home" className="text-sm font-bold text-[#4CC9F0]">Back to top ↑</a></div></footer>
  </>;
}
