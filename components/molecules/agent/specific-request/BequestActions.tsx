"use client";

import GenericButton from "@/components/atoms/GenericButton";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const BequestActions = () => {
  const router = useRouter();

  const handleSaveAll = () => {
    toast.success("Bequests saved successfully!");
    router.push("/dashboard/will-forms");
  };

  return (
    <div className="grid grid-cols-12 gap-2">
      <GenericButton
        title="Back to will forms"
        variant="outline"
        icon={<ArrowLeft size={14} />}
        iconPosition="left"
        className="col-span-12 md:col-span-3 w-full"
        size={"md"}
        onClick={() => router.back()}
      />
      <GenericButton
        title="Save All Requests"
        variant="primary"
        className="button-shadow col-span-12 md:col-span-9 w-full"
        onClick={handleSaveAll}
      />
    </div>
  );
};

export default BequestActions;
