"use client";

import React from "react";
import { useIsMobile } from "@/hooks";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import TableSkeleton from "./TableSkeleton";

export const tableVariants = cva("w-full", {
  variants: {
    variant: {
      card: "rounded-xl overflow-hidden border border-borderColor/15",
      ghost: "rounded-none border-0 overflow-visible",
    },
  },
  defaultVariants: {
    variant: "card",
  },
});

export interface ColumnConfig {
  label: React.ReactNode;
  width?: {
    mobile: string;
    desktop: string;
  };
  accessor: string;
  formatter?: (value: any, row: any, index?: number) => React.ReactNode;
}

interface DynamicTableProps extends VariantProps<typeof tableVariants> {
  columns: ColumnConfig[];
  data: Record<string, any>[];
  currentPage: number;
 itemsPerPage: number;

  totalpage: number;
  loading?: boolean;
  error?: string;
  actions?: any;
}

export default function GenericTable({
  columns,
  data,
  currentPage,
  itemsPerPage,
  loading = false,
  error,
  actions,
  variant,
}: DynamicTableProps) {
  const isMobile = useIsMobile();
  const colSpan = columns.length + (actions ? 1 : 0);

  const resolveWidth = (width: ColumnConfig["width"]) => {
    if (typeof width === "object") {
      return isMobile ? width.mobile : width.desktop;
    }
    return width;
  };

  return (
    <div className={tableVariants({ variant })}>
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse min-w-[800px]">
          {/* TABLE HEADER */}
          <thead
            className={cn(
              variant === "ghost"
                ? "bg-transparent border-b border-borderColor/10"
                : "bg-blue16/50 border-b border-borderColor/18",
            )}
          >
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  style={{ width: resolveWidth(col.width) }}
                  className={cn(
                    "px-5 py-4 text-xs font-bold uppercase tracking-wider",
                    variant === "ghost" ? "text-blue46" : "text-cyan4A7A74",
                  )}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody className="divide-y divide-borderColor/10">
            {/* LOADING STATE */}
            {loading ? (
              <TableSkeleton columns={columns} rows={itemsPerPage} />
            ) : data?.length > 0 ? (
              data.map((row, i) => (
                <tr
                  key={i}
                  className={cn(
                    "group transition-colors",
                    variant === "ghost"
                      ? "hover:bg-white/[0.03]"
                      : "hover:bg-white/[0.02]",
                  )}
                >
                  {columns.map((col, idx) => {
                    const value = row[col.accessor];
                    const index = (currentPage - 1) * itemsPerPage + i;

                    return (
                      <td
                        key={idx}
                        style={{ width: resolveWidth(col.width) }}
                        className={cn(
                          "px-5 py-4 text-sm",
                          variant === "ghost"
                            ? "text-gray96"
                            : "text-gray96/90",
                        )}
                      >
                        {col.formatter
                          ? col.formatter(value, row, index)
                          : value}
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              /* EMPTY STATE */
              <tr>
                <td colSpan={colSpan} className="px-5 py-12 text-center">
                  {error ? (
                    <div className="flex flex-col items-center gap-2">
                      <p className="text-red60 text-lg font-semibold">
                        Error loading data
                      </p>
                      <p className="text-gray96/50 text-sm">{error}</p>
                    </div>
                  ) : (
                    <p className="text-gray96/40 font-medium">No data found</p>
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
