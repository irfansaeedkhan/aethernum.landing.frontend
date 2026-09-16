"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[96%] tablet:w-[90%] laptop:w-[70%] mx-auto rounded-full shadow-lg shadow-brand-black/10 border border-brand-black/10 flex items-center justify-between  z-50 bg-[#21252933] backdrop-blur-md">
      <div className="container mx-auto px-4 laptop:px-6 py-2 flex items-center justify-between">
        <Image
          className="hidden laptop:block w-10 h-10 laptop:w-14 laptop:h-14 shrink-0"
          src="/images/logo.svg"
          alt="Aethernum Logo"
          width={56}
          height={56}
        />
        <Image
          className="block laptop:hidden shrink-0"
          src="/images/logo-full.png"
          alt="Aethernum Logo"
          width={136}
          height={30}
        />

        <Link
          href="https://aethernum-dashboard.vercel.app/auth/login"
          className="cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gradient-gold hover:opacity-90 text-brand-white font-semibold px-6">
            Private Area
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
