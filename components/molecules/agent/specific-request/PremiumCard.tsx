"use client";

interface PlanTier {
  label: string;
  included: boolean;
  highlight?: boolean;
}

const DEFAULT_TIERS: PlanTier[] = [
  { label: "Basic - £149", included: false },
  { label: "Standard - £249", included: false },
  { label: "Premium - £399", included: true, highlight: true },
];

interface PremiumOnlyCardProps {
  featureName?: string;
  tiers?: PlanTier[];
}

export default function PremiumOnlyCard({
  featureName = "Specific Bequests",
  tiers = DEFAULT_TIERS,
}: PremiumOnlyCardProps) {
  return (
    <div className="w-full rounded-2xl bg-blue14 border border-borderColor/18 p-5 ">
      {/* Header */}
      <h2 className="text-orangeFB text-sm font-bold tracking-[-0.2px] mb-3">
        Premium Only
      </h2>

      {/* Description */}
      <p className="text-blue70 text-xs leading-[22px] mb-4.5">
        {featureName} is available exclusively on the{" "}
        <span className="text-orangeFB font-semibold">Premium Plan (£399)</span>. This
        feature is not available on Basic or Standard plans.
      </p>

      {/* Plan tiers */}
      <div className="flex flex-col gap-2.5">
        {tiers.map((tier) => (
          <div key={tier.label} className="flex items-center gap-2.5">
            {tier.highlight ? (
              <span className="text-base leading-none">⭐</span>
            ) : (
              <span className="flex items-center justify-center w-4 h-4 rounded-sm bg-green-500/20 border border-green-500/30 shrink-0">
                <svg
                  width="9"
                  height="7"
                  viewBox="0 0 9 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.5L3 5.5L8 1"
                    stroke="#4ade80"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            )}
            <span
              className={`text-sm leading-[20px] ${
                tier.highlight ? "text-orangeFB font-bold" : "text-blue70"
              }`}
            >
              {tier.label}{" "}
              <span
                className={`font-normal ${
                  tier.highlight ? "text-orangeFB" : "text-blue46"
                }`}
              >
                ({tier.included ? "Included" : "Not included"})
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
