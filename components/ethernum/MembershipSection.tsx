import { cn } from "@/lib/utils";

import Image from "next/image";

const MembershipSection = () => {
  const benefits = [
    {
      icon: "/images/membership-1.png",
      width: 241,
      height: 184,
      title: "Early access",
      description: "Rare tools and hidden opportunities",
    },
    {
      icon: "/images/membership-2.png",
      width: 241,
      height: 184,
      title: "AI-powered insights",
      description: "On selected MemeCoins",
    },
    {
      icon: "/images/membership-3.png",
      width: 201,
      height: 184,
      title: "Expert network",
      description: "A discreet network that understands the value of time",
    },
    {
      icon: "/images/membership-4.png",
      width: 241,
      height: 184,
      title: "Trusted mindset",
      description: "Freedom from noisy, reactive markets",
    },
  ];

  return (
    <section className="relative tablet:overflow-hidden py-20 w-full bg-[#293132] tablet:aspect-[1438/1203] tablet:pb-[65rem] laptop:pb-[70rem]">
      <Image
        src="/images/not-for-everyone.png"
        alt=""
        fill
        sizes="100vw"
        quality={70}
        className="absolute inset-0 -z-0 object-cover object-center mix-blend-luminosity"
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 w-full h-[28.9px] bg-repeat-x bg-[url('/images/tile-pattern.png')] bg-contain bg-center" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mt-12 tablet:t-40 max-w-[30rem] laptop:max-w-[38rem] mx-auto text-center text-white">
            <h2 className="text-3xl tablet:text-4xl laptop:text-5xl font-bold mb-6  font-heading">
              Not for Everyone. <br />
              That&apos;s the Point.
            </h2>
            <div className="h-[3px] tablet:h-[5px] w-[189px] bg-[#FFAA21] mx-auto mt-6 mb-5 rounded-full"></div>
            <p className=" text-body">
              Aethernum is not open to the public. It&apos;s a private club—invitation only. Not to exclude. But to
              protect.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl tablet:text-3xl laptop:text-4xl font-bold text-center mb-10 tablet:mb-12 text-brand-gold font-heading">
            Being a member means:
          </h3>
          <div className="grid grid-cols-2 laptop:grid-cols-4 gap-4 laptop:gap-8 items-stretch tablet:w-[70%] laptop:w-full mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col justify-start laptop:justify-between h-full bg-[#D9D9D9]/10 border-[1px] border-white rounded-[30px] backdrop-blur-lg border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={benefit.icon}
                  width={benefit.width}
                  height={benefit.height}
                  alt={benefit.title}
                  className="w-[70%] h-[88px] tablet:h-[100px] laptop:h-[184px] mx-auto object-contain mt-2 laptop:mt-4"
                />
                <div className="p-4 laptop:p-6 text-center">
                  <h4
                    className={cn(
                      `text-base laptop:text-xl laptop:text-2xl font-heading font-semibold mb-3 text-brand-gold`
                    )}
                  >
                    {benefit.title}
                  </h4>
                  <div className="h-[3px] w-[79px] bg-[#FFAA21] mx-auto my-5 rounded-full"></div>
                  <p
                    className={cn(
                      `text-sm laptop:text-xl text-center mx-auto text-white`,
                      index === 0 && "max-w-[15ch]",
                      index === 1 && "max-w-[10ch]",
                      index === 2 && "max-w-[24ch]",
                      index === 3 && "max-w-[15ch]"
                    )}
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
