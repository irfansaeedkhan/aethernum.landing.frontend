import Image from "next/image";

const TrustSection = () => {
  return (
    <section className="pt-14 pb-10 laptop:pt-32 laptop:pb-32 bg-gray relative">
      <div className="container mx-auto text-center w-full p-0 laptop:p-6">
        <h2 className="text-2xl laptop:text-4xl font-bold mb-10 text-brand-gold">Trust. Without the Noise.</h2>
        <div className="relative grid laptop:grid-cols-2 gap-12 w-full mx-auto aspect-[1438/288] py-10 px-6">
          <Image
            src="/images/trust.png"
            alt=""
            fill
            sizes="100vw"
            className="absolute inset-0 -z-0 object-cover object-right laptop:object-center"
            aria-hidden="true"
          />
          <div className="h-full flex flex-col justify-between items-center">
            <h3 className="text-lg laptop:text-4xl font-heading text-white tablet:mb-5 laptop:mb-0">
              Those inside don&apos;t speak.
              <br /> Those who understand, enter.
            </h3>
            <h3 className="text-lg laptop:text-4xl font-heading text-white">
              <span className="text-brand-gold">Aethernum</span> isn&apos;t a crowd.
              <br /> It&apos;s a method.
            </h3>
          </div>
          <div className="h-full flex flex-col justify-center gap-6 items-center">
            <p className="text-body text-white">
              It&apos;s time—converted into value. <br /> It&apos;s access that&apos;s invisible, exclusive, and
              powerful.
            </p>
            <p className="text-white text-body italic">“Don&apos;t work for time. Let time work for you.”</p>
          </div>
        </div>
      </div>
      <div className="hidden laptop:block absolute bottom-0 left-0 w-full h-[28.9px] bg-repeat-x bg-[url('/images/tile-pattern.png')] bg-contain bg-center"></div>
    </section>
  );
};

export default TrustSection;
