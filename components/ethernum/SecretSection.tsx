import Image from "next/image";

export const SecretSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full aspect-[360/641] tablet:aspect-[1438/1362] mt-[-20rem] tablet:mt-[-26rem] laptop:mt-[-19rem] maxmobile:h-[68rem] tablet:h-[68rem] laptop:h-auto laptop:min-h-[100dvh]">
        <picture>
          <source media="(min-width: 744px)" srcSet="/images/cloud-lcp.webp" type="image/webp" />
          <img
            src="/images/cloud-mobile-lcp.webp"
            alt=""
            aria-hidden="true"
            width={360}
            height={641}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-[10rem] tablet:top-[14rem] desktop:top-[20rem] flex flex-col items-center justify-center text-center mx-auto w-full maxmobile:h-[60rem] tablet:h-[60rem] laptop:min-h-[100dvh]">
          <div className="text-center flex flex-col items-center justify-center w-full">
            {/* Heading */}
            <h2 className=" px-6 text-2xl tablet:text-4xl desktop:text-5xl font-bold laptop:mb-6 text-brand-charcoal font-heading w-full laptop:max-w-[38rem]">
              They knew the secret.
              <br />
              They kept it to themselves.
            </h2>

            {/* Orange Line */}
            <div className="h-[3px] laptop:h-[5px] w-[189px] bg-[#FFAA21] mx-auto my-5 rounded-full"></div>

            {/* Paragraphs */}
            <div className="flex flex-col gap-4 laptop:gap-6 text-gray text-body laptop:max-w-[38rem]  px-6">
              <p>Long before AI became a buzzword, a few knew exactly where to place their capital.</p>
              <p>
                No noise. <br />
                <b>No spotlight.</b>
              </p>
              <p>
                And above all—no disclosure. <br /> Today, a small circle of founders has chosen to open that door.
              </p>
              <p>
                <b>Aethernum</b> is the result: <br /> an AI-driven ecosystem designed to convert time into value.{" "}
                <br /> Only for the ready. Invitation-only.
              </p>
            </div>

            {/* Subsection */}
            <div className="relative w-full mt-20 tablet:mt-10 laptop:mt-40 mx-auto text-center bg-white tablet:bg-transparent pb-8 laptop:pb-0 ">
              <h3 className="text-2xl tablet:text-4xl desktop:text-5xl font-bold mb-6 text-brand-charcoal font-heading max-w-[30rem] mx-auto  px-6">
                An Economy of Silence
              </h3>

              <div className="h-[3px] laptop:h-[5px] w-[189px] bg-[#FFAA21] mx-auto my-5 rounded-full"></div>

              <div className="max-w-[30rem] flex flex-col gap-6 text-gray text-body mx-auto  px-6">
                <p>
                  In a world obsessed with visibility and speed, <br /> Aethernum is the quiet alternative.
                </p>
                <p>
                  You won&apos;t find shouted promises here. <br /> You&apos;ll find structure, time, and distributed
                  intelligence.
                </p>

                <div className="flex flex-col gap-1 laptop:mt-4">
                  <h4 className="text-2xl font-heading text-black">Keywords:</h4>
                  <ul className="mx-auto flex flex-wrap justify-center gap-4 text-body text-gray">
                    <li>Time.</li>
                    <li>Discretion.</li>
                    <li>Patience.</li>
                    <li>Invisible Excellence.</li>
                  </ul>
                </div>
              </div>

              {/* Side Images */}
              <Image
                src="/images/left.png"
                alt=""
                aria-hidden="true"
                width={52}
                height={182}
                className=" block tablet:hidden absolute left-0 bottom-0"
              />
              <Image
                src="/images/right.png"
                alt=""
                aria-hidden="true"
                width={52}
                height={182}
                className="block tablet:hidden absolute right-0 bottom-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
