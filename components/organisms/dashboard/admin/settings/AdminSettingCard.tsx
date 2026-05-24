"use client";

import { useForm } from "react-hook-form";
import SettingRow from "../../agent/setting/SettingRow";

interface ServicePricingValues {
  basicPlan: number;
  standardPlan: number;
  premiumPlan: number;
  willRevision: number;
  vaultStorage: number;
}

export default function ServicePricingCard() {
  const { register } = useForm<ServicePricingValues>({
    defaultValues: {
      basicPlan: 149,
      standardPlan: 249,
      premiumPlan: 399,
      willRevision: 75,
      vaultStorage: 50,
    },
  });

  const inputClasses =
    "w-[4.813rem] bg-transparent border border-borderColor/18 rounded-md px-3 py-2 text-center text-gray96 focus:outline-none focus:border-cyan4A7A74 transition-colors";

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-borderColor/18 bg-blue14">
      {/* Card header */}
      <div className="px-6 py-5 border-b border-borderColor/18">
        <h2 className="text-base font-extrabold text-gray96 mb-0.5">
          Service Pricing
        </h2>
        <p className="text-xs text-cyan4A7A74">
          Set the pricing for each will writing service plan. Changes take
          effect immediately for new invoices.
        </p>
      </div>

      <SettingRow title="Basic Plan" sub="Single will · Standard service">
        <div className="flex items-center justify-end gap-2">
          <span className="text-gray96 text-sm">£</span>
          <input
            type="number"
            {...register("basicPlan")}
            className={inputClasses}
          />
        </div>
      </SettingRow>

      <SettingRow title="Standard Plan" sub="Single will · Priority service">
        <div className="flex items-center justify-end gap-2">
          <span className="text-gray96 text-sm">£</span>
          <input
            type="number"
            {...register("standardPlan")}
            className={inputClasses}
          />
        </div>
      </SettingRow>

      <SettingRow
        title="Premium Plan"
        sub="Couple's will · Full estate planning"
      >
        <div className="flex items-center justify-end gap-2">
          <span className="text-gray96 text-sm">£</span>
          <input
            type="number"
            {...register("premiumPlan")}
            className={inputClasses}
          />
        </div>
      </SettingRow>

      <SettingRow title="Will Revision" sub="Update to an existing will">
        <div className="flex items-center justify-end gap-2">
          <span className="text-gray96 text-sm">£</span>
          <input
            type="number"
            {...register("willRevision")}
            className={inputClasses}
          />
        </div>
      </SettingRow>

      <SettingRow
        title="Vault Storage (Annual)"
        sub="Digital will storage per year"
      >
        <div className="flex items-center justify-end gap-2">
          <span className="text-gray96 text-sm">£</span>
          <input
            type="number"
            {...register("vaultStorage")}
            className={inputClasses}
          />
        </div>
      </SettingRow>
    </div>
  );
}
