import { Linkedin, Twitter, Youtube } from 'lucide-react';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Company: ['About Us', 'Careers', 'Blog', 'Press'],
    Programs: ['Data Science', 'AI & ML', 'Product Management', 'Leadership'],
    Support: ['How it Works', 'FAQs', 'Privacy Policy', 'Terms of Service'],
  };
    const socials = [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/accredian', icon: Linkedin },
    { label: 'Twitter', href: 'https://twitter.com/accredian', icon: Twitter },
    { label: 'YouTube', href: 'https://youtube.com/@accredian', icon: Youtube },
  ];

  return (
    // <footer className="bg-[#080f1e] text-white py-16">
    <footer className="bg-gray-50  text-black py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <p className="text-2xl font-extrabold text-primary leading-none tracking-tight">
                accredian
              </p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                credentials that matter
              </p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium max-w-xs">
              The complete operating system for enterprise learning. Upskill your workforce
              at scale with expert mentorship and real-time analytics.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {['LinkedIn', 'Twitter', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary transition-colors text-xs font-bold"
                >
                  {/* {social[0]} */}
                  {/* <h3>Contacts</h3> */}
                </a>
              ))}

              
            </div>
            <h3>Contact Us</h3>
            <p>Email us: <span  className='text-primary'>enterprise@accredian.com</span></p>
            <p className='text-sm'>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,</p>
            <p>Gurugram, Haryana</p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-white mb-4">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-white font-medium transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Accredian. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full  animate-pulse" />
            {/* <p className="text-slate-500 text-xs font-medium">All systems operational</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
