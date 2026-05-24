import GenericDropDown from "@/components/atoms/GenericDropDown";
import { useFilterContext } from "@/components/providers/FilterProvider";
import { SelectFilterConfig } from "@/types/filterType";
import React, { useMemo } from "react";

interface SelectFilterProps {
  filterkey: string;
  className?: string;
}

const FilterWithSelect = ({ filterkey, className }: SelectFilterProps) => {
  const { filters, setFilter, configs } = useFilterContext();
  const config = configs.find((c) => c.key === filterkey) as
    | SelectFilterConfig
    | undefined;
  const currentValue = (filters[filterkey] as string) ?? "";
  const handleChange = (value: string | number) => {
    const stringValue = String(value);

    setFilter(filterkey, stringValue === "" ? null : stringValue);
  };

  const options = useMemo(() => {
    const baseOptions = config?.options || [];
    if (config?.placeholder && !currentValue) {
      return [{ label: config?.placeholder, value: "" }, ...baseOptions];
    }
    return baseOptions;
  }, [config?.options, config?.placeholder, currentValue]);
  return (
    <GenericDropDown
      options={options}
      value={currentValue}
      onValueChange={handleChange}
      placeholder={config?.placeholder || "Select..."}
    />
  );
};

export default FilterWithSelect;
