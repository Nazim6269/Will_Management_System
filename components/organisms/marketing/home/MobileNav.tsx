import React from "react";
import GenericButton from "@/components/atoms/GenericButton";
import { ChevronDown, X } from "lucide-react";
import { useActiveNav } from "@/hooks";
import Link from "next/link";
import { cn } from "@/components/utils/cn";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const MobileNav = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { isActive } = useActiveNav();
  return (
    <div
      className={cn(
        "md:hidden fixed top-0 right-0 w-full bg-black/50 backdrop-blur-sm h-screen space-y-3 z-[999] transform transition-opacity duration-300 ease-in-out",
        menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      )}
      onClick={() => setMenuOpen(false)}
    >
      <div
        className={cn(
          "w-[80%] absolute top-0 p-6 right-0 h-full max-w-[320px] bg-[var(--background)] border-l border-[rgba(123,92,246,0.18)] transform transition-transform duration-300 ease-in-out",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex w-full justify-between items-center mb-8">
          <h2 className="gradient-text-one text-xl font-extrabold leading-[2.4rem] tracking-[-0.031rem] capitalize">
            inherix
          </h2>
          <button
            aria-label="close-menu"
            className="text-[var(--color-textBlue)]"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "block text-lg font-medium",
                  active
                    ? "text-[var(--color-violet85)]"
                    : "text-[var(--color-textBlue)]",
                )}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}

          <GenericButton
            radius="pill"
            variant="primary"
            iconPosition="right"
            icon={<ChevronDown />}
            className="mt-4 w-full"
          >
            Sign In
          </GenericButton>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
