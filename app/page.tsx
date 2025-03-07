import { Metadata } from "next"
import BusinessResult from "components/Header/business-result"
import SolutionItems from "components/Header/solution-item"
import SupportItems from "components/Home/support-item"
import ClientStickWithUs from "components/Home/client-stick-with-us"
import TimeLine from "components/Home/time-line"
import Footer from "components/Footer/footer"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
}

export default function Web() {
  return (
    <>
      <header className="h-full bg-[#f7e1d2] pb-20">
        <section id="banner" className="px-5 sm:p-0 flex h-90 flex-col items-center justify-center text-center">
          <p className="text-xl sm:text-2xl font-normal md:text-3xl">Quickly and seamlessly scale your team with agile, highly</p>
          <p className="text-xl sm:text-2xl font-normal md:text-3xl">customizable outsourcing solutions that power your growth.</p>
          <h1 className="mt-2 px-10 text-5xl sm:text-6xl font-bold md:text-6xl">
            <span className={playfair.className}>Outsourcing worth talking about</span>
          </h1>
        </section>
        <hr className="border border-gray-400 mx-20" />
        <section id="solution" className="px-5 my-10 flex flex-col items-center justify-center gap-6">
          <h1 className="text-3xl font-semibold">Which outsourcing solutions are you looking for?</h1>
          <p>Choose as many as you need.</p>
          <div className="py-3">
            <SolutionItems />
          </div>

          <button className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-3xl bg-[#ee4b4a] px-5 py-3 text-white hover:bg-black md:w-auto md:justify-center">
            Get started
            <div className="rounded-full bg-white px-2 py-1 text-[#ee4b4a]">{"->"}</div>
          </button>
        </section>
        <section className="mx-auto max-w-[80%] rounded-2xl bg-[#bfc1b9] py-10">
          <div className="flex flex-col md:flex-row items-center justify-center p-2">
            <div className="md:w-2/5 md:text-3xl md:font-normal text-center">Driving better business results for 200+ companies.</div>
            <div className="md:w-3/5 mt-10">
              <BusinessResult />
            </div>
          </div>
        </section>
      </header>
      <img
        className="w-full"
        src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc5c4ce4784_Bottom%20Squiggle.svg"
        alt=""
      />
      <main className="flex flex-col items-center justify-center">
        <section className="max-w-[80%] py-20 sm:py-40 xl:py-60">
          <div className="flex flex-col md:grid md:grid-cols-2 items-center justify-center gap-20 sm:gap-40">
            <div className="">
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-1080.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-3xl lg:text-4xl xl:text-6xl font-semibold">
                <span className={playfair.className}>Free up resources, accelerate growth, and solve for scale.</span>{" "}
              </p>
              <p className="text-md xl:text-xl font-medium">
                At SupportNinja, we combine cutting-edge technology with value-centricity to foster high-performing,
                reliable teams that turn growing pains into efficient pathways to profitability.
              </p>
              <p className="text-md xl:text-xl font-medium">
                Our customized, agile, AI-enabled solutions don’t just deliver cost savings — they also help you achieve
                key business outcomes.
              </p>
              <p className="text-md xl:text-xl font-medium">
                We work closely with you to continually adjust strategies, realize efficiencies, and drive scale
                according to your unique needs. Plus, flexibility is baked in from day one, so you’re never locked into
                rigid, long-term contracts.
              </p>
              <p className="text-md xl:text-xl font-medium">Now that’s outsourcing worth talking about.</p>
            </div>
          </div>
        </section>
        <section className="max-w-[80%] border-b border-gray-500 pb-10 sm:pb-20">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center justify-center gap-10 sm:gap-20 md:gap-40">
            <div className="flex flex-col gap-5 sm:gap-10">
              <p className="text-4xl sm:text-7xl font-semibold"><span className={playfair.className}>Don’t grow it alone</span></p>
              <p className="text-md sm:text-xl sm:font-medium">
                Don't let headcount become a headache. We’ll connect you with talent that meets your needs.
              </p>
              <p className="text-md sm:text-xl sm:font-medium">
                Your dedicated new team members will become experts in your world — your customers, your tech, your
                data, your systems — so they can expand on what you’ve built.
              </p>
            </div>
            <div className="me-auto md:mx-auto">
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="max-w-[80%] py-10 sm:py-20">
          <SupportItems />
        </section>
        <section className="max-w-[80%] py-10 sm:py-20">
          <h1 className="text-center text-3xl sm:text-6xl font-bold mb-5">
            <span className={playfair.className}>Why our clients stick with us</span>
          </h1>
          <div className="">
            <ClientStickWithUs />
          </div>
        </section>
        <img
          className="w-full"
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7976ce4795_Section%20Curve%2002.svg"
          alt=""
        />
        <section
          className="relative flex w-full flex-col items-center justify-center bg-[#bfc1b9] bg-cover sm:bg-contain bg-center bg-no-repeat py-20 sm:py-60"
          style={{
            backgroundImage:
              "url('https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c0fc8ce4798_Globe%20Lines.svg')",
          }}
        >
          <div className="max-w-[80%] md:max-w-[40%]">
            <div className="flex flex-col items-center justify-center gap-5 sm:gap-10">
              <h1 className=" text-4xl md:text-6xl font-bold">
                <span className={playfair.className}>
                  Spanning a wider
                  <br /> world of talent
                </span>
              </h1>
              <h1 className="text-md md:text-lg">
                What are the odds that the most qualified people in the world live in your zip code? We’ll help you see
                further.
              </h1>
              <h1 className="text-md md:text-lg">
                A global team extends your presence across time zones and languages—which means longer reach, constant
                uptime, and happier customers.
              </h1>
              <h1 className="text-sm sm:text-lg font-bold">It’s time to go international. No passport required.</h1>
              <button className="rounded-4xl bg-[#0c3a23] px-6 py-3 text-white">Get Started</button>
            </div>
          </div>
        </section>
        <section className="flex w-full items-center justify-center bg-[#bfc1b9] py-20 md:pb-40">
          <div className="flex flex-col md:grid md:grid-cols-2 w-[80%]  items-center justify-center gap-10 md:gap-50">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl sm:text-6xl"><span className={playfair.className}>Our customized approach</span></h1>
              <p className="text-md sm:text-xl">
                We tailor our strategies and services based on your roadblocks and needs, delivering a strategic
                outsourcing playbook — inclusive of technology, talent, and timing — that drives your business forward.
              </p>
            </div>
            <TimeLine />
          </div>
        </section>
        <section className="flex w-full items-center justify-center px-7 sm:px-20 md:px-50 lg:px-20 pt-20">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-10 lg:gap-5 xl:gap-30">
            <div className="flex flex-col gap-10">
              <div className="text-3xl sm:text-6xl">
                <span className={playfair.className}>We’re passionate about our people.</span>{" "}
              </div>
              <div className="text-md sm:text-xl font-bold">Our people-first culture attracts and retains top talent.</div>
              <div className="text-md sm:text-xl">
                For nearly a decade, we’ve fostered the growth, wellbeing, and career development of our team members —
                and that’s earned us industry-high talent retention rates.
              </div>
              <div className="me-auto inline-block cursor-pointer rounded-4xl bg-[#0c3a23] px-6 py-3 text-lg text-white hover:bg-[#0a2e1b]">
                Read our story
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:gap-5 sm:p-3">
              <img
                className="w-full rounded-2xl bg-[#babcb4]"
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c1677ce47c0_Tile__Man-p-500.png"
                width="50"
                height={50}
              />
              <img
                className="w-full rounded-2xl bg-[#f6e0d1]"
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c32c6ce47ba_Tile%20Illustrations__Pie%20Chart.webp"
                width="50"
                height={50}
              />
              <img
                className="w-full rounded-2xl bg-[#babcb4]"
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cf161ce47c1_Tile__Woman-p-500.png"
                width="50"
                height={50}
              />
              <img
                className="w-full rounded-2xl bg-[#f6e0d1]"
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cbdf4ce47b9_Tile%2520Illustrations__Laptop-p-500.png"
                width="50"
                height={50}
              />
              <img
                className="w-full rounded-2xl bg-[#babcb4]"
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c141ace47c2_Tile__Man%25202-p-500.png"
                width="50"
                height={50}
              />
              <img
                className="w-full rounded-2xl bg-[#f6e0d1]"
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cb7f6ce47b8_Tile%20Illustrations__Bar%20Chart.webp"
                width="50"
                height={50}
              />
            </div>
          </div>
        </section>
        <section className="flex w-full items-center justify-center px-7 sm:px-20 lg:px-20 pt-20">
          <div className="flex flex-col-reverse justify-center items-center md:grid md:grid-cols-2 lg:gap-10 xl:gap-30">
            <div className="">
              <img
                className="w-full rounded-2xl"
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c7fc2ce4791_Stock%2520Image__Conference%2520Room-p-800.webp"
              />
            </div>
            <div className="flex flex-col gap-10">
              <div className=" lg:text-4xl sm:text-6xl">
                <span className={playfair.className}>Grow your career and unleash your potential.</span>{" "}
              </div>
              <div className="text-md sm:text-xl font-bold">Ready to expand your horizons at a truly global company?</div>
              <div className="text-md sm:text-xl">
                At SupportNinja, we prioritize your progress, celebrate your wins, and provide a supportive environment
                where you can thrive. Check out our openings today.
              </div>
              <div className="me-auto inline-block cursor-pointer rounded-4xl bg-[#0c3a23] px-6 py-3 text-lg text-white hover:bg-[#0a2e1b]">
                View open roles
              </div>
            </div>
          </div>
        </section>
        <img
          className="w-full pt-40"
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c211cce4793_Section%20Curve%2003.svg"
          alt=""
        />
        <section className="flex w-full items-center justify-center bg-[#f7e1d2] px-7 sm:px-20 xl:px-40 py-20">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-40">
            <div className="flex flex-col gap-10">
              <div className="text-3xl lg:text-4xl xl:text-6xl">
                <span className={playfair.className}>We’re better together. Start building your dream team.</span>{" "}
              </div>
              <div className="text-sm sm:text-md font-bold">Design a custom outsourcing solution that drives results.</div>
              <button className="w-full md:w-auto me-auto flex justify-between cursor-pointer items-center md:justify-center gap-2 rounded-3xl bg-[#ee4b4a] px-5 py-3 text-white hover:bg-black">
                Get started
                <div className="rounded-full bg-white px-2 py-1 text-[#ee4b4a]">{"->"}</div>
              </button>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="w-full rounded-2xl"
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cc4e1ce4794_Character%2520Illustration__Footer-CTA-p-800.webp"
              />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
