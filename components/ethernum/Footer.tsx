// components/Footer.tsx

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#474F50] text-white pt-16">
      <div className="max-w-7xl mx-auto text-xs laptop:text-base">
        <div className="flex flex-col items-center text-center mb-8 laptop:mb-12 px-6">
          <Image
            src="/images/logo-full.png"
            className="max-w-[150px] w-full tablet:max-w-[200px] laptop:max-w-[300px]"
            alt="Aethernum"
            width={528}
            height={113}
          />
          <p className="text-base max-w-4xl leading-relaxed text-center text-white mt-14 mb-10">
            Aethernum is a fully decentralized, Ethereum-based ecosystem designed to empower users through secure
            staking and transparent rewards. <br className="block laptop:hidden" /> With a trustless smart contract
            system, Aethernum enables seamless staking, high-yield APY, and a sustainable financial model backed by
            blockchain technology.
          </p>
        </div>

        {/* Grid Links */}
        <div className="grid grid-cols-2 laptop:grid-cols-4 gap-10 text-gray-300 text-base  px-6">
          <div className="hidden">
            <h4 className="text-[#ffaa21] font-semibold mb-2">Aethernum Token</h4>
            <div className="h-[3px] w-[51px] bg-[#FFAA21] mb-5 rounded-full"></div>
            <div className="space-y-2">
              <p>Token Sale</p>
              <p>White Paper</p>
              <p>FAQ</p>
              <p>Staking</p>
            </div>
          </div>

          <div className="hidden">
            <h4 className="text-[#ffaa21] font-semibold mb-2">Legal</h4>
            <div className="h-[3px] w-[51px] bg-[#FFAA21] mb-5 rounded-full"></div>
            <div className="space-y-2">
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
              <p>Token Sale Terms & Conditions</p>
              <p>Risk Disclosures</p>
            </div>
          </div>

          <div>
            <h4 className="text-[#ffbd59] font-semibold mb-2">Contact Info</h4>
            <div className="h-[3px] w-[51px] bg-[#FFAA21] mb-5 rounded-full"></div>
            <a href="mailto:blackbox@aetherum.club" className="mt-2 cursor-pointer">
              blackbox@aethernum.club
            </a>
          </div>

          <div className="hidden">
            <h4 className="text-[#ffaa21] font-semibold mb-2">Follow Us</h4>
          </div>
        </div>
      </div>
      <div className="bg-gray w-full mt-12 py-6 px-6 text-center text-sm text-white">
        <p>
          Copyright © 2025 Aethernum. All Rights Reserved &nbsp;|&nbsp; Before entering, make sure to read our{" "}
          <Link href="/terms" className="underline font-bold">
            Terms & Conditions
          </Link>{" "}
          — once accepted, there&apos;s no going back.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
