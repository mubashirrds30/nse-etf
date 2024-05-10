'use client'
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logo from "../../../assests/images/logo.svg"
import Image from "next/image"

export function Nav({ children }) {
    return  <header class="bs-header">
    <div class="cm-container">
      <div class="left-wrap">
        <div class="logo-wrap">
          <a href="#">
            <Image src={logo} alt="logo" />
          </a>
        </div>
        <div class="bs-menu open-menu">
          <ul class="menu-list">
            <li class="menu-item">
              <a href="#" class="">{children}</a>
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