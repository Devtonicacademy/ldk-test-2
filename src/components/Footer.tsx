/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Leaf, ArrowUp, Mail, ShieldAlert, Award, FileText, Check, AlertCircle, Phone, MapPin, MessageSquare } from "lucide-react";
import LakeduckLogo from "./Logo";

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenQuoteModal: () => void;
  onAdminTrigger?: () => void;
  onSelectProduct?: (productId: string) => void;
}

export default function Footer({ 
  onNavigate, 
  onOpenQuoteModal, 
  onAdminTrigger,
  onSelectProduct 
}: FooterProps) {
  const [newsEmail, setNewsEmail] = useState("");
  const [newsSuccess, setNewsSuccess] = useState(false);
  const [newsError, setNewsError] = useState("");

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNewsError("");
    const trimmedEmail = newsEmail.trim();
    if (!trimmedEmail) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setNewsError("Please enter a valid email address.");
      return;
    }

    try {
      const subs = JSON.parse(localStorage.getItem("VCD_NEWSLETTER_SUBSCRIBERS") || "[]");
      if (!subs.includes(trimmedEmail)) {
        subs.push(trimmedEmail);
        localStorage.setItem("VCD_NEWSLETTER_SUBSCRIBERS", JSON.stringify(subs));
      }
      setNewsSuccess(true);
      setNewsEmail("");
      setNewsError("");
      
      setTimeout(() => {
        setNewsSuccess(false);
      }, 5000);
    } catch (err) {
      console.error("Error signing up for newsletter:", err);
      setNewsError("An error occurred. Please try again.");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#132017] text-white font-sans border-t border-[#C5A059]/10 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background visual detail */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Global Call-to-Action section inside footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 border-b border-white/5 mb-12">
        <div className="bg-gradient-to-r from-[#1B2E21] via-[#1B2E21]/90 to-[#132017] border border-[#C5A059]/15 rounded-none p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(197,160,89,0.06),transparent_50%)]" />
          
          <div className="space-y-3 max-w-xl text-center md:text-left relative z-10">
            <span className="font-mono text-[9px] bg-white/5 border border-[#C5A059]/30 text-[#C5A059] px-2.5 py-1 rounded-none uppercase font-bold tracking-widest inline-block">
              Ready to Secure Cocoa, Sesame, Ginger or Cashew?
            </span>
            <h3 className="font-serif italic font-semibold text-2xl sm:text-3xl text-white">
              Execute Your Global Supply Contracts Securely
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
              Contact our trade desks at our Head Office (Ogun State) and Abuja. We manage double-shredding, pre-shipment SGS analysis, custom sack printing, and port ocean logistics directly.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full sm:w-auto relative z-10">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 bg-[#C5A059] hover:bg-[#b5924f] border-none text-[#1B2E21] rounded-none text-xs font-bold uppercase tracking-widest transition-all duration-305 hover:scale-[1.03] cursor-pointer shadow-md text-center"
            >
              Get Ocean Freight Quote
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="px-6 py-3 bg-transparent hover:bg-white/5 border border-[#C5A059]/30 text-[#C5A059] rounded-none text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer text-center"
            >
              Contact Trading Office
            </button>
          </div>
        </div>
      </div>

      {/* Footer major columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 text-sm">
        
        {/* Column 1: Brand & vision (3 cols) */}
        <div className="lg:col-span-3 space-y-6">
          <button
            onClick={() => {
              onNavigate("home");
              scrollToTop();
            }}
            className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          >
            <LakeduckLogo className="w-9 h-9" dark={true} />
            <div>
              <span className="block font-serif italic font-semibold text-lg tracking-tight leading-none text-white">
                LAKEDUCK
              </span>
              <span className="block text-[8px] font-mono tracking-[1.5px] uppercase font-semibold text-[#C5A059]">
                INTEGRATED
              </span>
            </div>
          </button>

          <p className="text-gray-400 text-xs leading-relaxed max-w-sm font-sans font-light">
            Lakeduck Integrated handles the end-to-end sourcing, cleaning, double-sifting, certification, packaging, recycling processing, and marine container shipping of agricultural products and recycled materials from West Africa to global factories.
          </p>

          <div className="flex gap-4 text-xs font-mono text-gray-500">
            <span>SGS Audit Approved</span>
            <span>|</span>
            <span>NEPC Registered Exporter</span>
          </div>
        </div>

        {/* Column 2: Commodities (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-serif italic text-gray-200 tracking-wider text-xs uppercase font-semibold">Sourced Graded Commodities</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>
              <button
                onClick={() => {
                  if (onSelectProduct) {
                    onSelectProduct("cocoa-beans");
                  } else {
                    onNavigate("products");
                    setTimeout(() => {
                      const el = document.getElementById("commodity-cocoa-beans");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                    }, 150);
                  }
                }}
                className="hover:text-[#C5A059] transition-colors cursor-pointer text-left"
              >
                Grade 1 Cocoa Beans
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  if (onSelectProduct) {
                    onSelectProduct("sesame-seeds");
                  } else {
                    onNavigate("products");
                    setTimeout(() => {
                      const el = document.getElementById("commodity-sesame-seeds");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                    }, 150);
                  }
                }}
                className="hover:text-[#C5A059] transition-colors cursor-pointer text-left"
              >
                Golden White Sesame Seeds
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  if (onSelectProduct) {
                    onSelectProduct("ginger-dried");
                  } else {
                    onNavigate("products");
                    setTimeout(() => {
                      const el = document.getElementById("commodity-ginger-dried");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                    }, 150);
                  }
                }}
                className="hover:text-[#C5A059] transition-colors cursor-pointer text-left"
              >
                Sun-Dried Split Ginger
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  if (onSelectProduct) {
                    onSelectProduct("cashew-nuts");
                  } else {
                    onNavigate("products");
                    setTimeout(() => {
                      const el = document.getElementById("commodity-cashew-nuts");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                    }, 150);
                  }
                }}
                className="hover:text-[#C5A059] transition-colors cursor-pointer text-left"
              >
                Raw Cashew Nuts (KOR 50-52)
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  if (onSelectProduct) {
                    onSelectProduct("hibiscus-flower");
                  } else {
                    onNavigate("products");
                    setTimeout(() => {
                      const el = document.getElementById("commodity-hibiscus-flower");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                    }, 150);
                  }
                }}
                className="hover:text-[#C5A059] transition-colors cursor-pointer text-left"
              >
                Dried Hibiscus Sorrel Flowers
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  if (onSelectProduct) {
                    onSelectProduct("hardwood-charcoal");
                  } else {
                    onNavigate("products");
                    setTimeout(() => {
                      const el = document.getElementById("commodity-hardwood-charcoal");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                    }, 150);
                  }
                }}
                className="hover:text-[#C5A059] transition-colors cursor-pointer text-left"
              >
                Premium Hardwood Ayin Charcoal
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Corporate Sections (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-serif italic text-gray-200 tracking-wider text-xs uppercase font-semibold">Corporate Navigation</h4>
          <ul className="space-y-2 text-xs text-gray-400">
            <li>
              <button onClick={() => onNavigate("home")} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                Return Home Desk
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("about")} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                Sustainable Agronomy & Team
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("services")} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                Quality Inspections & Liners
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("projects")} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                Maritime Despatched Ledgers
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("blog")} className="hover:text-[#C5A059] transition-colors cursor-pointer">
                West African Market Intelligence
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("profile")} className="hover:text-[#C5A059] transition-colors cursor-pointer text-left">
                Export Sales Leadership Profile
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("contact")} className="hover:text-[#C5A059] transition-colors cursor-pointer text-left">
                Head Office &amp; Trade Desks
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Quality assurances & Direct Contact (2 cols) */}
        <div className="lg:col-span-2 space-y-4 text-xs font-mono text-gray-400">
          <h4 className="font-serif italic text-gray-200 tracking-wider text-xs uppercase font-semibold font-sans">Trading Security &amp; Contact</h4>
          <div className="space-y-3">
            <div className="flex gap-2 items-start">
              <Award className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>SGS, Bureau Veritas &amp; Cotecna compliant sealing</span>
            </div>
            <div className="flex gap-2 items-start">
              <FileText className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span>Irrevocable Letters of Credit</span>
            </div>
            <div className="flex gap-2 items-start">
              <Phone className="w-4 h-4 text-[#8BA88E] shrink-0 mt-0.5" />
              <a href="tel:+2349128299370" className="hover:text-[#C5A059] transition-colors">
                +234 912 829 9370
              </a>
            </div>
            <div className="flex gap-2 items-start">
              <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              <a 
                href="https://api.whatsapp.com/send?phone=2349128299370" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors"
              >
                WhatsApp Desk
              </a>
            </div>
            <div className="flex gap-2 items-start">
              <Mail className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <a href="mailto:info@lakedukeintegrated.com" className="hover:text-[#C5A059] transition-colors break-all">
                info@lakedukeintegrated.com
              </a>
            </div>
            <div className="flex gap-2 items-start">
              <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <span className="text-[11px] leading-relaxed font-sans text-gray-400">
                64, Giwa - Oke Aro road, Ifo LGA, Ogun state, Nigeria
              </span>
            </div>
          </div>
        </div>

        {/* Column 5: Weekly Newsletter (3 cols) */}
        <div className="lg:col-span-3 space-y-4 font-sans">
          <h4 className="font-serif italic text-gray-200 tracking-wider text-xs uppercase font-semibold">Weekly Intelligence</h4>
          <p className="text-gray-400 text-xs leading-relaxed font-light">
            Subscribe to our weekly briefs on West African commodity market trends, price updates, and trade opportunities.
          </p>

          {newsSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#1B2E21] border border-[#C5A059]/40 p-4 space-y-2"
            >
              <div className="flex items-center gap-2 text-[#C5A059]">
                <Check className="w-4 h-4" />
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider">Subscription Logged</span>
              </div>
              <p className="text-gray-300 text-[11px] leading-relaxed font-light">
                Thank you! Your email has been registered for weekly commodity briefs.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter corporate email..."
                  value={newsEmail}
                  onChange={(e) => {
                    setNewsEmail(e.target.value);
                    if (newsError) setNewsError("");
                  }}
                  className={`w-full bg-[#1B2E21]/60 border rounded-none py-2 px-3 pl-8 text-xs outline-none text-white focus:bg-[#1B2E21] transition-all ${
                    newsError ? "border-red-500 focus:border-red-500" : "border-white/10 focus:border-[#C5A059]"
                  }`}
                />
                <Mail className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-gray-500" />
              </div>
              {newsError && (
                <p className="text-red-500 text-[10px] flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {newsError}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-[#C5A059] hover:bg-[#b5924d] text-[#1B2E21] font-mono text-[10px] font-bold uppercase tracking-wider py-2 px-4 transition-colors duration-200 cursor-pointer text-center"
              >
                Subscribe to Briefs
              </button>
              <span className="block text-[9px] text-gray-500 font-mono italic">
                * Real-time pricing trends and indices.
              </span>
            </form>
          )}
        </div>

      </div>

      {/* Bottom Legal row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <div className="select-none">
          <span 
            onClick={onAdminTrigger}
            className="cursor-pointer transition-colors hover:text-[#C5A059]"
            title="Sourced with fairness"
          >
            &copy; {new Date().getFullYear()} Lakeduck Integrated & Export House. Sourced with fairness.
          </span>
        </div>
        <div className="flex gap-4">
          <span className="hover:text-[#C5A059] cursor-pointer">Terms of Sourcing</span>
          <span>|</span>
          <span className="hover:text-[#C5A059] cursor-pointer">Maritime Code Compliance</span>
          <span>|</span>
          <button onClick={scrollToTop} className="hover:text-[#C5A059] flex items-center gap-1 cursor-pointer">
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </footer>
  );
}
