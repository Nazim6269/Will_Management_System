

"use client";

import { Component, type ReactNode, type ErrorInfo } from "react";
import { ApiError, NetworkError } from "./api-errors";
import { logger } from "../monitoring/logger";

interface ErrorBoundaryState {
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: (error: Error, reset: () => void) => ReactNode;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    logger.error("Unhandled render error", { error, componentStack: info.componentStack });
  }

  reset = () => this.setState({ error: null });

  render() {
    if (this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.reset);
      }
      return <DefaultErrorFallback error={this.state.error} reset={this.reset} />;
    }
    return this.props.children;
  }
}

// ─── Default Error Fallback ───────────────────────────────────────────────────

function DefaultErrorFallback({ error, reset }: { error: Error; reset: () => void }) {
  const message =
    error instanceof NetworkError
      ? "Connection error. Check your internet connection."
      : error instanceof ApiError && error.isServerError()
      ? "Server error. Our team has been notified."
      : error.message || "Something went wrong.";

  return (
    <div role="alert" style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Something went wrong</h2>
      <p>{message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}

// ─── Mutation Error Handler ───────────────────────────────────────────────────
// Centralized handler for useMutation onError callbacks

import { type AppError, getFieldErrors } from "./api-errors";

export interface MutationErrorResult {
  message: string;
  fieldErrors: Record<string, string>;
  isValidation: boolean;
  isAuth: boolean;
  isServer: boolean;
}

export function handleMutationError(error: AppError): MutationErrorResult {
  const isApiError = error instanceof ApiError;

  return {
    message: error.message,
    fieldErrors: isApiError ? getFieldErrors(error) : {},
    isValidation: isApiError && error.isValidationError(),
    isAuth: isApiError && error.isAuthError(),
    isServer: isApiError && error.isServerError(),
  };
}