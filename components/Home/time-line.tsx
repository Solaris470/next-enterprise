'use client'

import { useState } from 'react';

export default function TimeLine() {
  const [activeButton, setActiveButton] = useState('management');
  const content = [
    {
      id: 1,
      text: "Deep dive with us into your goals and hiring needs.",
    },
    {
      id: 2,
      text: "We’ll work with you to design a customized solution for your business.",
    },
    {
      id: 3,
      text: "Once you're on board, we’ll source the best talent for you.",
    },
    {
      id: 4,
      text: "We’ll create a customized training program that aligns with your goals.",
    },
    {
      id: 5,
      text: "Sit back and enjoy the efficiencies ahead — it's grow time.",
    },
  ]

  const content2 = [
    {
      id: 1,
      text: "Deep dive with us into your goals and hiring needs.",
    },
    {
      id: 2,
      text: "Access a private portal with hand-picked talent to browse and shortlist candidates.",
    },
    {
      id: 3,
      text: "Start interviewing.",
    },
    {
      id: 4,
      text: "Refine your list until you have the right team.",
    },
    {
      id: 5,
      text: "With us beside you, welcome your new team aboard and prepare for scale!",
    },
  ]

  return (
    <>
      <div className="">
        <div className="py-5 flex flex-col gap-5">
        <h1 className="font-bold text-xl">Get set up in 5 easy steps</h1>
        <div className="btngroup flex items-center justify-between gap-3">
            <button className={`rounded-4xl ${activeButton === 'management' ? 'bg-white' : 'bg-[#ccccc6]'} text-sm py-2 px-6 w-full font-semibold cursor-pointer shadow-2xl`} onClick={() => setActiveButton('management')}>Management-as-a-Service</button>
            <button className={`rounded-4xl ${activeButton === 'talent' ? 'bg-white' : 'bg-[#ccccc6]'} text-sm py-2 px-6 w-full font-semibold cursor-pointer`} onClick={() => setActiveButton('talent')}>Talent-as-a-Service</button>
        </div>
        </div>
       
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {(activeButton === 'management' ? content : content2).map((item) => (
            <li key={item.id} className="flex ms-6 mb-10 gap-10">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                <p className="font-bold">{item.id}</p>
              </span>
              <p className="ps-3 mb-4 text-base font-semibold">{item.text}</p>
            </li>
          ))}
        </ol>
        <div className="">
        <button className="rounded-4xl bg-[#0c3a23] text-white py-3 px-6 w-full font-semibold cursor-pointer">View Details</button>
        </div>
      </div>
    </>
  )
}
