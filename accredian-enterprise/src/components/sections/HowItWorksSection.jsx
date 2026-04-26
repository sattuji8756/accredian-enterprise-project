'use client';
import { howItWorks } from '@/data/mockData';

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            How We {' '}
            <span className="text-primary">Deliver Results</span> That Matter?
          </h2>
          <p className=" text-black">A Struchered Three-Step Approach to <span className='text-primary'>Skill Development</span></p>
          {/* <p className="text-slate mt-3 text-base max-w-xl mx-auto font-medium">
            A proven 4-step process that gets your team learning — and succeeding — fast.
          </p> */}
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+32px)] right-[calc(12.5%+32px)] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, i) => (
              <div key={item.step} className="flex flex-col items-center text-center group">
                {/* Step circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-extrabold text-lg shadow-[0_6px_20px_rgba(26,110,245,0.35)] group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" style={{ animationDelay: `${i * 400}ms`, animationDuration: '3s' }} />
                </div>

                <h3 className="font-bold text-navy text-base mb-2">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed font-medium max-w-[220px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-card-bg rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold text-navy mb-1">
              Ready to upskill your team?
            </h3>
            <p className="text-slate font-medium">
              Schedule a free 30-minute discovery call with our experts.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary whitespace-nowrap flex-shrink-0"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
