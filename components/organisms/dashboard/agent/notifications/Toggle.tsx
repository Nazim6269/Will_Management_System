"use client";

import { useState } from "react";

interface ToggleProps {
  checked?: boolean;
  onChange?: () => void;
  defaultOn?: boolean;
}

export function Toggle({ checked: controlledChecked, onChange, defaultOn }: ToggleProps) {
  const [internalChecked, setInternalChecked] = useState(defaultOn ?? false);
  
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleChange = () => {
    if (onChange) onChange();
    if (!isControlled) {
      setInternalChecked(!internalChecked);
    }
  };

  return (
    <button
      type="button"
      onClick={handleChange}
      className={`
        relative flex h-[22px] w-10 items-center rounded-full
        transition-colors duration-200 cursor-pointer
        ${checked ? "bg-blue66" : "border border-borderColor/18 bg-blue10"}
      `}
    >
      <span
        className={`
          absolute top-1/2 h-4.5 w-4.5 -translate-y-1/2 rounded-full
          transition-all duration-200
          ${checked ? "left-[20px] bg-white" : "left-[3px] bg-gray96/40"}
        `}
      />
    </button>
  );
}

