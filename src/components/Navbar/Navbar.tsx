"use client"; // Required for client-side hooks
import {
  HoveredLink,
  Menu,
  MenuItem,
} from "../../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NavbarDemo = () => {



  return (
    <div className="relative w-full flex items-center justify-center text-black">
      <Navbar className="top-2" />
    </div>
  );
};

export default NavbarDemo;

function Navbar({ className }: { className?: string }) {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  const [nav, setNav] = useState(false);

  const handleClick = async () => {
    const response = await fetch("/api/users/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response) {
      console.log("Cannot logout");
      return;
    }
    router.push("/login");
    return response.json();
  };

  const handleNavbar = () => {
    setNav(!nav); // Toggle the navbar open/close state
  };

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          <Link href="/">
            <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
          </Link>
          <Link href="/blog">
            <MenuItem setActive={setActive} active={active} item="Blog"></MenuItem>
          </Link>
          <Link href="/createBlog">
            <MenuItem setActive={setActive} active={active} item="Create Blog"></MenuItem>
          </Link>
          <Link href="/contact">
            <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
          </Link>
          <Link href="/about">
            <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
          </Link>
          <button
            className="px-4 py-2 rounded-full border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
            onClick={handleClick}
          >
            Logout
          </button>
        </Menu>
      </div>

      {/* Mobile Menu */}
      <div className="block md:hidden">
        {/* Hamburger Button */}
        <div className="text-white cursor-pointer px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 w-[100px] m-auto" onClick={handleNavbar}>
          {nav ? "Close" : "Menu"} {/* Toggle between "Menu" and "Close" */}
        </div>


        {/* Mobile Menu Items */}
        {nav && ( // Render menu items only when `nav` is true
          <div className="flex flex-col space-y-4 text-md w-full bg-[#18191B] p-4 rounded-md mt-3">
            <HoveredLink href="/">Home</HoveredLink>
            <HoveredLink href="/blog">Blog</HoveredLink>
            <HoveredLink href="/createBlog">Create Blog</HoveredLink>
            <HoveredLink href="/about">About</HoveredLink>
            <button
              className="px-4 py-2 rounded-full border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              onClick={handleClick}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
