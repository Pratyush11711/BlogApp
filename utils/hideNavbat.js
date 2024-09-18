import { usePathname } from "next/navigation"

export const HideNavbar=()=>{
    const pathname=usePathname()
    const hideNavbar=pathname==='/login'|| pathname==='/register'
    return hideNavbar
}   