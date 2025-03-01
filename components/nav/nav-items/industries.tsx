"use client"

import { IoIosArrowDown } from "react-icons/io"
import { PiSealCheck } from "react-icons/pi"
import { MdKeyboardArrowRight } from "react-icons/md"
import Link from "next/link"

export default function Industries() {

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
      <button className="flex cursor-pointer items-center justify-center gap-1 font-bold">
        Industries <IoIosArrowDown className="text-sm" />
      </button>

      <div className="invisible absolute top-15 left-[-200px] z-10 w-[720px] -translate-y-2 transform rounded-md bg-white p-6 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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
