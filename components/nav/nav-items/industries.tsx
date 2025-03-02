"use client"

import { IoIosArrowDown } from "react-icons/io"
import { PiSealCheck } from "react-icons/pi"
import { MdKeyboardArrowRight } from "react-icons/md"
import Link from "next/link"
import { useState } from "react"

export default function Industries() {
  const [isOpen ,setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

const Indusmenu = [
    {
        "title" : "SaaS",
        "link" : '#'
    },
    {
        "title" : "AI",
        "link" : '#'
    },
    {
        "title" : "Ecommerce",
        "link" : '#'
    },
    {
        "title" : "Heathcare",
        "link" : '#'
    },
    {
        "title" : "Supply Chain & Logistics",
        "link" : '#'
    },
    {
        "title" : "Fintech",
        "link" : '#'
    },
]

  return (
    <div className="group relative">
      <button className="flex cursor-pointer items-center justify-center gap-1 font-bold" onClick={toggleMenu}>
        Industries <IoIosArrowDown className="text-sm" />
      </button>

      <div className={`absolute top-15 left-1/2 -translate-x-1/2 z-10 w-[720px] -translate-y-2 transform rounded-md bg-white p-6 opacity-0 shadow-lg transition-opacity duration-300
    ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 invisible"} 
    group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible`}>
    <div className="grid grid-cols-3 gap-6">
            {Indusmenu.map((items,index) =>(
                <Link key={index} href={items.link} className="block">
                <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-300">
                  <div className="w-full">
                    <div className="flex font-bold items-center">
                      {items.title}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
      </div>
    </div>
  )
}
