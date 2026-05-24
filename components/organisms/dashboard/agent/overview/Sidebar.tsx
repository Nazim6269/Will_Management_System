"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "@/context/sidebar-context";
import { AGENT_NAV_CONFIG, type NavConfig } from "@/constants/navItems";
import { SidebarContent } from "@/components/molecules/shared/sidebar/SidebarContent";
import type { SidebarConfig } from "@/types/dashboardType";

export interface SidebarProps {
  navConfig?: NavConfig;
  config?: SidebarConfig;
}

export function Sidebar({ navConfig = AGENT_NAV_CONFIG, config }: SidebarProps) {
  const { isCollapsed, isDrawer, isDrawerOpen, close } = useSidebar();
  const sidebarRef = useRef<HTMLElement>(null);

  // Escape key closes drawer
  useEffect(() => {
    if (!isDrawer) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isDrawerOpen) close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isDrawer, isDrawerOpen, close]);

  // Focus trap entry on open
  useEffect(() => {
    if (isDrawer && isDrawerOpen) {
      sidebarRef.current?.focus();
    }
  }, [isDrawer, isDrawerOpen]);

  // ── Static sidebar (md + lg) ────────────────────────────────────────────
  if (!isDrawer) {
    return (
      <motion.aside
        ref={sidebarRef}
        animate={{ width: isCollapsed ? 60 : 240 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="relative shrink-0 overflow-hidden border-r border-white/[0.07]"
        aria-label="Sidebar"
      >
        <div className="absolute inset-0">
          <SidebarContent
            navConfig={navConfig}
            config={config}
            isCollapsed={isCollapsed}
            isDrawer={false}
            onClose={close}
          />
        </div>
      </motion.aside>
    );
  }

  // ── Drawer sidebar (sm) ─────────────────────────────────────────────────
  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px]"
            aria-hidden
            onClick={close}
          />
        )}
      </AnimatePresence>

      {/* Drawer panel */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.aside
            ref={sidebarRef}
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            tabIndex={-1}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="fixed left-0 top-0 bottom-0 z-50 w-[240px] overflow-hidden shadow-2xl focus:outline-none"
          >
            <SidebarContent
              navConfig={navConfig}
              config={config}
              isCollapsed={false}
              isDrawer={true}
              onClose={close}
            />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
