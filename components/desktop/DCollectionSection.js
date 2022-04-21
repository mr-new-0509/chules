import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { varFadeInRight } from '../../utils/animationVars';
import MotionDiv from '../common/MotionDiv';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 5000,
  cssEase: "linear",
  vertical: true,
  arrows: false,
  pauseOnHover: false
};

const silderData1 = [
  'whale1.png',
  'whale2.png',
  'whale3.png',
  'whale4.png',
  'whale5.png',
  'whale6.png',
  'whale7.png',
  'whale8.png'
];

const silderData2 = [
  'whale9.png',
  'whale10.png',
  'whale11.png',
  'whale12.png',
  'whale13.png',
  'whale14.png',
  'whale15.png',
  'whale16.png'
];

export default function DCollectionSection() {
  return (
    <div className="py-24" id="about">
      <div className="container mx-auto">
        <div
          className="
            grid items-center
            grid-cols-2
            lg:grid-cols-2 
            md:grid-cols-1
            gap-24 
            xl:gap-24
            lg:gap-18
            md:gap-12
            sm:gap-6
          "
        >
          <div className="flex flex-start">
            <Slider {...settings}>
              {
                silderData1.map(name => (
                  <div key={name} className="py-2">
                    <Image src={`/assets/images/${name}`} alt={name} width={300} height={300} />
                  </div>
                ))
              }
            </Slider>
            <Slider {...settings} rtl={true}>
              {
                silderData2.map(name => (
                  <div key={name} className="py-2">
                    <Image src={`/assets/images/${name}`} alt={name} width={300} height={300} />
                  </div>
                ))
              }
            </Slider>
          </div>
          <div>
            <MotionDiv variants={varFadeInRight}>
              <p className="uppercase text-gray-100 text-lg font-bold">
                About our project
              </p>
              <p className="mt-3 text-gray-100 text-5xl font-bold">
                What is Chuel?
              </p>
            </MotionDiv>

            <MotionDiv variants={varFadeInRight}>
              <p className="mt-10 text-gray-300 text-xl leading-10">
                Chuel is a collection of 8888 unique penguins, categorized by levels of rarity and generated in 4K resolution with hundreds of high-quality, detailed elements.
              </p>
            </MotionDiv>
            <MotionDiv variants={varFadeInRight}>
              <p className="mt-10 text-gray-300 text-xl leading-10">
                Stored as ERC-721 tokens, they will live on the Ethereum blockchain, as they make their way into the Metaverse with their rightful owners.
              </p>
            </MotionDiv>
            <MotionDiv variants={varFadeInRight}>
              <button
                type="button"
                className="
                  inline-flex items-center 
                  mt-16
                  px-6 py-4
                  border border-transparent 
                  text-xl font-medium 
                  rounded-md 
                  shadow-sm 
                  text-gray-200 bg-gradient-to-r from-cyan-500 to-blue-500
                  hover:from-gray-100 hover:to-gray-100 hover:text-gray-700
                "
              >
                View on Opensea
              </button>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}