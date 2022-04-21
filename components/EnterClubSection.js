import React from 'react';
import Image from 'next/image';
import clubPic from '../public/assets/images/club.png';
import MotionDiv from './common/MotionDiv';
import { varFadeInDown, varFadeInUp } from '../utils/animationVars';

export default function EnterClubSection() {
  return (
    <div className="container mx-auto" id="club">
      <div className="relative w-full">
        <Image src={clubPic} alt="club" width={2000} height={800} objectFit="conver" />
        <div
          className="
            md:absolute 
            z-10 bottom-0 right-0 
            w-full mt-10
            md:w-1/3 md:h-56 md:mt-0
          bg-gray-900
          "
        >
          <div className="flex flex-col justify-center h-full mx-8 md:pb-0 pb-8">
            <MotionDiv variants={varFadeInUp}>
              <p className="text-center text-4xl text-gray-100 font-black">
                <span className="uppercase text-cyan-500">Chuel</span> club
              </p>
            </MotionDiv>
            <div className="flex justify-center mt-8">
              <MotionDiv variants={varFadeInDown}>
                <button
                  type="button"
                  className="
                  inline-flex items-center 
                  px-4 md:py-2 py-1
                  border border-transparent 
                  md:text-lg text-md font-medium 
                  rounded-md 
                  shadow-sm 
                  text-gray-200 bg-gradient-to-r from-cyan-500 to-blue-500
                  hover:from-gray-100 hover:to-gray-100 hover:text-gray-700
                "
                >
                  Enter
                </button>
              </MotionDiv>
            </div>
          </div>
        </div>
      </div>
      <MotionDiv variants={varFadeInUp}>
        <p className="text-white text-xl mt-5 md:px-32 px-12">
          A limited NFT collection where the token itself doubles as your membership to a swamp club for apes. The club is open! Ape in with us.
        </p>
      </MotionDiv>
    </div>
  );
}