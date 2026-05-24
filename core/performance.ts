
// ─── Debounce ─────────────────────────────────────────────────────────────────
// Use for search inputs, form validation on change

export function debounce<T extends (...args: never[]) => void>(
  fn: T,
  delayMs: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delayMs);
  };
}

// ─── Throttle ─────────────────────────────────────────────────────────────────
// Use for scroll handlers, resize listeners

export function throttle<T extends (...args: never[]) => void>(
  fn: T,
  intervalMs: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= intervalMs) {
      lastCall = now;
      fn(...args);
    }
  };
}

// ─── Request Deduplicator ─────────────────────────────────────────────────────

export class RequestDeduplicator<T> {
  private readonly inflight = new Map<string, Promise<T>>();

  async execute(key: string, fn: () => Promise<T>): Promise<T> {
    if (this.inflight.has(key)) {
      return this.inflight.get(key)!;
    }

    const promise = fn().finally(() => this.inflight.delete(key));
    this.inflight.set(key, promise);
    return promise;
  }
}

// ─── Abort Controller Factory ─────────────────────────────────────────────────

export class AbortControllerPool {
  private readonly controllers = new Map<string, AbortController>();

  create(key: string): AbortSignal {
    this.abort(key); // Cancel any in-flight request for this key
    const controller = new AbortController();
    this.controllers.set(key, controller);
    return controller.signal;
  }

  abort(key: string): void {
    this.controllers.get(key)?.abort();
    this.controllers.delete(key);
  }

  abortAll(): void {
    this.controllers.forEach((c) => c.abort());
    this.controllers.clear();
  }
}

// ─── useDebounce Hook ─────────────────────────────────────────────────────────

import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(timer);
  }, [value, delayMs]);

  return debounced;
}