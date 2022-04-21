import React from 'react';

export default function JoinCommunitySection() {
  return (
    <div className="mt-24 bg-banner">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:py-24 py-12">
          <div>
            <p className="text-center md:text-left md:text-5xl text-3xl text-cyan-500 font-black">Join the Community</p>
            <p className="mt-8 text-center md:text-left md:text-xl text-lg text-gray-100 font-semibold">
              MekaVerse Discord already has over 200,000 members! If you want to join the #MEKAGANG it’s here. Join us to get the news as soon as possible and follow our latest announcements.
            </p>
            <div className="flex md:justify-start justify-center">
              <button
                type="button"
                  className="
                  inline-flex items-center 
                  mt-8
                  md:px-6 px-3 md:py-4 py-2
                  border border-transparent 
                  md:text-xl text-lg font-medium 
                  rounded-md 
                  shadow-sm 
                  text-gray-200 bg-gradient-to-r from-cyan-500 to-blue-500
                  hover:from-gray-100 hover:to-gray-100 hover:text-gray-700
                "
              >
                Join us on Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}