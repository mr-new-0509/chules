import React, { useState } from 'react';
import { Icon } from '@iconify/react';

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

export default function DFaqSection() {
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
      <p className="uppercase text-center text-5xl text-gray-100 font-bold">Faq</p>
      <div className="mt-12 flex justify-between space-x-12">
        <div className="flex flex-col gap-y-2 w-1/2">
          {
            faqs.map(faq => (
              <div key={faq.id}>
                {
                  faq.id % 2 === 1 && (
                    <div>
                      {
                        openedFaqs.indexOf(faq.id) < 0 ? (
                          <div className="w-full border-2 border-solid border-white">
                            <div className="flex justify-between items-center">
                              <p
                                className="
                                  ml-6
                                  xl:text-[15px]
                                  lg:text-[13px]
                                  md:text-[13px]
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
                                    xl:text-[15px]
                                    lg:text-[13px]
                                    md:text-[13px]
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
                                  text-[13px] text-white
                                  font-raleway font-normal
                                  leading-6
                                "
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                              />
                            </div>
                          </div>
                        )
                      }
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>

        <div className="flex flex-col w-1/2">
          {
            faqs.map(faq => (
              <div key={faq.id} className={faq.id !== 1 ? 'mb-2' : ''}>
                {
                  faq.id % 2 !== 1 && (
                    <div>
                      {
                        openedFaqs.indexOf(faq.id) < 0 ? (
                          <div className="w-full border-2 border-solid border-white">
                            <div className="flex justify-between items-center">
                              <p
                                className="
                                  ml-6
                                  xl:text-[15px]
                                  lg:text-[13px]
                                  md:text-[13px]
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
                                    xl:text-[15px]
                                    lg:text-[13px]
                                    md:text-[13px]
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
                                  text-[13px] text-white
                                  font-raleway font-normal
                                  leading-6
                                "
                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                              />
                            </div>
                          </div>
                        )
                      }
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