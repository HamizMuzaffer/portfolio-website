"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { RiTeamFill, RiTodoFill, RiArrowDownSLine } from "react-icons/ri";

import { DevImage } from "./DevImage";
import { Badge } from "./Badge";
import { Social } from "./Social";
import TypingEffect from "./TyingEffect";

export const Hero = () => {
  const handleScroll = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="py-12 xl:py-12 min-h-screen xl:pt-8 w-full bg-white dark:bg-[#0b0908] bg-no-repeat bg-bottom bg-cover dark:bg-none xl:mb-12">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Full Stack Developer
            </div>
            <TypingEffect />
            <p className="subtitle max-w-[600px] mx-auto xl:mx-0">
              I’m a Full Stack Developer specializing in React, Next.js,
              Node.js, Express, MongoDB, PostgreSQL, Material-UI, and Tailwind
              CSS. Currently, I&apos;m working as a Full Stack Developer at
              HexsolTech, where I build scalable and user-centric web
              applications. I&apos;m passionate about developing efficient,
              maintainable solutions and continuously enhancing my expertise in
              modern web technologies and cloud-based development.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 justify-center xl:justify-start">
              <Link href="/contacts">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Link
                href="/resume/Hamiz Muzaffer _ Full Stack Developer .docx.pdf"
                target="blank"
              >
                <Button className="gap-x-2 px-7">
                  Resume
                  <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* Socials */}
            <Social
              containerStyles="flex gap-x-3 mx-auto xl:mx-0 justify-center xl:justify-start mb-44"
              iconsStyles="text-foreground text-[22px] hover:bg-color-slate transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
              icon={<RiTodoFill />}
              endCountNum={15}
              containerStyles="absolute bg-secondary top-[0%] -left-[12rem]"
              badgeText={"Projects"}
              endCountText={"+"}
            />
            <Badge
              icon={<RiTeamFill />}
              endCountNum={189}
              containerStyles="absolute bg-secondary top-[0%] -left-[32rem]"
              badgeText={"Commits"}
              endCountText={"+"}
            />
            <div className="dark:bg-hero_shape2_light bg-hero_shape2_dark w-[500px] h-[550px] bg-no-repeat absolute -top-1 -right-2">
              <DevImage containerStyles="bg-here-shape w-[500px] h-[600px] -left-6 top-2 bg-no-repeat relative bg-bottom" />
            </div>
          </div>
        </div>

        <div
          className="hidden md:flex absolute left-2/4 xl:bottom-12 animate-bounce"
          onClick={handleScroll}
        >
          <button onClick={handleScroll} aria-label="Scroll to About">
            <RiArrowDownSLine className="text-3xl text-primary cursor-pointer" />
          </button>
        </div>
      </div>
    </section>
  );
};
