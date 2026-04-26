'use client';
import { clients } from '@/data/mockData';
import {client} from '@/data/mockData'

export default function ClientsSection() {
  // Duplicate for seamless infinite scroll
  const doubled = [...clients, ...clients];
  const double = [...client, ...client];

  return (
    <section id="clients" className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center mb-10">
        <h2 className="section-title">
          Our Proven{' '}
          <span className="text-primary">Partnerships</span>
        </h2>
        <p className="text-black">Successfull Collaborations With the <span className='text-primary'>Industry's Best</span></p>
      </div>

      {/* Scrolling ticker */}
      <div className="relative">
        <div className="flex animate-[scroll_30s_linear_infinite] w-max gap-8 px-4">
          {/* {doubled.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 bg-card-bg rounded-xl px-8 py-4 flex items-center justify-center min-w-[140px]"
            >
              <span className="text-sm font-bold text-navy/60 tracking-wide">{client}</span>
            </div> */}

            {double.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 bg-card-bg rounded-xl px-8 py-4 flex items-center justify-center min-w-[140px]"
            >
              {/* <span className="text-sm font-bold text-navy/60 tracking-wide">{client.logo}</span> */}
              <img src={client.logo} alt="" className='h-10'/>
            </div>
          ))}
        </div>
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>

      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}




