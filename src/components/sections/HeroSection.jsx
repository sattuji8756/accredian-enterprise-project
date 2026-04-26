"use client";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="pt-[72px] min-h-screen flex items-center mesh-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-2 w-full py-4  bg-blue-100  my-14 rounded-3xl shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          {/* Left content */}
          <div className="flex-1 max-w-[580px] animate-fade-up pl-6">
            

            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-extrabold leading-[1.08] tracking-tight text-navy mb-6">
              Next-Gen{" "}
              <span className="text-primary relative">
                Expertise
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 300 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6 Q75 2 150 5 Q225 8 298 3"
                    stroke="#1a6ef5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </svg>
              </span>
              <br />
              For Your <span className="text-primary">Enterprise</span>
            </h1>

            <p className="text-lg text-slate font-medium leading-relaxed mb-8 max-w-md">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-5 mb-10">
              {[
                "Tailored Solutions",
                "Industry Insights",
                "Expert Guidance",
              ].map((label) => (
                <span
                  key={label}
                  className="flex items-center gap-2 text-sm font-semibold text-navy"
                >
                  <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="btn-primary text-base"
              >
                Enquire Now
              </button>
            </div>


          </div>

          {/* Right illustration */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: "200ms" }}>
              <img src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp" alt="" className="w-[40vw] h-[70vh] object-cover" />
            </div>
        </div>
      </div>
    </section>
  );
}
