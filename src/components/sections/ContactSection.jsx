'use client';
import { useState } from 'react';

const teamSizes = ['1–10', '11–50', '51–200', '201–500', '500+'];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', teamSize: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left info */}
          <div>
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title mb-4">
              Let&apos;s Build Your{' '}
              <span className="text-primary">Learning Program</span>
            </h2>
            <p className="text-slate font-medium leading-relaxed mb-8">
              Tell us about your team and goals. Our enterprise consultants will reach out
              within 24 hours to schedule a free discovery call.
            </p>

            {/* Benefits list */}
            <div className="flex flex-col gap-4">
              {[
                { icon: '🎯', text: 'Free skill gap analysis for your team' },
                { icon: '📋', text: 'Custom program proposal within 48 hours' },
                { icon: '🤝', text: 'Dedicated enterprise success manager' },
                { icon: '📊', text: 'ROI projection report included' },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <span className="text-sm font-semibold text-navy">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-card-bg rounded-3xl p-7 md:p-10">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mx-auto mb-4">
                  ✅
                </div>
                <h3 className="text-xl font-extrabold text-navy mb-2">
                  Enquiry Received!
                </h3>
                <p className="text-slate font-medium text-sm">
                  Thank you! Our team will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-primary font-bold text-sm underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-xl font-extrabold text-navy mb-1">
                  Enquire Now
                </h3>

                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-navy/60 mb-1 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Priya Sharma"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-navy placeholder:text-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-navy/60 mb-1 block">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="priya@company.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-navy placeholder:text-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    />
                  </div>
                </div>

                {/* Company + Team size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-navy/60 mb-1 block">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      placeholder="Acme Corp"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-navy placeholder:text-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-navy/60 mb-1 block">
                      Team Size
                    </label>
                    <select
                      name="teamSize"
                      value={form.teamSize}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-navy focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition appearance-none"
                    >
                      <option value="">Select size</option>
                      {teamSizes.map((s) => (
                        <option key={s} value={s}>
                          {s} employees
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs font-bold text-navy/60 mb-1 block">
                    What are your learning goals?
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="We want to upskill our data team in AI/ML..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-navy placeholder:text-gray-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <p className="text-red-500 text-xs font-semibold bg-red-50 px-4 py-2 rounded-lg">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full mt-1 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" opacity="0.3" />
                        <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Enquiry'
                  )}
                </button>

                <p className="text-[11px] text-slate text-center">
                  By submitting, you agree to our Privacy Policy. No spam — ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
