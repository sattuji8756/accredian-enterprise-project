'use client';
import { useEffect, useRef, useState } from 'react';
import { stats } from '@/data/mockData';

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const numericTarget = parseInt(target.replace(/\D/g, ''));
          const duration = 1800;
          const steps = 60;
          const increment = numericTarget / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericTarget) {
              setCount(numericTarget);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const numericPart = parseInt(target.replace(/\D/g, ''));
  const prefix = target.replace(/[\d+%]/g, '');
  const hasSuffix = target.includes('+') ? '+' : target.includes('%') ? '%' : '';

  return (
    <span ref={ref}>
      {prefix}{count >= numericPart ? target : count + hasSuffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
            Our{' '}
            <span className="text-primary">Track Record</span> 
          </h2>
          <p className="text-xl font-bold   text-black mb-3">
            The Number Behind <span className='text-primary'>Our Success</span>
          </p>
          {/* <p className="text-slate-300 mt-3 text-base max-w-xl mx-auto font-medium">
            Delivering measurable outcomes for organizations across every industry.
          </p> */}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 text-center card-hover"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-extrabold text-primary mb-2 tracking-tight">
                <CountUp target={stat.value} />
              </div>
              <p className="text-sm text-slate-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
