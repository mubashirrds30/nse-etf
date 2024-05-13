'use client'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logo from "../../../assests/images/logo.svg"
import Image from "next/image"

export function Nav({ children }) {
  return <header className="bs-header">
    <div className="cm-container">
      <div className="left-wrap">
        <div className="logo-wrap">
          <a href="#">
            <Image src={logo} alt="logo" />
          </a>
        </div>
        <div className="bs-menu open-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <a href="#" className="">{children}</a>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </header>

}

export default function Navlink(props) {
  const usePath = usePathname()
  return <Link {...props} className={cn(
    "p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground menu-link", usePath === props.href && "bg-background text-foreground active")} />
}