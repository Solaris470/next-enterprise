'use client'

import "styles/tailwind.css"
import Nav from "components/nav/nav"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
       {pathname == '/' && (
        <section className="text-xs sm:text-md bg-[#0c3a23] p-4 text-center text-[#f7e1d2]">
        SupportNinja is hiring! Apply through our Jobs Board.{" "}
        <Link href={"https://www.supportninja.com/careers"} className="font-bold underline block sm:inline">
          Find Open Positions Today
        </Link>
      </section>
       )}
        <Nav />
        {children}
      </body>
    </html>
  )
}
