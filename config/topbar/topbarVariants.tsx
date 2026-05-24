import React from "react";
import TopbarActions from "@/components/molecules/shared/topbar/TopbarActions";
import Utilities from "@/components/molecules/shared/topbar/Utilities";
import GenericButton from "@/components/atoms/GenericButton";
import type { PageMeta } from "@/types/metaType";

export const getTopbarRightSection = (meta: PageMeta) => {
  const { layoutVariant, primaryAction } = meta;

  switch (layoutVariant) {
    case "actions":
      return <TopbarActions />;
    
    case "primary":
      if (!primaryAction) return <Utilities />;
      return (
        <GenericButton
          variant="primary"
          size="sm"
          title={primaryAction.label}
          icon={
            primaryAction.icon ? (
              <primaryAction.icon size={18} />
            ) : undefined
          }
          iconPosition="left"
          onClick={() => {}}
        />
      );

    case "default":
    default:
      return <Utilities />;
  }
};
