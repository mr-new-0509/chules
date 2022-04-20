import React from 'react';
import { Icon } from '@iconify/react';

const socialLinks = [
  { id: 0, icon: 'akar-icons:linkedin-fill', href: '#' },
  { id: 1, icon: 'akar-icons:twitter-fill', href: '#' },
  { id: 2, icon: 'akar-icons:discord-fill', href: '#' },
  { id: 3, icon: 'akar-icons:instagram-fill', href: '#' }
];

export default function DHeroSection() {
  return (
    <div className="relative bg-hero">
      <div className="w-full h-[55vh] bg-gray-800 opacity-70"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center">
        <p className="uppercase text-center text-3xl font-extrabold text-gray-100">
          WE'RE HAPPY YOU FOUND US
        </p>
        <p className="text-8xl text-cyan-400 font-black">Welcome to CHUEL</p>
        <p className="mt-6 px-72 text-center text-xl text-white font-bold">
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
                  p-3
                  text-xl text-white
                hover:from-white hover:to-white
                  hover:text-cyan-600
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