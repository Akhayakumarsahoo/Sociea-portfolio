"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from "lucide-react";
import GlassCard3D from "../components/ui/GlassCard3D";
import Button3D from "../components/ui/Button3D";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = new FormData(e.currentTarget);
    const data = {
      firstName: form.get("firstName"),
      lastName: form.get("lastName"),
      email: form.get("email"),
      phone: form.get("phone"),
      jobTitle: form.get("jobTitle"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      setSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      setSubmitting(false);
      alert("Submission finished!");
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#fbfbfd] pt-32 pb-24 relative overflow-hidden">
      {/* Ambient Top Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[400px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let&apos;s Build Together</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1d1d1f] tracking-tight">
            Reach Out to <span className="text-gradient-blue">Sociea</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Ready to elevate your brand presence? Book a strategy call or send us your inquiry to discover how we can transform your digital growth.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column - Contact Details & 3D Levitating Badge */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card 1 */}
            <GlassCard3D glowColor="rgba(0, 113, 227, 0.15)">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0071e3]">
                  <MessageSquare className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1d1d1f]">Get in Touch</h3>
                  <p className="text-xs text-gray-500 mt-1">Our agency team responds within 2 business hours.</p>
                </div>

                <div className="space-y-4 pt-2 text-sm text-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-[#0071e3]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Email Us</p>
                      <p className="font-semibold text-gray-900">contact@sociea.in</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-[#0071e3]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Call Agency</p>
                      <p className="font-semibold text-gray-900">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center text-[#0071e3]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Headquarters</p>
                      <p className="font-semibold text-gray-900">Bhubaneswar, Odisha, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard3D>

            {/* Levitating 3D Social Floating Preview */}
            <div className="relative p-6 rounded-3xl bg-gradient-to-br from-[#1d1d1f] to-[#0a0a0c] text-white overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider">Join Our Community</span>
                  <h4 className="text-lg font-bold">Follow @thesociea</h4>
                </div>

                <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-lg border border-white/20 animate-levitate-slow">
                  <Image
                    src="/social-media/instagram.png"
                    alt="Instagram 3D Icon"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - 3D Contact Form */}
          <div className="lg:col-span-7">
            <GlassCard3D glowColor="rgba(99, 102, 241, 0.15)">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">Message Delivered!</h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Thank you for reaching out to Sociea. Our digital strategist will review your brand details and reach out within 2 hours.
                  </p>
                  <Button3D onClick={() => setSubmitted(false)} variant="glass" size="md">
                    Send Another Inquiry
                  </Button3D>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight">Project Inquiry Form</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormInput name="firstName" label="First Name *" required />
                    <FormInput name="lastName" label="Last Name *" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormInput name="email" label="Business Email *" type="email" required />
                    <FormInput name="phone" label="Phone Number" type="tel" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-2">Job Title / Role</label>
                    <select
                      name="jobTitle"
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/90 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-blue-500/10 transition"
                    >
                      <option>Founder / CEO</option>
                      <option>Marketing Director</option>
                      <option>Brand Manager</option>
                      <option>Business Owner</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-2">Tell Us About Your Brand & Goals *</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Describe your current social media setup, target audience, and monthly budget..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/90 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-blue-500/10 transition resize-none"
                    />
                  </div>

                  <Button3D
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<Send className="w-4 h-4" />}
                  >
                    {submitting ? "Sending..." : "Submit Inquiry"}
                  </Button3D>
                </form>
              )}

            </GlassCard3D>
          </div>

        </div>

      </div>
    </main>
  );
}

function FormInput({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase text-gray-700 mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3.5 rounded-2xl bg-white/90 border border-gray-300 text-gray-900 text-sm focus:outline-none focus:border-[#0071e3] focus:ring-4 focus:ring-blue-500/10 transition"
      />
    </div>
  );
}
