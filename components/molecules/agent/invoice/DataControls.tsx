"use client";

import { cva, VariantProps } from "class-variance-authority";
import GenericDropDown from "@/components/atoms/GenericDropDown";
import GenericButton from "@/components/atoms/GenericButton";
import { Plus } from "lucide-react";
import FilterWithSelect from "../../shared/FilterWithSelect";
import FilterBarWrapper from "../../shared/FilterBarWrapper";
import { FilterWithSearch } from "../../shared/FilterWithSearch";

const dataControlsVariants = cva(
  "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between mb-5.5 mt-4",
  {
    variants: {
      variant: {
        action: "",
        filter: "",
      },
    },
    defaultVariants: {
      variant: "action",
    },
  },
);

type Variant = "action" | "filter";

const BUTTON_TEXT_MAP: Record<string, string> = { 
  invoices: "New Invoice",
  admin_invoices: "New Invoice",
  appointments: "Book Appointment",
  admin_appointments: "Book Appointment",
  agents: "Add Agent",
  clients: "Add Client",
};

const controlsConfig = {
  action: (sectionName?: string) => ({
    showTypeFilter:
      sectionName === "invoices" || sectionName === "admin_invoices",
    showButton: true,
    buttonText: BUTTON_TEXT_MAP[sectionName || ""] || "Create New",
  }),

  filter: (sectionName?: string) => ({
    showTypeFilter:
      sectionName === "invoices" || sectionName === "admin_invoices",
    showButton: false,
    buttonText: "",
  }),
} satisfies Record<
  Variant,
  (sectionName?: string) => {
    showTypeFilter: boolean;
    showButton: boolean;
    buttonText: string;
  }
>;

/* ---------------- PROPS ---------------- */

interface DataControlsProps extends VariantProps<typeof dataControlsVariants> {
  sectionName?: string;
}

const DataControls = ({
  variant = "action",
  sectionName,
}: DataControlsProps) => {

  const config = controlsConfig[(variant ?? "action") as Variant](sectionName);

  return (
    <div className={dataControlsVariants({ variant })}>
      {/* LEFT CONTROLS */}
      <FilterBarWrapper >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 w-full gap-4">
          <div className="lg:col-span-6">
          <FilterWithSearch
            filterKey="search"
            sectionName={sectionName}
          />
          </div>

          <div className="lg:col-span-2">
            <FilterWithSelect filterkey="status" />
          </div>

          {config.showTypeFilter && (
            <div className="lg:col-span-2">
              <FilterWithSelect filterkey="feeType" />
            </div>
          )}

          {/* Extra 3rd dropdown for filter mode */}
          {variant === "filter" && (
            <GenericDropDown
              placeholder="Sort By"
              value=""
              onValueChange={() => {}}
              options={[
                { label: "Newest", value: "newest" },
                { label: "Oldest", value: "oldest" },
              ]}
              className="lg:col-span-2"
            />
          )}
        </div>
      </FilterBarWrapper>

      {/* RIGHT ACTION */}
      {config.showButton && (
        <div className="w-full lg:w-auto">
          <GenericButton
            variant="primary"
            icon={<Plus size={14} />}
            iconPosition="left"
            title={config.buttonText}
            size="sm"
            className="w-full lg:w-auto"
          />
        </div>
      )}
    </div>
  );
};

export default DataControls;
