"use client";

import Link from "next/link";
import React, { useState } from "react";
import GenericButton from "../atoms/GenericButton";
import Container from "../templates/Container";
import { MenuIcon, X } from "lucide-react";
import { cn } from "../utils/cn";
import { useActiveNav } from "@/hooks";
import MobileNav from "./marketing/home/MobileNav";
import { ChevronDown } from "../atoms/icons";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const { isActive, pathName } = useActiveNav();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Container>
      <nav className="flex items-center justify-between  h-14 sm:h-18">
        <Link href="/">
          <h2 className="gradient-text-one text-xl sm:text-2xl font-extrabold leading-[2.4rem] tracking-[-0.031rem] capitalize">
            inherix
          </h2>
        </Link>

        {pathName === "/" ||
        pathName === "/services" ||
        pathName === "/about" ||
        pathName === "/contact" ? (
          <>
            <ul className="hidden md:flex items-center gap-9 ">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium leading-[22.4px] tracking-[0.016rem] capitalize",
                      isActive(item.href)
                        ? "text-[var(--color-violet85)]"
                        : "text-[var(--color-textBlue)]",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link href={"/login?role=client"}>
              <GenericButton
                radius="pill"
                variant="primary"
                iconPosition="right"
                icon={<ChevronDown />}
                className="hidden md:inline-flex"
              >
                Sign In
              </GenericButton>
            </Link>
          </>
        ) : (
          <p className="hidden md:block text-white/60 text-sm">
            Already have an account?
            <span className="text-cyan52 font-semibold leading-[22.4px]">
              Sign in →
            </span>{" "}
          </p>
        )}

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(true)}>
            <MenuIcon className="text-[var(--color-textBlue)]" size={24} />
          </button>
        </div>

        {/* Mobile Drawer */}
        {menuOpen && (
          <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        )}
      </nav>
    </Container>
  );
};

export default Navbar;
