export default function Footer() {
  const SolutionItem = [
    "Customer Experience",
    "Customer Conversion",
    "Customer Onboarding",
    "Customer Support",
    "Technical Customer Support",
    "Customer Renewals",
    "Content Moderation",
    "Data Processing",
    "Finance & Accounting",
  ]

  const IndustriesItem = ["SaaS", "AI", "Ecommerce", "Healthcare", "Supply Chain & Logistics", "Fintech"]

  const ResourcesItem = ["Resources", "FAQs", "Glossary"]

  const CompanyItem = ["How it Works", "About", "Careers", "Contact"]

  const FollowItem = ["LinkedIn", "YouTube", "Twitter", "Facebook"]

  return (
    <footer className="bg-[#bfc1b9] px-20 py-6 text-gray-700 md:px-40">
      <div id="logo" className="py-5">
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd45cce4719_Support%20Ninja%20%7C%20Full%20Logo.svg"
          className="h-10 w-auto"
        />
      </div>
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-black py-6 md:grid-cols-5 lg:py-8">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Solutions</h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            {SolutionItem.map((item, index) => (
              <li key={index} className="mb-4">
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Industries</h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            {IndustriesItem.map((item, index) => (
              <li key={index} className="mb-4">
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            {ResourcesItem.map((item, index) => (
              <li key={index} className="mb-4">
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            {CompanyItem.map((item, index) => (
              <li key={index} className="mb-4">
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow</h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            {FollowItem.map((item, index) => (
              <li key={index} className="mb-4">
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button className="flex cursor-pointer items-center justify-between gap-2 rounded-3xl bg-[#ee4b4a] px-5 py-3 whitespace-nowrap text-white hover:bg-black md:me-auto">
            <div>Get started</div>
            <div className="rounded-full bg-white px-2 py-1 text-[#ee4b4a]">{"->"}</div>
          </button>
        </div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        {/* Copyright */}
        <p className="text-center text-sm md:text-left">
          © 2025 SupportNinja, a registered trademark of Ninja Partners, LLC
        </p>

        {/* Links */}
        <div className="mt-4 flex gap-4 md:mt-0">
          <a href="#" className="text-sm hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:underline">
            Security Policy
          </a>
          <a href="#" className="text-sm hover:underline">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  )
}
