"use client"

import { useState } from "react"
import Solution from "./nav-items/solution"
import About from "./nav-items/about"
import HowItWork from "./nav-items/how-it-work"
import Resource from "./nav-items/resource"
import Industries from "./nav-items/industries"
import { MdKeyboardArrowRight } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa"

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
<>
<nav className={`${isOpen ? "bg-white" : "bg-[#f7e1d2]"}`}>
      <div className=" mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <div id="logo">
          <img
            src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd45cce4719_Support%20Ninja%20%7C%20Full%20Logo.svg"
            className="h-10 w-auto"
            alt="Support Ninja Logo"
          />
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <IoMdClose />
            ): <RxHamburgerMenu />} 
          </button>
        </div>

        {/* Navbar Items (Desktop) */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <ul className="flex space-x-6 font-medium">
            <li>
              <Solution />
            </li>
            <li>
              <Industries />
            </li>
            <li>
              <HowItWork />
            </li>
            <li>
              <About />
            </li>
            <li>
              <Resource />
            </li>
          </ul>
        </div>

        {/* Get Started Button */}
        <div className="hidden md:block">
          <button className="rounded-4xl bg-[#0c3a23] px-6 py-3 text-white">Get Started</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
        <ul className="flex flex-col space-y-4 bg-white p-10">
          <li>
            <h1 className="text-xl font-bold">Solutions</h1>
            <div className="flex flex-col justify-between gap-2 font-bold">
              <div className="mt-2 text-sm flex justify-between">
                Customer Experience <FaArrowRight className="text-sm"/>
              </div>
              <div className="mt-2 text-sm flex justify-between">
                Customer Conversion <FaArrowRight className="text-sm"/>
              </div>
              <div className="mt-2 text-sm flex justify-between">
                Customer Onboarding <FaArrowRight className="text-sm"/>
              </div>
              <div className="mt-2 text-sm flex justify-between">
                Technical Customer Support <FaArrowRight className="text-sm"/>
              </div>
              <div className="mt-2 text-sm flex justify-between">
                Customer Renewals <FaArrowRight className="text-sm"/>
              </div>
              <div className="mt-2 text-sm flex justify-between">
                Content Moderation <FaArrowRight className="text-sm"/>
              </div>
              <div className="mt-2 text-sm flex justify-between">
                Data Processing <FaArrowRight className="text-sm"/>
              </div>
              <div className="mt-2 text-sm flex justify-between">
                Finance & Accounting <FaArrowRight className="text-sm"/>
              </div>
            </div>
          </li>
          <li className="mt-2">
            <h1 className="text-xl font-bold">Industries</h1>
            <div className="flex flex-col justify-between gap-2 font-bold">
              <div className="mt-2 text-sm flex justify-between">
               Supply Chain & Logistics <FaArrowRight className="text-sm"/>
              </div>
              <div className="mt-2 text-sm flex justify-between">
                Fintech <FaArrowRight className="text-sm"/>
              </div>
              <div className="mt-2 text-sm flex justify-between">
                Healtcare <FaArrowRight className="text-sm"/>
              </div>
              <div className="mt-2 text-sm flex justify-between">
                Ecommerce <FaArrowRight className="text-sm"/>
              </div>
              <div className="mt-2 text-sm flex justify-between">
                SaaS <FaArrowRight className="text-sm"/>
              </div>
              <div className="mt-2 text-sm flex justify-between">
                AI <FaArrowRight className="text-sm"/>
              </div>
            </div>
          </li>
          <li className="mt-3 ">
          <h1 className="text-xl font-bold flex items-center gap-3">How It Work <FaArrowRight className="text-gray-300 text-sm"/></h1>
          </li>
          <li className="my-3 ">
          <h1 className="text-xl font-bold flex justify-between">About </h1>
          <div className="flex flex-col justify-between gap-2 font-bold">
              <div className="mt-2 text-sm flex justify-between">
               Abount us <FaArrowRight className="text-sm"/>
              </div>
              <div className="mt-2 text-sm flex justify-between">
                Careers <FaArrowRight className="text-sm"/>
              </div>
            </div>
          </li>
          <li className="mt-3">
          <h1 className="text-xl font-bold flex items-center gap-3">Resource <FaArrowRight className="text-gray-300 text-sm"/></h1>
          </li>
          <li>
            <button className="flex justify-between items-center w-full md rounded-4xl bg-[#EE4B4A] px-3 py-2 sm:px-6 sm:py-3 text-white text-xl">Get Started <div className="bg-white text-[#EE4B4A] w-auto px-3 py-2 rounded-full">{'->'}</div></button>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}
