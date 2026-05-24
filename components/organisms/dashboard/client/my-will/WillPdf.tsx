"use client";

import {
  PrintTemplateDefinition,
  PrintTemplateProps,
} from "@/types/printType";
import { PrintLayout } from "@/components/templates/PrintLayout";
import { createDefaultPrintConfig } from "@/config/printConfig";

export interface WillData {
  reference?: string;
  date?: string;
  testator?: {
    fullName?: string;
    nric?: string;
    dateOfBirth?: string;
    nationality?: string;
    address?: string;
    maritalStatus?: string;
  };
  declaration?: string;
  beneficiaries?: { label: string; value: string }[];
  residuary?: string;
  executors?: { label: string; value: string }[];
  finalWishes?: { label: string; value: string }[];
  signatures?: { name: string; role: string }[];
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 py-[5px]">
      <span className="sm:w-36 flex-shrink-0 font-sans text-xs sm:text-sm text-[#888]">
        {label}
      </span>
      <span className="font-sans text-sm font-bold text-[#222]">
        {value}
      </span>
    </div>
  );
}

function PartHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2.5 border-b border-zinc-200 pb-2 font-sans text-sm font-bold uppercase tracking-[1.5px] text-blue66">
      {children}
    </p>
  );
}

export const defaultWillData: WillData = {
  reference: "INV-0024",
  date: "27 March 2026",
  testator: {
    fullName: "Sarah Elizabeth Johnson",
    nric: "AB123456C",
    dateOfBirth: "14 March 1985",
    nationality: "British",
    address: "12 Elm Street, London, EC1A 1BB",
    maritalStatus: "Married",
  },
  declaration:
    "I, Sarah Elizabeth Johnson, being of sound mind and memory, hereby revoke all former wills and testamentary dispositions made by me and declare this to be my Last Will and Testament, made this 27th day of March 2026.",
  beneficiaries: [
    { label: "Beneficiary 1", value: "Thomas Johnson (Spouse) - 60%" },
    { label: "Beneficiary 2", value: "Emily Johnson (Child) - 40%" },
    { label: "Residuary", value: "Thomas Johnson" },
  ],
  executors: [
    { label: "Primary Executor", value: "Thomas Johnson" },
    { label: "Secondary Executor", value: "Claire Bennett (Solicitor)" },
  ],
  finalWishes: [
    { label: "Funeral Preference", value: "Burial - Hometown cemetery" },
    { label: "Religious Tradition", value: "Christian" },
  ],
  signatures: [
    { name: "Sarah Johnson", role: "Testator Signature" },
    { name: "James Thornton", role: "Will Writer / Witness" },
  ],
};

export default function WillPDF({
  data,
  config,
  metadata,
}: PrintTemplateProps<WillData>) {
  const d = data ?? defaultWillData;
  const t = d.testator ?? {};

  return (
    <PrintLayout config={config} pageContext={{ currentPage: 1, totalPages: 1, metadata }}>
      <div className="bg-white p-6 sm:p-14 font-serif text-zinc-900">
        {/* Title */}
        <div className="text-center border-b border-zinc-200 pb-7 mb-8">
          <h1 className="text-xl sm:text-[1.75rem] font-bold uppercase tracking-[2px] mb-1">
            Last Will and Testament
          </h1>
          <p className="font-sans text-sm text-[#888]">
            Prepared by Inherix Ltd. &nbsp;|&nbsp; Reference: {d.reference}{" "}
            &nbsp;|&nbsp; Date: {d.date}
          </p>
        </div>

        {/* Part 1 — Testator */}
        <div className="mb-7">
          <PartHeading>Part 1 – Testator</PartHeading>
          <InfoRow label="Full Name" value={t.fullName ?? ""} />
          <InfoRow label="NRIC / Passport" value={t.nric ?? ""} />
          <InfoRow label="Date of Birth" value={t.dateOfBirth ?? ""} />
          <InfoRow label="Nationality" value={t.nationality ?? ""} />
          <InfoRow label="Address" value={t.address ?? ""} />
          <InfoRow label="Marital Status" value={t.maritalStatus ?? ""} />
        </div>

        {/* Part 2 — Declaration */}
        <div className="mb-7">
          <PartHeading>Part 2 – Declaration</PartHeading>
          <p className="font-sans text-[13px] leading-[1.75] text-zinc-600 text-justify">
            {d.declaration}
          </p>
        </div>

        {/* Part 3 — Beneficiaries */}
        <div className="mb-7">
          <PartHeading>Part 3 – Beneficiaries</PartHeading>
          {d.beneficiaries?.map((b) => (
            <InfoRow key={b.label} label={b.label} value={b.value} />
          ))}
        </div>

        {/* Part 4 — Executors */}
        <div className="mb-7">
          <PartHeading>Part 4 – Executors</PartHeading>
          {d.executors?.map((e) => (
            <InfoRow key={e.label} label={e.label} value={e.value} />
          ))}
        </div>

        {/* Part 5 — Final Wishes */}
        <div className="mb-8">
          <PartHeading>Part 5 – Final Wishes</PartHeading>
          {d.finalWishes?.map((f) => (
            <InfoRow key={f.label} label={f.label} value={f.value} />
          ))}
        </div>

        {/* Signatures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-zinc-200 pt-8">
          {d.signatures?.map((sig) => (
            <div
              key={sig.role}
              className="flex flex-col items-center text-center"
            >
              <p className="font-serif text-xl sm:text-[1.75rem] font-medium text-blue66 mb-2">
                {sig.name}
              </p>
              <div className="w-full border-b border-zinc-300 mb-2" />
              <p className="font-sans text-[11px] text-[#888]">{sig.role}</p>
            </div>
          ))}
        </div>
      </div>
    </PrintLayout>
  );
}

export const willTemplateDefinition: PrintTemplateDefinition<WillData> = {
  documentType: "will",
  config: createDefaultPrintConfig({
    documentType: "will",
    label: "Will Document",
    rootClassName: "will-print-root",
  }),
  component: WillPDF,
};
