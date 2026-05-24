import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { NavItem } from '@/constants/navItems'
import { useActiveNav } from './useActiveNav'

const DASHBOARD_ROOTS = ['/', '/dashboard', '/dashboard/agent', '/dashboard/client', '/dashboard/admin']


interface UseNavigationOptions {
  items: NavItem[]
  onMobileClose?: () => void
}

export function useNavigation({ items, onMobileClose }: UseNavigationOptions) {
  const { isActive: checkActive, pathName: pathname } = useActiveNav()
  const router = useRouter()

  const isRouteActive = useCallback((href: string) => {
    const exact = DASHBOARD_ROOTS.includes(href)
    return checkActive(href, exact)
  }, [checkActive])

  const hasActiveChild = useCallback((item: NavItem) => {
    return (item.children ?? []).some((child) => isRouteActive(child.href))
  }, [isRouteActive])

  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    for (const item of items) {
      if (item.children && hasActiveChild(item)) {
        initial[item.id] = true
      }
    }
    return initial
  })

  const pathnameRef = useRef(pathname)
  useEffect(() => {
    if (pathnameRef.current !== pathname) {
      pathnameRef.current = pathname
      onMobileClose?.()
    }
  }, [pathname, onMobileClose])

  // Auto-expand parent when its child becomes active (e.g., back/forward nav)
  const lastPathnameRef = useRef(pathname)
  useEffect(() => {
    if (lastPathnameRef.current !== pathname) {
      lastPathnameRef.current = pathname
      setOpenMenus((prev) => {
        const next = { ...prev }
        let changed = false
        for (const item of items) {
          if (item.children && hasActiveChild(item) && !prev[item.id]) {
            next[item.id] = true
            changed = true
          }
        }
        return changed ? next : prev
      })
    }
  }, [pathname, items, hasActiveChild])

  const isActive = useCallback(
    (href: string) => isRouteActive(href),
    [isRouteActive],
  )

  const isParentActive = useCallback(
    (item: NavItem) => hasActiveChild(item),
    [hasActiveChild],
  )

  const toggleSubmenu = useCallback((id: string) => {
    setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }))
  }, [])

  const isSubmenuOpen = useCallback(
    (id: string) => !!openMenus[id],
    [openMenus],
  )

  const navigate = useCallback(
    (href: string) => {
      router.push(href)
    },
    [router],
  )

  return {
    pathname,
    isActive,
    isParentActive,
    toggleSubmenu,
    isSubmenuOpen,
    navigate,
  } as const
}