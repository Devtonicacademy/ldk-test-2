/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import ashedosanImage from "../assets/images/Lakedukepartner_1.jpeg";

interface ProfileProps {
  onOpenQuoteModal?: () => void;
  onNavigate?: (tab: string) => void;
  isStandalonePage?: boolean;
}

export default function Profile({
  onOpenQuoteModal,
  onNavigate,
  isStandalonePage = false,
}: ProfileProps) {
  const whatsappNumber = "2349128299370";
  const displayPhone = "+234 912 829 9370";
  const rawPhone = "+2349128299370";
  const emailAddress = "info@lakedukeintegrated.com";
  const headOfficeAddress = "64, Giwa - Oke Aro road, Ifo LGA, Ogun state, Nigeria";

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Hello Ashedosan Odokuma, I am reaching out regarding export opportunities and commodity allocations with Lakeduck Integrated."
    );
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section 
      id="profile" 
      className={`${isStandalonePage ? "py-16" : "py-20"} relative overflow-hidden font-sans`}
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1B2E21]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-[#C5A059]" />
            <span className="font-mono text-xs font-bold text-[#C5A059] uppercase tracking-[0.25em]">
              Export Leadership Profile
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light italic text-[#1B2E21] tracking-tight leading-tight">
            Commercial Direction <span className="font-bold not-italic text-[#8BA88E]">&amp; Global Markets</span>
          </h2>
          <p className="text-[#1B2E21]/75 text-sm sm:text-base font-light leading-relaxed">
            Directly overseeing international trade negotiations, quality validation, export compliance, and relationship management for industrial clients across Europe, Asia, and the Americas.
          </p>
        </div>

        {/* Main Profile Showcase Card */}
        <div className="bg-white border border-[#1B2E21]/15 shadow-xl relative overflow-hidden">
          {/* Subtle top brand bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#1B2E21] via-[#C5A059] to-[#8BA88E]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Column: Portrait & Quick Credentials (5 cols) */}
            <div className="lg:col-span-5 bg-[#FAF8F5] p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1B2E21]/10">
              <div className="space-y-6">
                
                {/* Photo with prestige framing */}
                <div className="relative mx-auto lg:mx-0 max-w-[340px] aspect-square overflow-hidden shadow-xl border-4 border-white ring-1 ring-[#1B2E21]/15 group">
                  <img
                    src={ashedosanImage}
                    alt="Ashedosan Odokuma - Export Sales Manager"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2E21]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Verified Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#1B2E21]/90 backdrop-blur-xs text-white p-2.5 flex items-center justify-between border border-[#C5A059]/30">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#C5A059] font-bold">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                      Verified Trade Lead
                    </div>
                    <span className="text-[10px] font-mono text-gray-300">Active Desk</span>
                  </div>
                </div>

                {/* Identity Summary */}
                <div className="text-center lg:text-left space-y-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold block">
                    Export Sales Manager
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold italic text-[#1B2E21]">
                    Ashedosan Odokuma
                  </h3>
                  <p className="text-xs text-[#1B2E21]/70 font-mono">
                    Lakeduck Integrated &bull; Global Trading Desk
                  </p>
                </div>

              </div>

              {/* Quick Contact Badges */}
              <div className="mt-8 pt-6 border-t border-[#1B2E21]/10 space-y-2.5 text-xs">
                <a
                  href={`tel:${rawPhone}`}
                  className="flex items-center gap-3 text-[#1B2E21]/80 hover:text-[#C5A059] transition-colors p-2 hover:bg-white"
                >
                  <Phone className="w-4 h-4 text-[#8BA88E] shrink-0" />
                  <span className="font-mono font-medium">{displayPhone}</span>
                </a>
                
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#1B2E21]/80 hover:text-[#25D366] transition-colors p-2 hover:bg-white"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span className="font-mono font-medium">WhatsApp: {displayPhone}</span>
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-3 text-[#1B2E21]/80 hover:text-[#C5A059] transition-colors p-2 hover:bg-white"
                >
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span className="font-mono font-medium truncate">{emailAddress}</span>
                </a>

                <div className="flex items-start gap-3 text-[#1B2E21]/70 p-2">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-relaxed font-sans">{headOfficeAddress}</span>
                </div>
              </div>

            </div>

            {/* Right Column: Narrative, Expertise, Key Metrics & CTAs (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8 bg-white">
              
              <div className="space-y-6">
                {/* Headline Banner */}
                <div className="bg-[#1B2E21] text-white p-5 sm:p-6 border-l-4 border-[#C5A059] space-y-2 shadow-md">
                  <div className="flex items-center gap-2 text-[#C5A059] text-[10px] font-mono font-bold uppercase tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    Career Distinction
                  </div>
                  <p className="font-serif italic text-lg sm:text-xl text-white font-normal leading-snug">
                    &ldquo;11+ Years of Agro-Commodity Expertise | Connecting Quality Products to Global Markets&rdquo;
                  </p>
                </div>

                {/* Professional Bio */}
                <div className="space-y-4 text-sm sm:text-base text-[#1B2E21]/80 leading-relaxed font-light">
                  <p>
                    As <strong className="font-semibold text-[#1B2E21]">Export Sales Manager</strong> at Lakeduck Integrated, 
                    <strong className="font-semibold text-[#1B2E21]"> Ashedosan Odokuma</strong> spearheads international client 
                    partnerships and commercial supply contracts. With over eleven years in agricultural commodity origination, 
                    quality compliance, and ocean freight logistics, he ensures international buyers receive verified, 
                    export-grade commodities tailored to global industrial standards.
                  </p>
                  <p className="text-xs sm:text-sm text-[#1B2E21]/70">
                    His operations span high-volume contract execution across Nigeria&apos;s most sought-after agricultural exports—including 
                    Grade 1 Cocoa Beans, Sun-Dried Split Ginger, Cleaned Natural Sesame Seeds, Raw Cashew Nuts (KOR 50-52), 
                    Dried Hibiscus Flowers, and Shea Nuts—as well as sustainable circular economy products like recycled PET flakes 
                    and crumb tire chips.
                  </p>
                </div>

                {/* Core Competencies Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 bg-[#FAF8F5] border border-[#1B2E21]/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-serif italic font-semibold text-[#1B2E21]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8BA88E]" />
                      Global Trade Structuring
                    </div>
                    <p className="text-[11px] text-[#1B2E21]/70 leading-relaxed">
                      Expert in Incoterms (FOB Lagos/Onne, CIF, CFR), Irrevocable Letters of Credit, and CAD terms.
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#FAF8F5] border border-[#1B2E21]/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-serif italic font-semibold text-[#1B2E21]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8BA88E]" />
                      Quality &amp; Lab Audits
                    </div>
                    <p className="text-[11px] text-[#1B2E21]/70 leading-relaxed">
                      Rigorous SGS, Bureau Veritas &amp; NEPC pre-shipment sampling, moisture checks, and fumigation.
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#FAF8F5] border border-[#1B2E21]/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-serif italic font-semibold text-[#1B2E21]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8BA88E]" />
                      Direct WhatsApp Desk
                    </div>
                    <p className="text-[11px] text-[#1B2E21]/70 leading-relaxed">
                      Instant communication on spot vessel allocations, harvest timelines, and FOB price sheets.
                    </p>
                  </div>

                  <div className="p-3.5 bg-[#FAF8F5] border border-[#1B2E21]/10 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-serif italic font-semibold text-[#1B2E21]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8BA88E]" />
                      End-to-End Maritime Flow
                    </div>
                    <p className="text-[11px] text-[#1B2E21]/70 leading-relaxed">
                      Seaport warehousing, container stuffing, phytosanitary clearance, and bill of lading dispatch.
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#1B2E21]/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20b858] text-white font-sans text-xs font-bold uppercase tracking-widest rounded-none shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer border-none"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  Chat on WhatsApp (+2349128299370)
                </button>

                {onOpenQuoteModal && (
                  <button
                    type="button"
                    onClick={onOpenQuoteModal}
                    className="px-6 py-3.5 bg-[#1B2E21] hover:bg-[#C5A059] text-white font-sans text-xs font-bold uppercase tracking-widest rounded-none shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
                  >
                    Request Contract Allocation
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                {onNavigate && (
                  <button
                    type="button"
                    onClick={() => onNavigate("contact")}
                    className="px-5 py-3.5 bg-transparent hover:bg-[#FAF8F5] text-[#1B2E21] border border-[#1B2E21]/20 font-sans text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer"
                  >
                    Visit Trade Desk
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
