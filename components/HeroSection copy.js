import React from 'react';
import { Icon } from '@iconify/react';

const socialLinks = [
  { id: 0, icon: 'akar-icons:linkedin-fill', href: '#' },
  { id: 1, icon: 'akar-icons:twitter-fill', href: '#' },
  { id: 2, icon: 'akar-icons:discord-fill', href: '#' },
  { id: 3, icon: 'akar-icons:instagram-fill', href: '#' }
];

export default function HeroSection() {
  return (
    <div className="relative bg-hero">
      <div className="w-full h-[55vh] bg-gray-800 opacity-70"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center">
        <p
          className="
            uppercase text-center  text-gray-100
            lg:text-3xl lg:font-extrabold
            md:text-2xl md:font-extrabold
            sm:text-xl sm:font-extrabold
            text-sm font-normal
          "
        >
          WE ARE HAPPY YOU FOUND US
        </p>
        <p 
          className="
          text-cyan-400 font-black
            lg:text-8xl 
            md:text-6xl
            sm:text-5xl
            text-2xl
          "
        >
          Welcome to CHUEL
        </p>
        <p 
          className="
            mt-6 text-center text-white
            2xl:px-56 2xl:text-xl 2xl:font-bold
            xl:px-48 xl:text-xl xl:font-bold
            lg:px-36 lg:text-xl lg:font-bold
            md:px-12 md:text-xl md:font-semibold
            sm:px-12
            px-6 text-md font-normal
          "
        >
          Meta Penguin Island is an exciting, interactive NFT experience built around a passionate community. We encourage you to join our Discord for an experience that is sure to delight. Early supporters will be rewarded.
        </p>
        <div className="flex justify-center items-center gap-5 mt-16">
          {
            socialLinks.map((link) => (
              <a
                key={link.id}
                className="
                  rounded-full 
                  bg-gradient-to-r from-cyan-500 to-blue-500 
                  
                text-white
                hover:from-white hover:to-white
                  hover:text-cyan-600
                  xl:text-xl xl:p-3
                  lg:text-xl lg:p-3
                  md:text-xl md:p-3
                  sm:text-xl sm:p-3
                  text-sm p-2
                "
                target="_blank"
                rel="noreferrer"
                href={link.href}
              >
                <Icon icon={link.icon} />
              </a>
            ))
          }

        </div>
      </div>
    </div>
  );
}