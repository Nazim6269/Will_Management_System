import { useCallback, useEffect, useRef, useState } from "react";

export interface SidebarState {
  isOpen: boolean;
  isCollapsed: boolean;
}

export interface SidebarStorageAdapter {
  get: () => Partial<SidebarState> | null;
  set: (state: SidebarState) => void;
}

const noopAdapter: SidebarStorageAdapter = {
  get: () => null,
  set: () => {},
};

export const localStorageAdapter: SidebarStorageAdapter = {
  get: () => {
    try {
      const raw = localStorage.getItem("sidebar:state");
      return raw ? (JSON.parse(raw) as Partial<SidebarState>) : null;
    } catch {
      return null;
    }
  },
  set: (state) => {
    try {
      localStorage.setItem("sidebar:state", JSON.stringify(state));
    } catch {}
  },
};

interface UseSidebarStateOptions {
  adapter?: SidebarStorageAdapter;
  defaultCollapsed?: boolean;
}

export function useSidebarState(options: UseSidebarStateOptions = {}) {
  const { adapter = noopAdapter, defaultCollapsed = false } = options;

  const [state, setStateRaw] = useState<SidebarState>(() => {
    const persisted = adapter.get();
    return {
      isOpen: persisted?.isOpen ?? true,
      isCollapsed: persisted?.isCollapsed ?? defaultCollapsed,
    };
  });

  const persistTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setState = useCallback(
    (updater: SidebarState | ((prev: SidebarState) => SidebarState)) => {
      setStateRaw((prev) => {
        const next = typeof updater === "function" ? updater(prev) : updater;
        if (persistTimerRef.current) clearTimeout(persistTimerRef.current);
        persistTimerRef.current = setTimeout(() => adapter.set(next), 300);
        return next;
      });
    },
    [adapter],
  );

  const open = useCallback(
    () => setState((s) => ({ ...s, isOpen: true })),
    [setState],
  );
  const close = useCallback(
    () => setState((s) => ({ ...s, isOpen: false })),
    [setState],
  );
  const toggle = useCallback(
    () => setState((s) => ({ ...s, isOpen: !s.isOpen })),
    [setState],
  );
  const expand = useCallback(
    () => setState((s) => ({ ...s, isCollapsed: false })),
    [setState],
  );
  const collapse = useCallback(
    () => setState((s) => ({ ...s, isCollapsed: true })),
    [setState],
  );
  const toggleCollapse = useCallback(
    () => setState((s) => ({ ...s, isCollapsed: !s.isCollapsed })),
    [setState],
  );

  useEffect(() => {
    return () => {
      if (persistTimerRef.current) clearTimeout(persistTimerRef.current);
    };
  }, []);

  return {
    ...state,
    open,
    close,
    toggle,
    expand,
    collapse,
    toggleCollapse,
  } as const;
}

export type SidebarStateAPI = ReturnType<typeof useSidebarState>;
