'use client';
import { features } from '@/data/mockData';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="section-title">
            The{' '}
            <span className="text-primary">Accredian Edge</span>
          </h2>
          <p className="text-black font-bold">Key Aspeccts of <span className='text-primary'>Our Strategic Training</span></p>
          <p className="text-slate mt-3 text-base max-w-2xl mx-auto font-medium">
            From custom curriculum design to real-time ROI analytics — we handle the full
            learning journey so you can focus on results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 card-hover border border-gray-100 cursor-default group"
            >
              <div className="w-12 h-12 rounded-xl bg-card-bg flex items-center justify-center text-2xl mb-4 group-hover:bg-primary/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-bold text-navy text-base mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
