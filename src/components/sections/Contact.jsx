import React, { useState } from "react";
import { contactData, personalData } from "../../data/portfolio";
import { Mail, ArrowUpRight, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const GithubIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage("Network error. Please try again later or email directly.");
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-b border-zinc-800/60 relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Context */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase font-mono-code tracking-widest text-zinc-400">
                08 // FINAL CTA & INQUIRY
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="hero-headline font-display font-extrabold text-white tracking-tighter mb-6">
              {contactData.headline}
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl font-display text-zinc-300 font-medium leading-snug mb-8">
              {contactData.subheadline}
            </p>

            <p className="text-sm text-zinc-400 font-normal leading-relaxed mb-8">
              {contactData.additionalLine}
            </p>
          </div>

          <div className="pt-8 border-t border-zinc-800/80 flex flex-col space-y-3 font-mono-code text-xs text-zinc-400">
            <div>
              <span className="text-[10px] uppercase text-zinc-500 block mb-1">DIRECT EMAIL</span>
              <a
                href={contactData.mailto}
                className="text-sm text-zinc-200 hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4"
              >
                {contactData.email}
              </a>
            </div>
            <div>
              <span className="text-[10px] uppercase text-zinc-500 block mb-1">LOCATION</span>
              <span>{personalData.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Contact Form */}
        <div className="lg:col-span-7 bg-zinc-950/80 border border-zinc-800/90 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-md relative">
          {status === "success" ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4 animate-fadeIn">
              <div className="p-4 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-400">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white tracking-tight">
                MESSAGE RECEIVED
              </h3>
              <p className="text-base font-mono-code text-zinc-300 max-w-md">
                Message sent successfully. I’ll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 px-6 py-2.5 border border-zinc-700 rounded-full font-mono-code text-xs uppercase tracking-widest text-zinc-300 hover:text-white hover:border-zinc-400 transition-colors"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col space-y-6">
              {/* Error Alert Box */}
              {status === "error" && (
                <div className="p-4 rounded-lg bg-red-950/60 border border-red-800/60 text-red-300 flex items-start space-x-3 text-xs font-mono-code">
                  <AlertCircle size={18} className="shrink-0 text-red-400 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Name Input */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-mono-code uppercase tracking-widest text-zinc-400"
                >
                  YOUR NAME <span className="text-zinc-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Vance"
                  disabled={status === "loading"}
                  className={`w-full px-4 py-3.5 bg-zinc-900/90 border rounded-lg text-white font-sans placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-colors ${
                    errors.name ? "border-red-500/80" : "border-zinc-800"
                  }`}
                />
                {errors.name && (
                  <span className="text-[11px] font-mono-code text-red-400">{errors.name}</span>
                )}
              </div>

              {/* Email Input */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-mono-code uppercase tracking-widest text-zinc-400"
                >
                  EMAIL ADDRESS <span className="text-zinc-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@example.com"
                  disabled={status === "loading"}
                  className={`w-full px-4 py-3.5 bg-zinc-900/90 border rounded-lg text-white font-sans placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-colors ${
                    errors.email ? "border-red-500/80" : "border-zinc-800"
                  }`}
                />
                {errors.email && (
                  <span className="text-[11px] font-mono-code text-red-400">{errors.email}</span>
                )}
              </div>

              {/* Message Input */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-mono-code uppercase tracking-widest text-zinc-400"
                >
                  YOUR MESSAGE <span className="text-zinc-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your problem, system requirements, or project details..."
                  disabled={status === "loading"}
                  className={`w-full px-4 py-3.5 bg-zinc-900/90 border rounded-lg text-white font-sans placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-colors resize-none ${
                    errors.message ? "border-red-500/80" : "border-zinc-800"
                  }`}
                />
                {errors.message && (
                  <span className="text-[11px] font-mono-code text-red-400">{errors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full group inline-flex items-center justify-center space-x-3 px-8 py-4 bg-white text-black rounded-lg font-display font-bold text-base tracking-tight hover:bg-zinc-200 disabled:opacity-50 transition-all duration-300 cursor-pointer shadow-lg"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin text-black" />
                      <span>SENDING MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE ↗</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Social Links Row */}
      <div className="flex flex-wrap items-center gap-6 pt-12 mt-16 w-full border-t border-zinc-800/60 text-xs font-mono-code uppercase tracking-widest text-zinc-400">
        <a
          href={personalData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center space-x-2 text-zinc-300 hover:text-white transition-colors py-2 px-4 border border-zinc-800 hover:border-zinc-600 rounded-lg bg-zinc-950/60"
        >
          <GithubIcon size={16} />
          <span>GITHUB</span>
          <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        <a
          href={personalData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center space-x-2 text-zinc-300 hover:text-white transition-colors py-2 px-4 border border-zinc-800 hover:border-zinc-600 rounded-lg bg-zinc-950/60"
        >
          <LinkedinIcon size={16} />
          <span>LINKEDIN</span>
          <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        <a
          href={contactData.mailto}
          className="group inline-flex items-center space-x-2 text-zinc-300 hover:text-white transition-colors py-2 px-4 border border-zinc-800 hover:border-zinc-600 rounded-lg bg-zinc-950/60"
        >
          <Mail size={16} />
          <span>EMAIL</span>
          <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </section>
  );
}
