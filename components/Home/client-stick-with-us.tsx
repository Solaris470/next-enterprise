"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] })

    const data = [
        {
            "id" : 1,
            "text" : "SupportNinja has really been flexible with us as we’re growing the business, and have been really responsive and accommodating. They’ve been integral to helping our business grow.",
            "name" :"Pam Schwab",
            "role" :"VP of Quality & Customer Care, SymmetryRx"
        },{
            "id" : 2,
            "text" : "Our partnership with SupportNinja has helped meet client demands we couldn’t handle internally. They have also given us great referrals with a much shorter sales cycle than we typically see.",
            "name" :"Michael Hanson",
            "role" :"VP Growth, CloudTask"
        },{
            "id" : 3,
            "text" : "I love the communication that we have with management, especially when we need to address something. It gets handled really quickly! Beyond this, I get great support, they're reliable and they get the job done.",
            "name" :"Lorna Quijano",
            "role" :"Full Service Manager, RedWeek"
        },{
            "id" : 4,
            "text" : "SupportNinja is really responsive and flexible based on our needs. But what we’re really, really happy about is the Ninjas and their commitment to the brand. They’re like an extension of our team!",
            "name" :"Sudip Dasgupta",
            "role" :"Head of Customer Experience, Product Madness"
        }
    ]

export default function ClientStickWithUs() {
  return (
    <div className="mx-auto w-full max-w-6xl p-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="relative"
      >
        {data.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg bg-[#f7e1d2] p-30 text-center shadow-md">
              <p className="text-xl font-semibold text-gray-800 italic">"<span className={playfair.className}>{testimonial.text}</span>"</p>
              <h3 className="mt-4 font-semibold text-gray-900">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      {/* <div className="mt-4 flex items-center justify-between">
        <button className="swiper-button-prev rounded-full bg-green-900 p-3 text-white">
          <FaArrowLeft />
        </button>
        <button className="swiper-button-next rounded-full bg-green-900 p-3 text-white">
          <FaArrowRight />
        </button>
      </div> */}
    </div>
  )
}
