

'use client'

import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
} from 'react'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import {
  localStorageAdapter,
  useSidebarState,
  type SidebarStateAPI,
} from '@/hooks/useSidebarState'


interface SidebarContextValue extends SidebarStateAPI {
  isCollapsed: boolean
  isDrawer: boolean
  isDrawerOpen: boolean
}

const SidebarContext = createContext<SidebarContextValue | null>(null)

export function SidebarProvider({ children }: PropsWithChildren) {
  const {isMobile, isTablet } = useBreakpoint()
  const sidebarState = useSidebarState({ adapter: localStorageAdapter })

  const value = useMemo<SidebarContextValue>((): SidebarContextValue => {
    const isCollapsed = isMobile ? false : isTablet ? true : sidebarState.isCollapsed
    const isDrawer = isMobile
    const isDrawerOpen = isDrawer && sidebarState.isOpen

    return {
      ...sidebarState,
      isCollapsed,
      isDrawer,
      isDrawerOpen,
    }
  }, [sidebarState, isMobile, isTablet])

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}
export function useSidebar(): SidebarContextValue {
  const ctx = useContext(SidebarContext)
  if (!ctx) {
    throw new Error('useSidebar must be used inside <SidebarProvider>')
  }
  return ctx
}