import GenericButton from "@/components/atoms/GenericButton";
import { RightArrow } from "@/components/atoms/icons";
import React from "react";

const TopbarActions = () => {
  return (
    <div className="flex justify-center items-center gap-6">
      <GenericButton
        variant="glass"
        size="sm"
        type="button"
        title="Save Draft"
        onClick={() => {}}
      />

      <GenericButton
        variant="primary"
        size="sm"
        type="button"
        title="Generate PDF"
        icon={<RightArrow />}
        iconPosition={"right"}
        onClick={() => {}}
      />
    </div>
  );
};

export default TopbarActions;
