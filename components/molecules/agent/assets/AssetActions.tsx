"use client";

import GenericButton from "@/components/atoms/GenericButton";
import { ArrowLeftIcon, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const AssetActions = () => {
  const router = useRouter();

  const handleSaveAndContinue = () => {
    toast.success("Assets saved successfully!");
    router.push("/dashboard/will-forms/requests");
  };

  return (
    <div className="flex items-center gap-4 flex-wrap justify-between">
      <div className="flex items-center gap-4 flex-wrap">
        <GenericButton
          variant={"glass"}
          title="Back to will form"
          icon={<ArrowLeftIcon />}
          iconPosition={"left"}
          className="flex-1 md:flex-none"
          onClick={() => router.back()}
        />
        <GenericButton
          variant={"secondary"}
          title="Specific Requests"
          icon={<ArrowRight />}
          iconPosition={"right"}
          className="flex-1 md:flex-none"
          onClick={() => router.push("/dashboard/will-forms/requests")}
        />
      </div>
      <GenericButton
        variant={"primary"}
        title="Save & continue"
        icon={<ArrowRight />}
        className="button-shadow flex-1"
        iconPosition={"right"}
        onClick={handleSaveAndContinue}
      />
    </div>
  );
};

export default AssetActions;
