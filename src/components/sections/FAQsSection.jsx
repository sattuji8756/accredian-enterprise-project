'use client';
import { useState } from 'react';
import { faqs } from '@/data/mockData';

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left bg-white hover:bg-card-bg transition-colors"
      >
        <span className="font-bold text-navy text-sm md:text-base pr-4">{faq.question}</span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center text-primary transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48' : 'max-h-0'}`}
      >
        <p className="px-5 md:px-6 pb-5 text-slate text-sm leading-relaxed font-medium">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQsSection() {
  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <p className="section-label">FAQs</p>
          <h2 className="section-title">
            Frequently Asked{' '}
            <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
