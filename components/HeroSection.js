import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import heroesPic from '../public/assets/images/heroes.png';

const variantsTitle = {
  hidden: {
    y: -30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};

const variantsButton = {
  hidden: {
    y: 30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    },
  }
};

export default function HeroSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className="md:relative container mx-auto my-14">
      <div className="z-0">
        <Image src={heroesPic} alt="heroes" />
      </div>
      <div
        className="
          md:absolute 
          z-10 bottom-0 left-0 
          w-full mt-10
          md:w-1/3 md:h-56 md:mt-0
        bg-gray-900
        "
      >
        <div className="flex flex-col justify-center h-full mx-8 md:pb-0 pb-8 border-solid border-b-[1px] border-gray-100">
          <motion.div ref={ref} initial="hidden" animate={controls} variants={variantsTitle}>
            <p className="text-center text-4xl text-gray-100 font-black">
              Welcome to the <span className="uppercase text-cyan-500">Chuel</span>
            </p>
          </motion.div>
          <div className="flex justify-center mt-8">
            <motion.div ref={ref} initial="hidden" animate={controls} variants={variantsButton}>
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
                Connect wallet
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}