"use client"

import { IoIosArrowDown } from "react-icons/io"
import { PiSealCheck } from "react-icons/pi"
import { MdKeyboardArrowRight } from "react-icons/md"
import Link from "next/link"

export default function Solution() {
  return (
    <div className="group relative">
      <button className="flex cursor-pointer items-center justify-center gap-1 font-bold">
        Solutions <IoIosArrowDown className="text-sm" />
      </button>

      <div className="invisible absolute top-15 left-[-40px] z-10 w-[720px] -translate-y-2 transform rounded-md bg-white p-6 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="grid grid-cols-2 gap-6">
          {/* Customer Experience Section */}
          <div className="space-y-4 ">
            <Link href={"#"} className="block">
              <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-300">
                <div className="text-3xl">
                  <PiSealCheck />
                </div>
                <div className="w-full">
                  <div className="flex font-bold items-center">
                    Customer Experience <MdKeyboardArrowRight className="ml-1" />
                  </div>
                </div>
              </div>
            </Link>

            <div className="space-y-0 pl-10">
              <div>
                <Link
                  href={"#"}
                  className="flex items-center p-2 text-gray-600 hover:bg-gray-300 hover:text-gray-900 rounded-lg"
                >
                  Customer Conversion <MdKeyboardArrowRight className="ml-auto" />
                </Link>
              </div>
              <div>
                <Link
                  href={"#"}
                  className="flex items-center p-2 text-gray-600 hover:bg-gray-300 hover:text-gray-900 rounded-lg"
                >
                  Customer Onboarding <MdKeyboardArrowRight className="ml-auto" />
                </Link>
              </div>
              <div>
                <Link
                  href={"#"}
                  className="flex items-center p-2 text-gray-600 hover:bg-gray-300 hover:text-gray-900 rounded-lg"
                >
                  Customer Support <MdKeyboardArrowRight className="ml-auto" />
                </Link>
              </div>
              <div>
                <Link
                  href={"#"}
                  className="flex items-center p-2 text-gray-600 hover:bg-gray-300 hover:text-gray-900 rounded-lg"
                >
                  Technical Customer Support <MdKeyboardArrowRight className="ml-auto" />
                </Link>
              </div>
              <div>
                <Link
                  href={"#"}
                  className="flex items-center p-2 text-gray-600 hover:bg-gray-300 hover:text-gray-900 rounded-lg"
                >
                  Customer Renewals <MdKeyboardArrowRight className="ml-auto" />
                </Link>
              </div>
            </div>
          </div>

          {/* Finance & Accounting Section */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="rounded-md p-1">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 8H17M7 12H17M7 16H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-medium">Finance & Accounting ›</h3>
              </div>
            </div>

            {/* Content Moderation */}
            <div className="flex items-start gap-3">
              <div className="rounded-md p-1">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 3L21 7M21 7L17 11M21 7H7M7 21L3 17M3 17L7 13M3 17H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-medium">Content Moderation ›</h3>
              </div>
            </div>

            {/* Data Processing */}
            <div className="flex items-start gap-3">
              <div className="rounded-md p-1">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-medium">Data Processing ›</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
