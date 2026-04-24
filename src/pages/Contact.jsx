import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const OWNER_EMAIL = 'amirtheshbharathi29@gmail.com';
// Works locally (Express) and on Netlify (serverless function)
const API_URL = import.meta.env.DEV
  ? 'http://localhost:3001/api/contact'
  : '/api/contact';

export default function Contact() {
  const [form, setForm]           = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [serverError, setServerError] = useState('');
  const [errors, setErrors]       = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name])  setErrors((prev) => ({ ...prev, [name]: '' }));
    if (serverError)   setServerError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    setServerError('');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || 'Something went wrong. Please try again.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setServerError('Could not reach the server. Make sure it is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        {/* Header */}
        <div className="mb-16">
          <p className="section-subtitle text-white/40 mb-4">Get in Touch</p>
          <h1 className="section-title text-white">
            Let's Create Something
            <br />
            <span className="italic text-accent font-display">Beautiful Together</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — info */}
          <div className="space-y-10">
            <p className="text-white/50 font-light leading-relaxed text-base">
              Have a private event, portrait session, or any project in mind? I'd love to hear
              about it. Fill out the form and it'll land straight in my inbox.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-1">Email</p>
                  <a
                    href={`mailto:${OWNER_EMAIL}`}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {OWNER_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-1">Phone</p>
                  <a
                    href="tel:+917845940768"
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    +91 78459 40768
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-white/30 text-xs tracking-widest uppercase mb-1">Based In</p>
                  <p className="text-white/70 text-sm">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            {/* Decorative quote */}
            <blockquote className="border-l-2 border-accent pl-5 mt-8">
              <p className="font-display text-lg text-white/60 italic font-normal leading-relaxed">
                "Every great photograph begins with a conversation."
              </p>
            </blockquote>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-5">
                <CheckCircle size={48} className="text-accent" />
                <h2 className="font-display text-3xl text-white">Message Sent!</h2>
                <p className="text-white/50 font-light max-w-xs">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-4 text-accent text-sm tracking-widest uppercase hover:text-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full bg-transparent border ${
                      errors.name ? 'border-red-500/60' : 'border-white/10'
                    } text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors duration-300`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full bg-transparent border ${
                      errors.email ? 'border-red-500/60' : 'border-white/10'
                    } text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors duration-300`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Event, Portrait, Collaboration..."
                    className="w-full bg-transparent border border-white/10 text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white/40 text-xs tracking-widest uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className={`w-full bg-transparent border ${
                      errors.message ? 'border-red-500/60' : 'border-white/10'
                    } text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors duration-300 resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                </div>

                {/* Server error */}
                {serverError && (
                  <div className="flex items-start gap-3 border border-red-500/30 bg-red-500/5 px-4 py-3">
                    <AlertCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                    <p className="text-red-400 text-sm">{serverError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader size={15} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
