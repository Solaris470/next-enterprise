export default function Footer() {
  return (
    <footer className="bg-[#bfc1b9] px-40 py-6 text-gray-700">
      <div id="logo" className="py-5">
        <img
          src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd45cce4719_Support%20Ninja%20%7C%20Full%20Logo.svg"
          className="h-10 w-auto"
        />
      </div>
      <div className="mt-3 grid grid-cols-2 gap-8 border-t border-black py-6 md:grid-cols-5 lg:py-8">
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Solutions</h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Customer Experience
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Customer Conversion
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Customer Onboarding
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Customer Support
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Technical Customer Support
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Customer Renewals
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Content Moderation
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Data Processing
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Finance & Accounting
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Industries</h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">
                SaaS
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                AI
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Ecommerce
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Healthcare
              </a>
            </li>

            <li className="mb-4">
              <a href="#" className="hover:underline">
                Supply Chain & Logistics
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Fintech
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">
              Resources
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
              FAQs
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
              Glossary
              </a>
            </li>
          </ul>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">
              How it Works
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
              About
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
              Careers
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
              Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow</h2>
          <ul className="font-medium text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">
              LinkedIn
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
              YouTube
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
              Twitter
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
              Facebook
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="me-auto flex cursor-pointer items-center justify-center gap-2 rounded-3xl bg-[#ee4b4a] px-5 py-3 text-white hover:bg-black">
            Get started
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
