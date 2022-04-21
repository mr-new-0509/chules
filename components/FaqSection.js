import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import MotionDiv from './common/MotionDiv';
import { varFadeInDown, varFadeInUp } from '../utils/animationVars';

const faqs = [
  {
    id: 1,
    question: "How our service works, what should a site user do?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    question: "How our service works, what should a site user do?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    question: "How our service works, what should a site user do?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    question: "How our service works, what should a site user do?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    question: "How our service works, what should a site user do?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    question: "How our service works, what should a site user do?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function FaqSection() {
  const [openedFaqs, setOpenedFaqs] = useState([]);

  const openFaq = (id) => {
    setOpenedFaqs([...openedFaqs, id]);
  };

  const closeFaq = (id) => {
    const _openedFaqs = [...openedFaqs];
    _openedFaqs.splice(openedFaqs.indexOf(id), 1);
    setOpenedFaqs(_openedFaqs);
  };

  return (
    <div className="container mx-auto pb-24" id="faq">
      <MotionDiv variants={varFadeInUp}>
        <p
          className="
            text-3xl text-white
            sm:text-5xl
            font-bodoni font-bold
            text-center
          "
        >
          FAQ
        </p>
      </MotionDiv>
      <div className="mt-12 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 justify-between gap-x-12 mx-12 sm:mx-0">
        <div className="flex flex-col gap-y-4">
          {
            faqs.map(faq => (
              <div key={faq.id}>
                {
                  faq.id % 2 === 1 && (
                    <div>
                      <MotionDiv variants={varFadeInDown}>
                        {
                          openedFaqs.indexOf(faq.id) < 0 ? (
                            <div className="w-full border-2 border-solid border-white">
                              <div className="flex justify-between items-center">
                                <p
                                  className="
                                    ml-6
                                    xl:text-[3xl]
                                    lg:text-[2xl]
                                    md:text-[xl]
                                    text-white
                                    font-raleway font-normal
                                  "
                                >
                                  {faq.question}
                                </p>
                                <button className="py-3 w-12 bg-white" onClick={() => openFaq(faq.id)}>
                                  <div className="flex justify-center">
                                    <Icon icon="akar-icons:plus" className="text-2xl text-black" />
                                  </div>
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div className="w-full border-2 border-solid bg-white">
                                <div className="flex justify-between items-center">
                                  <p
                                    className="
                                      ml-6
                                      xl:text-[3xl]
                                      lg:text-[2xl]
                                      md:text-[xl]
                                      text-black
                                      font-raleway font-normal
                                    "
                                  >
                                    {faq.question}
                                  </p>
                                  <button
                                    className="
                                      my-1
                                      w-12
                                      bg-white
                                      border-l-[1px] border-solid border-black
                                    "
                                    onClick={() => closeFaq(faq.id)}
                                  >
                                    <div className="flex justify-center py-2">
                                      <Icon
                                        icon="akar-icons:minus"
                                        className="text-2xl text-black"
                                      />
                                    </div>
                                  </button>
                                </div>
                              </div>

                              <div
                                className="
                                  mt-2
                                  w-full
                                  border-2 border-solid border-white
                                  py-6
                                  pl-6
                                  pr-12
                                "
                              >
                                <p
                                  className="
                                    text-[xl] text-white
                                    font-raleway font-normal
                                    leading-6
                                  "
                                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                              </div>
                            </div>
                          )
                        }
                      </MotionDiv>
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>

        <div className="flex flex-col sm:mt-0 mt-4">
          {
            faqs.map(faq => (
              <div key={faq.id} className={faq.id !== 1 ? 'mb-4' : ''}>
                {
                  faq.id % 2 !== 1 && (
                    <div>
                      <MotionDiv variants={varFadeInUp}>
                        {
                          openedFaqs.indexOf(faq.id) < 0 ? (
                            <div className="w-full border-2 border-solid border-white">
                              <div className="flex justify-between items-center">
                                <p
                                  className="
                                    ml-6
                                    xl:text-[3xl]
                                    lg:text-[3xl]
                                    md:text-[xl]
                                    text-white
                                    font-raleway font-normal
                                  "
                                >{faq.question}</p>
                                <button className="py-3 w-12 bg-white" onClick={() => openFaq(faq.id)}>
                                  <div className="flex justify-center">
                                    <Icon icon="akar-icons:plus" className="text-2xl text-black" />
                                  </div>
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div className="w-full border-2 border-solid bg-white">
                                <div className="flex justify-between items-center">
                                  <p
                                    className="
                                      ml-6
                                      xl:text-[3xl]
                                      lg:text-[3xl]
                                      md:text-[xl]
                                      text-black
                                      font-raleway font-normal
                                    "
                                  >{faq.question}</p>
                                  <button
                                    className="
                                      my-1
                                      w-12
                                      bg-white
                                      border-l-[1px] border-solid border-black
                                    "
                                    onClick={() => closeFaq(faq.id)}
                                  >
                                    <div className="flex justify-center py-2">
                                      <Icon
                                        icon="akar-icons:minus"
                                        className="text-2xl text-black"
                                      />
                                    </div>
                                  </button>
                                </div>
                              </div>

                              <div
                                className="
                                  mt-2
                                  w-full
                                  border-2 border-solid border-white
                                  py-6
                                  pl-6
                                  pr-12
                                "
                              >
                                <p
                                  className="
                                    text-[xl] text-white
                                    font-raleway font-normal
                                    leading-6
                                  "
                                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                                />
                              </div>
                            </div>
                          )
                        }
                      </MotionDiv>
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}