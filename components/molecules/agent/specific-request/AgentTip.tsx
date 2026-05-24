import React from "react";

const AgentTip = () => {
  return (
    <div className="w-full rounded-2xl bg-blue14 border border-borderColor/18 p-4 ">
      {/* Header */}
      <h2 className="text-blue85 text-sm font-semibold  mb-2">
        Agent’s Tip
      </h2>
      <p className="text-blue70 text-xs leading-[165%]">
        If an item is valuable or unusual - especially jewellery, art, or
        family heirlooms - always upload a photo. This prevents disputes and
        helps the executor identify items quickly.
      </p>
    </div>
  );
};

export default AgentTip;