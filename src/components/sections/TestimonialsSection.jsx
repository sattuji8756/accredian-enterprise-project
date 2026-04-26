'use client';
import { testimonials } from '@/data/mockData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
            Testimonials from{' '}
            <span className="text-primary">Our Partners</span>
          </h2>
          <p className="text-xl font-bold tracking-[0.1em]  text-black mb-3">
            What <span className='text-primary'>Our Clients </span> Are Saying
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-7 card-hover flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 20 20" fill="#f59e0b">
                    <path d="M10 1l2.39 6.26H18l-4.7 3.7 1.88 6.04L10 13.27l-5.18 3.73 1.88-6.04L2 7.26h5.61z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-200 text-sm leading-relaxed font-medium flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
