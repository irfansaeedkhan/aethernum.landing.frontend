"use client";

import Image from "next/image";

const ThreePillarsSection = () => {
  const pillars = [
    {
      title: "AENIMA Protocol",
      subtitle: "",
      description: (
        <>
          <p className="mb-2">
            Autonomous Engine for Neural and Intelligent Monetary Algorithms. Execution without emotion. Capital
            governed by logic, data and adaptive models.
          </p>
          <p>Your assets grow because the code thinks, not because someone guesses.</p>
        </>
      ),
      icon: "/images/piller-1.svg",
    },

    {
      title: "AI Meme-Market Making",
      subtitle: "",
      description: (
        <>
          <p className="mb-2">Aethernum operates in the early, silent stages of high-velocity meme assets.</p>
          <p className="mb-2">
            We position capital, manage liquidity, and influence micro-structure before the crowd arrives.
          </p>
          <p>A controlled environment where timing, flow and access matter more than narratives.</p>
        </>
      ),
      icon: "/images/piller-2.svg",
    },

    {
      title: "The Signal Layer (Coming Soon)",
      subtitle: "",
      description: (
        <>
          <p className="mb-2">A private feed of asymmetric opportunities: curated, verified, and tracked.</p>
          <p className="mb-2">
            Not &quot;alerts&quot; but structured entry logic, liquidity windows and accumulation ranges.
          </p>
          <p>For those who can wait, follow the method, and act with precision.</p>
        </>
      ),
      icon: "/images/piller-3.svg",
    },
  ];

  return (
    <section className="pt-20 pb-10 laptop:py-20 bg-[#474F50] relative">
      <Image
        src="/images/time-power.png"
        alt="Time power"
        className="absolute w-[90%] laptop:w-[70%] tablet:h-[220px] laptop:h-auto rounded-3xl object-cover top-[-6%] left-1/2 -translate-x-1/2 laptop:top-[-20%]"
        width={1120}
        height={468}
        sizes="(max-width: 1024px) 90vw, 70vw"
        quality={70}
      />

      <div className="container mx-auto px-6 pt-[4rem] tablet:pt-[8rem] laptop:pt-[16rem]">
        <h2 className="text-lg tablet:text-xl laptop:text-4xl font-heading text-center mb-10 tablet:mb-10 laptop:mb-16 text-brand-gold">
          Aethernum operates on three pillars:
        </h2>
        <div className="grid tablet:max-w-[80%] mx-auto laptop:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-gray rounded-3xl shadow-lg overflow-hidden border-2 border-transparent hover:border-brand-gold transition-all duration-300"
            >
              <div className="p-6 tablet:p-8 flex justify-between items-center gap-3 h-full">
                <div className="h-full flex flex-col tablet:max-w-[70%] laptop:max-w-[100%]">
                  <h3 className="text-base tablet:text-lg laptop:text-3xl font-bold mb-2 tablet:mb-0 laptop:mb-2 text-brand-gold">
                    {pillar.title}
                  </h3>
                  {pillar.subtitle && (
                    <h4 className="text-brand-gold laptop:text-lg tablet:text-sm font-semibold mb-4 tablet:mb-0 laptop:mb-4 text-body">
                      {pillar.subtitle}
                    </h4>
                  )}
                  <div className="text-white text-body tablet:text-sm">{pillar.description}</div>
                </div>
                <div>
                  <Image
                    src={pillar.icon}
                    alt={pillar.title}
                    className="shrink-0 min-w-12 tablet:min-w-16"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 text-white text-center text-body pt-10 tablet:pt-20 px-6">
        <p>Each module runs autonomously. Each week, value is collected.</p>
        <p> No faces. Just method.</p>

        <button
          className="group mx-auto mt-6 rounded-full bg-gradient-gold maxmobile:px-8 tablet:px-20 laptop:px-10 py-3 text-base font-bold text-brand-white hover:opacity-90 laptop:text-lg"
          onClick={() => {
            const faqSection = document.getElementById("faq-section");
            if (faqSection) {
              faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default ThreePillarsSection;
