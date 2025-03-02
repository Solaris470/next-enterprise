"use client"

import { IoIosArrowDown } from "react-icons/io"
import Link from "next/link"
import { useState } from "react"

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const Aboutmenu = [
    {
      "title": "About us",
      "link": '#'
    },
    {
      "title": "Careers",
      "link": '#'
    },
  ]


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="group relative">
      <button className="flex cursor-pointer items-center justify-center gap-1 font-bold" onClick={toggleMenu}>
        About <IoIosArrowDown className="text-sm" />
      </button>

      <div className={`absolute top-15 left-[-50px] z-10 w-[250px] transform rounded-md bg-white p-6 shadow-lg transition-all duration-300 
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 invisible"} 
        group-hover:visible group-hover:translate-y-0 group-hover:opacity-100`}>
        <div>
          {Aboutmenu.map((items, index) => (
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
