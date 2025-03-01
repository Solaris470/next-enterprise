import { Metadata } from "next"
import { Button } from "components/Button/Button"
import BusinessResult from "components/Header/business-result"
import Link from "next/link"
import Nav from "components/nav/nav"
import SolutionItems from "components/Header/solution-item"
import SupportItems from "components/Home/support-item"
import ClientStickWithUs from "components/Home/client-stick-with-us"
import TimeLine from "components/Home/time-line"
import Footer from "components/Footer/footer"

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
      <header className="h-full bg-[#f7e1d2]">
        <section className="text-md bg-[#0c3a23] p-4 text-center text-[#f7e1d2]">
          SupportNinja is hiring! Apply through our Jobs Board.{" "}
          <Link href={"https://www.supportninja.com/careers"} className="font-bold underline">
            Find Open Positions Today
          </Link>
        </section>
        <section id="navbar">
          <Nav />
        </section>
        <section id="banner" className="flex h-90 flex-col items-center justify-center">
          <p className="text-3xl font-normal">Quickly and seamlessly scale your team with agile, highly</p>
          <p className="text-3xl font-normal">customizable outsourcing solutions that power your growth.</p>
          <h1 className="text-6xl font-bold">Outsourcing worth talking about</h1>
        </section>
        <hr className="mx-auto my-4 h-1 w-72 rounded-sm border-0 bg-gray-800 md:my-10 dark:bg-gray-700" />
        <section id="solution" className="my-10 flex flex-col items-center justify-center gap-6">
          <h1 className="text-3xl font-semibold">Which outsourcing solutions are you looking for?</h1>
          <p>Choose as many as you need.</p>
          <div className="py-3">
            <SolutionItems />
          </div>
          <button className="flex cursor-pointer items-center justify-center gap-2 rounded-3xl bg-[#ee4b4a] px-5 py-3 text-white hover:bg-black">
            Get started
            <div className="rounded-full bg-white px-2 py-1 text-[#ee4b4a]">{"->"}</div>
          </button>
        </section>
        <section className="mx-auto max-w-[80%] rounded-2xl bg-[#bfc1b9] py-10">
          <div className="flex items-center justify-center p-2">
            <div className="w-2/5 text-3xl font-normal">Driving better business results for 200+ companies.</div>
            <div className="w-3/5">
              <BusinessResult />
            </div>
          </div>
        </section>
      </header>
      <main className="flex flex-col items-center justify-center">
        <section className="max-w-[80%] py-60">
          <div className="grid grid-cols-2 items-center justify-center gap-40">
            <div className="">
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c5b45ce4789_Character%2520Illustration__Woman%2520Watering%2520Bar%2520Chart-p-1080.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-7xl font-semibold">Free up resources, accelerate growth, and solve for scale.</p>
              <p className="text-xl font-medium">
                At SupportNinja, we combine cutting-edge technology with value-centricity to foster high-performing,
                reliable teams that turn growing pains into efficient pathways to profitability.
              </p>
              <p className="text-xl font-medium">
                Our customized, agile, AI-enabled solutions don’t just deliver cost savings — they also help you achieve
                key business outcomes.
              </p>
              <p className="text-xl font-medium">
                We work closely with you to continually adjust strategies, realize efficiencies, and drive scale
                according to your unique needs. Plus, flexibility is baked in from day one, so you’re never locked into
                rigid, long-term contracts.
              </p>
              <p className="text-xl font-medium">Now that’s outsourcing worth talking about.</p>
            </div>
          </div>
        </section>
        <section className="max-w-[80%] border-b border-gray-500 pb-20">
          <div className="grid grid-cols-2 items-center justify-center gap-40">
            <div className="flex flex-col gap-10">
              <p className="text-7xl font-semibold">Don’t grow it alone</p>
              <p className="text-xl font-medium">
                Don't let headcount become a headache. We’ll connect you with talent that meets your needs.
              </p>
              <p className="text-xl font-medium">
                Your dedicated new team members will become experts in your world — your customers, your tech, your
                data, your systems — so they can expand on what you’ve built.
              </p>
            </div>
            <div className="mx-auto">
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0c4794ce4765_Illustration%3DPlant%201.svg"
                alt=""
              />
            </div>
          </div>
        </section>
        <section className="max-w-[80%] border-b border-gray-500 py-20">
          <SupportItems />
        </section>
        <section className="max-w-[80%] border-b border-gray-500 py-20">
          <h1>Why our clients stick with us</h1>
          <div className="">
            <ClientStickWithUs />
          </div>
        </section>
        <section className="flex w-full flex-col items-center justify-center bg-[#bfc1b9] py-60">
          <div className="max-w-[40%]">
            <div className="flex flex-col items-center justify-center gap-10">
              <h1 className="text-5xl font-bold">Spanning a wider world of talent</h1>
              <h1 className="text-lg">
                What are the odds that the most qualified people in the world live in your zip code? We’ll help you see
                further.
              </h1>
              <h1 className="text-lg">
                A global team extends your presence across time zones and languages—which means longer reach, constant
                uptime, and happier customers.
              </h1>
              <h1 className="text-lg font-bold">It’s time to go international. No passport required.</h1>
              <button className="rounded-4xl bg-[#0c3a23] px-6 py-3 text-white">Get Started</button>
            </div>
          </div>
        </section>
        <section className="flex items-center w-full justify-center bg-[#bfc1b9]">
          <div className="grid grid-cols-2 w-[80%] items-center justify-center gap-10">
            <div className="flex flex-col gap-3">
              <h1 className="text-6xl">Our customized approach</h1>
              <p className="text-xl">
                We tailor our strategies and services based on your roadblocks and needs, delivering a strategic
                outsourcing playbook — inclusive of technology, talent, and timing — that drives your business forward.
              </p>
            </div>
            <TimeLine />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
