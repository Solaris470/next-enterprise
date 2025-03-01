import Solution from "./nav-items/solution"
import About from "./nav-items/about"
import HowItWork from "./nav-items/how-it-work"
import Resource from "./nav-items/resource"
import Industries from "./nav-items/industries"

export default function Nav() {
  return (
    <>
      <nav className="flex items-center justify-between dark:border-gray-700 dark:bg-gray-800 p-4 max-w-screen-xl mx-auto">
        <div id="logo" className="">
          <img
        src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd45cce4719_Support%20Ninja%20%7C%20Full%20Logo.svg"
        className="h-8 w-auto"
          />
        </div>

        <div className="">
          <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0">
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
        <div id="get-start-btn" className="">
          <button className="rounded-4xl bg-[#0c3a23] text-white py-3 px-6">Get Started</button>
        </div>
      </nav>
    </>
  )
}
