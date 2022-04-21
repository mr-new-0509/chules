import React from 'react';
import { Icon } from "@iconify/react";
import MMapDot from '../common/MMapDot';
import MotionDiv from '../common/MotionDiv';
import { varFadeInUp, varFadeInDown } from '../../utils/animationVars';

const phases = [
  {
    id: 1,
    description: "Presale Takes Place (If any)",
    lists: [
      {
        id: 1,
        content:
          "7,777 MetaBabeClub are officially open to mint to the public",
      },
    ],
    mbGap: 32,
  },
  {
    id: 2,
    lists: [
      {
        id: 1,
        content:
          "All 7,777 MetaBabeClub are officially minted, secondary sale will take place on open sea<br /> Babe Club Officially Opens",
      },
      {
        id: 2,
        content: "Officially listed on OpenSea",
      },
      {
        id: 3,
        content: "Listing on Rarity Tools",
      },
      {
        id: 4,
        content:
          "Our first charitable donation to the Womans Breast Cancer Awareness Charity Fund",
      },
    ],
    mbGap: 16,
  },
  {
    id: 3,
    lists: [
      {
        id: 1,
        content:
          "Lets Play Babes Club Opens<br /> MetaBabeClub official Merch store will be open to all members of the babe club. You must hold a NFT to participate in the merch<br /> store.",
      },
      {
        id: 2,
        content:
          "Second round of charitable donations to the Womans Breast Cancer Awareness Charity Fund from X % of secondary sales",
      },
    ],
    mbGap: 16,
  },
  {
    id: 4,
    description: "Opening of Fashion Show in<br />MetaVerse",
    lists: [
      {
        id: 1,
        content:
          "MetaBabeClub is here to stay we are proud to announce that as part of the efforts to make it the hottest club on the<br /> blockchain, we will begin the grand construction of our one of a Metaverse Club",
      },
      {
        id: 2,
        content:
          "All current holders of MetaBabeClub NFT will receive a one of a kind airdrop at the launch of the Metaverse Babe Club.",
      },
      {
        id: 3,
        content:
          "By minting one of the original 7,777 MetaBabeClub you become an original founder of the project. All founders will get <br />free access to the VIP Events of the Metaverse. ",
      },
    ],
    mbGap: 8,
  },
];

export default function MRoadmapSection() {
  return (
    <div
      id="roadmap"
      className="pb-24"
    >
      <MotionDiv variants={varFadeInUp}>
        <p
          className="
            text-3xl text-white
            sm:text-5xl
            font-bodoni font-bold
            text-center
          "
        >
          Roadmap
        </p>
      </MotionDiv>

      {
        phases.map(phase => (
          <div key={phase.id}>
            <MMapDot additionalClassNames="my-16" />
            <div className="mx-12">
              <MotionDiv variants={varFadeInDown}>
                <p
                  className="
                  text-2xl text-white
                  sm:text-3xl
                  font-bold
                  text-center
                "
                >
                  Phase {phase.id}
                </p>

                {
                  phase.description && (
                    <p
                      className="
                      sm:mt-6
                      sm:text-2xl
                      text-xl text-white/30
                      font-bodoni font-bold
                      text-center
                    "
                      dangerouslySetInnerHTML={{ __html: phase.description }}
                    />
                  )
                }
              </MotionDiv>

              {
                phase.lists.map(list => (
                  <div key={list.id}>
                    <MotionDiv variants={varFadeInUp}>
                      <div className="mt-5 flex justify-center">
                        <Icon
                          icon="carbon:dot-mark"
                          className="text-xl text-primary text-cyan-500"
                        />
                      </div>
                    </MotionDiv>
                    <MotionDiv variants={varFadeInUp}>
                      <p
                        className="
                          mt-5
                          sm:text-xl
                          text-lg text-white
                          font-raleway font-normal
                          text-center
                          leading-[48px]
                        "
                        dangerouslySetInnerHTML={{ __html: list.content }}
                      />
                    </MotionDiv>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}