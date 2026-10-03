import React from "react";
import Magnetic from "./Magnetic";
import SplitText from "./SplitText";
import { ArrowUpRight, GitHub, Instagram, LinkedIn, Mail, Send, XTwitter } from "./Icons";
import { profile, socials } from "../data";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <GitHub />,
  LinkedIn: <LinkedIn />,
  "Twitter X": <XTwitter />,
  Instagram: <Instagram />,
};

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[140px]" aria-hidden="true" />
      <div className="container grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col">
          <p className="eyebrow reveal mb-6">
            <span className="text-accent-soft">06</span> Contact
          </p>
          <SplitText
            text="Have a project in *mind?* Let's talk."
            className="headline words-gradient split-heading max-w-[14ch]"
          />
          <p className="reveal mt-6 max-w-[44ch] text-zinc-400 md:text-lg">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision. Drop a message and I&apos;ll get back to you shortly.
          </p>
          <p className="reveal mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.15em] text-zinc-500">
            <span>{profile.location}</span>
            <span className="text-zinc-700">/</span>
            <span>{profile.timezone}</span>
            <span className="text-zinc-700">/</span>
            <span className="text-emerald-300">{profile.availability}</span>
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="reveal group mt-10 inline-flex w-fit items-center gap-4 text-xl font-medium md:text-2xl"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-accent/50 group-hover:text-accent-soft">
              <Mail />
            </span>
            <span className="relative">
              {profile.email}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-accent-soft transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
            </span>
          </a>

          <div className="reveal-stagger mt-10 flex flex-wrap items-center gap-3 lg:mt-auto lg:pt-12">
            {socials.map(({ label, href }) => (
              <Magnetic key={label} strength={0.4}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition-colors duration-300 hover:border-transparent hover:bg-zinc-50 hover:text-ink-950"
                >
                  {socialIcons[label]}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        <form
          action="https://getform.io/f/bxowqypa"
          method="POST"
          className="reveal card relative p-6 md:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-500/20 blur-3xl" aria-hidden="true" />
          <p className="mb-8 text-lg font-medium">
            Send a message <span className="font-serif italic text-zinc-400">— I reply fast.</span>
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative">
              <input id="name" type="text" name="name" autoComplete="name" required placeholder="Name" className="field peer" />
              <label htmlFor="name" className="field-label">Your name</label>
            </div>
            <div className="relative">
              <input id="email" type="email" name="email" autoComplete="email" required placeholder="Email" className="field peer" />
              <label htmlFor="email" className="field-label">Email address</label>
            </div>
          </div>

          <div className="relative mt-4">
            <textarea
              id="message"
              name="message"
              required
              placeholder="Message"
              className="field peer min-h-44 resize-y"
            />
            <label htmlFor="message" className="field-label">Tell me about your project</label>
          </div>

          <button type="submit" className="btn btn-primary group mt-6 h-14 w-full text-base">
            <span>Send message</span>
            <Send width={18} height={18} className="btn-icon" />
          </button>

          <p className="mt-4 flex items-center justify-center gap-1 text-xs text-zinc-500">
            Prefer email? Write to <a href={`mailto:${profile.email}`} className="text-zinc-300 hover:text-accent-soft">{profile.email}</a>
            <ArrowUpRight width={12} height={12} />
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
