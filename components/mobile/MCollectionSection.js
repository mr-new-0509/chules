import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MotionDiv from '../common/MotionDiv';
import { varFadeInDown, varFadeInUp } from '../../utils/animationVars';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  arrows: false,
  vertical: false,
  pauseOnHover: false
};

const silderData = [
  'whale1.png',
  'whale2.png',
  'whale3.png',
  'whale4.png',
  'whale5.png',
  'whale6.png',
  'whale7.png',
  'whale8.png',
  'whale9.png',
  'whale10.png',
  'whale11.png',
  'whale12.png',
  'whale13.png',
  'whale14.png',
  'whale15.png',
  'whale16.png'
];

export default function MCollectionSection() {
  return (
    <div className="py-24">
      <div className="mx-6">
        <MotionDiv variants={varFadeInDown}>
          <p className="uppercase text-center text-gray-100 text-md">
            About our project
          </p>
        </MotionDiv>
        <MotionDiv variants={varFadeInDown}>
          <p className="mt-3 text-center text-gray-100 text-3xl sm:text-5xl font-bold">
            What is Chuel?
          </p>
        </MotionDiv>
        <MotionDiv variants={varFadeInDown}>
          <p className="mt-5 text-center text-gray-300 text-lg sm:text-2xl">
            Chuel is a collection of 8888 unique penguins, categorized by levels of rarity and generated in 4K resolution with hundreds of high-quality, detailed elements.
          </p>
        </MotionDiv>
        <MotionDiv variants={varFadeInDown}>
          <p className="mt-5 text-center text-gray-300 text-lg sm:text-2xl">
            Stored as ERC-721 tokens, they will live on the Ethereum blockchain, as they make their way into the Metaverse with their rightful owners.
          </p>
        </MotionDiv>
        <div className="mt-12">
          <Slider {...settings}>
            {
              silderData.map(nameItem => (
                <div key={nameItem} className="px-2">
                  <Image src={`/assets/images/${nameItem}`} alt={nameItem} width={200} height={200} />
                </div>
              ))
            }
          </Slider>
        </div>
        <div className="flex justify-center">
          <MotionDiv variants={varFadeInDown}>
            <button
              type="button"
              className="
                inline-flex items-center
                mt-10
                px-3 py-2
                border border-transparent 
                text-md sm:text-xl font-medium 
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
  );
}