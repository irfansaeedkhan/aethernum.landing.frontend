"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

const GetStarted: React.FC = () => {
  return (
    <section
      id="getstarted"
      className="relative my-[10%] min-h-dvh w-full sm:min-h-[80dvh]"
    >
      <div className="absolute left-[50%] top-0 z-0 flex h-full w-screen  translate-x-[-50%] flex-col items-center justify-center">
        <Image
          src="/assets/images/get-started-bg.png"
          width={670}
          height={417}
          priority
          alt="bg get started"
          className="mx-auto hidden w-[90%] object-contain sm:block"
        />
        <Image
          src="/assets/images/get-started-bg-mobile.png"
          width={320}
          height={611}
          priority
          alt="bg get started"
          className="mx-auto h-full w-[90%] object-contain sm:hidden"
        />
        <div className="content absolute left-[50%] top-[50%] z-50 flex size-full max-w-[75%] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center text-center text-white sm:max-w-[55ch]">
          <h2 className="h2">Get Started Today</h2>
          <h4 className="h4 py-8 pt-10">
            Unlock New Business Opportunities Ready to revolutionize your
            business operations?
          </h4>
          <div className="flex flex-col gap-3">
            <p>
              Explore Altaria and discover the perfect virtual office solution
              tailored to your needs.
            </p>
            <p>
              Sign up today to start experiencing the benefits of secure,
              innovative, and customized virtual workspaces. Join us and be part
              of the future of work.
            </p>
          </div>

          <Link href="/">
            <Button
              variant="secondary"
              className="mt-5 px-4 py-2 text-xs md:mt-10 md:px-10 md:py-4 md:text-xl"
            >
              Sign Up Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
