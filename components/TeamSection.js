import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { varFadeInUp, varFadeInDown } from '../utils/animationVars';
import whale1Pic from '../public/assets/images/whale1.png';
import whale2Pic from '../public/assets/images/whale2.png';
import whale3Pic from '../public/assets/images/whale3.png';
import whale4Pic from '../public/assets/images/whale4.png';
import MotionDiv from './common/MotionDiv';

const people = [
  { id: 0, position: 'artist', name: 'John Doe', avatar: whale1Pic, linkedin: '#', facebook: '#', twitter: '#' },
  { id: 1, position: 'artist', name: 'John Doe', avatar: whale2Pic, linkedin: '#', facebook: '#', twitter: '#' },
  { id: 2, position: 'artist', name: 'John Doe', avatar: whale3Pic, linkedin: '#', facebook: '#', twitter: '#' },
  { id: 3, position: 'artist', name: 'John Doe', avatar: whale4Pic, linkedin: '#', facebook: '#', twitter: '#' },
  { id: 4, position: 'artist', name: 'John Doe', avatar: whale4Pic, linkedin: '#', facebook: '#', twitter: '#' },
];

export default function TeamSection() {
  return (
    <div className="container mx-auto pb-24 sm:pt-24 pt-0" id="team">
      <MotionDiv variants={varFadeInUp}>
        <p
          className="
            text-3xl text-white
            sm:text-5xl
            font-bodoni font-bold
            text-center
          "
        >
          Our Team
        </p>
      </MotionDiv>
      <div
        className="
          sm:mt-24 mt-12 grid grid-cols-1 
          sm:grid-cols-2 sm:mx-0
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-4 
          2xl:grid-cols-5 
          gap-12 
          mx-16
        "
      >
        {
          people.map(person => (
            <div className="bg-gray-800 rounded-xl" key={person.id}>
              <MotionDiv variants={varFadeInDown}>
                <Image src={person.avatar} alt={person.name} width={800} height={800} />
                <div className="pt-4 pb-8 px-2">
                  <p className="text-center text-lg text-white font-bold">Digital artist</p>
                  <p className="text-center text-2xl text-cyan-500 font-bold">John Doe</p>
                  <div className="flex justify-center items-center gap-3 mt-5">
                    <a
                      className="
                        rounded-full 
                        bg-gradient-to-r from-cyan-500 to-blue-500 
                        p-2
                        text-xl text-white
                      hover:from-white hover:to-white
                      hover:text-cyan-600
                      "
                      target="_blank"
                      rel="noreferrer"
                      href={person.linkedin}
                    >
                      <Icon icon="akar-icons:linkedin-fill" />
                    </a>
                    <a
                      className="
                        rounded-full 
                        bg-gradient-to-r from-cyan-500 to-blue-500 
                        p-2
                        text-xl text-white
                      hover:from-white hover:to-white
                      hover:text-cyan-600
                      "
                      target="_blank"
                      rel="noreferrer"
                      href={person.facebook}
                    >
                      <Icon icon="akar-icons:facebook-fill" />
                    </a>
                    <a
                      className="
                        rounded-full 
                        bg-gradient-to-r from-cyan-500 to-blue-500 
                        p-2
                        text-xl text-white
                      hover:from-white hover:to-white
                      hover:text-cyan-600
                      "
                      target="_blank"
                      rel="noreferrer"
                      href={person.twitter}
                    >
                      <Icon icon="akar-icons:twitter-fill" />
                    </a>
                  </div>
                </div>
              </MotionDiv>
            </div>
          ))
        }
      </div>
    </div>
  );
}