"use client";

import { useForm } from "react-hook-form";
import GenericDropDown from "@/components/atoms/GenericDropDown";
import SettingRow from "./SettingRow";
import {
  THEME_OPTIONS,
  CURRENCY_OPTIONS,
  LANGUAGE_OPTIONS,
} from "@/constants/setting";

const labelClass =
  "text-blue46 mb-[0.438rem] text-xs uppercase font-semibold tracking-[0.3px] leading-[19.2px]";

interface FormValues {
  language: string;
  currency: string;
  theme: string;
}

export default function DisplayLocalisationCard() {
  const { register } = useForm<FormValues>({
    defaultValues: { language: "en_gb", currency: "gbp", theme: "dark" },
  });

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-borderColor/18 bg-blue14">
      {/* Card header */}
      <div className="px-6 py-5 border-b border-borderColor/18">
        <h2 className="text-base font-extrabold text-gray96 mb-0.5">
          Display &amp; Localisation
        </h2>
        <p className="text-xs text-cyan4A7A74">
          Language, timezone and date format
        </p>
      </div>

      {/* Regional section label */}
      <p className="text-cyan4A7A74 text-xs font-bold uppercase tracking-[0.8px] px-6 pt-4 pb-2">
        Regional
      </p>

      <SettingRow title="Language" sub="Interface display language">
        <GenericDropDown
          {...register("language")}
          options={LANGUAGE_OPTIONS}
          placeholder="English (UK)"
        />
      </SettingRow>

      <SettingRow title="Currency" sub="Default currency for invoices">
        <GenericDropDown
          {...register("currency")}
          options={CURRENCY_OPTIONS}
          placeholder="GBP - £"
        />
      </SettingRow>

      {/* Appearance section label */}
      <p className="text-cyan4A7A74 text-xs font-bold uppercase tracking-[0.8px] px-6 pt-4 pb-2">
        Appearance
      </p>

      <SettingRow title="Theme" sub="Light or dark mode preference">
        <GenericDropDown
          {...register("theme")}
          options={THEME_OPTIONS}
          placeholder="Dark"
        />
      </SettingRow>
    </div>
  );
}
