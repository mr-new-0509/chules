import React from 'react';
import Image from 'next/image';
import heroPic from '../../public/assets/images/roadmap_hero.png';

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
          "Lets Play Babes Club Opens<br /> MetaBabeClub official Merch store will be open to all members of the babe club. <br />You must hold a NFT to participate in the merch store.",
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

export default function DRoadmapSection() {
  return (
    <div className="relative" id="roadmap">
      <div className="container mx-auto py-24">
        <p className="text-center text-5xl text-gray-100 font-bold">Roadmap</p>
        <ol className="relative border-l border-white ml-56 mt-28">
          {
            phases.map(phase => (
              <li className={`relative mb-${phase.mbGap}`} key={phase.id}>
                <div className="absolute -left-56 -top-6">
                  <p
                    className="
                      xl:text-3xl
                      lg:text-2xl
                      md:text-xl
                      text-white
                      font-bodoni font-bold
                    "
                  >
                    Phase {phase.id}
                  </p>
                  {
                    phase.description && (
                      <p
                        className="text-base text-white/30 font-bodoni"
                        dangerouslySetInnerHTML={{ __html: phase.description }}
                      />
                    )
                  }
                </div>
                <span
                  className="
                    flex
                    absolute
                    -left-1
                    justify-center
                    items-center
                    w-2
                    h-2
                    bg-black
                    rounded-full
                    ring-4 ring-white
                  "
                >
                </span>
                <div className="justify-between items-center px-4 sm:flex mb-32">
                  <ul className="relative roadmap-list list-disc -mt-2 ml-12 z-20">
                    {
                      phase.lists.map(list => (
                        <li key={list.id}>
                          <span
                            className="text-xl text-white font-raleway font-normal"
                            dangerouslySetInnerHTML={{ __html: phase.description }}
                          />
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </li>
            ))
          }
        </ol>
      </div>
      <div className="absolute top-[16%] right-[10%] w-[42%] h-3/5">
        <div className="relative">
          <Image
            src={heroPic}
            alt="gumbubble_babe"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-gray-900 h-24"></div>
        </div>
      </div>
    </div>
  );
}