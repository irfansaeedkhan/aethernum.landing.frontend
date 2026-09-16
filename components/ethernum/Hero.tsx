import HeroContent from "@/components/ethernum/HeroContent";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 maxmobile:h-[44rem] tablet:min-h-[50rem] tablet:h-[100dvh]">
      {/* Decorative — low priority so cloud (LCP) wins the network */}
      <img
        src="/images/header-lcp.webp"
        alt=""
        aria-hidden="true"
        width={1536}
        height={861}
        decoding="async"
        fetchPriority="low"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <HeroContent />
    </section>
  );
};

export default Hero;
