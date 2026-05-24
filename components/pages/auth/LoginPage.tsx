"use client";

import {
  PdfIcon,
  CreateIcon,
  FileIcon,
  MultiUserIcon,
  ManagementIcon,
} from "@/components/atoms/icons";
import LoginForm from "@/components/molecules/agent/LoginForm";
import LoginHeader from "@/components/molecules/auth/LoginHeader";
import Container from "@/components/templates/Container";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const login = [
  { icon: MultiUserIcon, label: "Create & manage client accounts" },
  { icon: FileIcon, label: "Fill structured will forms digitally" },
  { icon: PdfIcon, label: "Auto-generate formatted PDF wills" },
  { icon: CreateIcon, label: "Create, send & manage client invoices" },
  { icon: ManagementIcon, label: "Manage appointment schedules" },
];

const Page = () => {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") as "agent" | "client";

  return (
    <Container className="mt-20 flex flex-col lg:flex-row items-stretch">
      {/* LEFT PANEL */}
      <div
        className="
        p-4 md:py-16 md:px-13
        border border-borderColor/18 lg:border-r-0
        rounded-2xl lg:rounded-l-2xl lg:rounded-r-none
        relative login-bg overflow-hidden
      "
      >
        {/* Glow */}
        <div className="circular-glow-green absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
        <div className="circular-glow absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex justify-center items-center gap-2 bg-cyan5212/10 rounded-full border border-cyan5212 py-2 px-3 w-fit mb-[2.013rem]">
            <div className="w-[0.438rem] h-[0.438rem] rounded-full bg-cyan52" />
            <span className="text-[#9EF5E8] text-sm font-bold">
              Will writer portal
            </span>
          </div>

          <h2 className="text-3xl md:text-[2.422rem] text-gray96 font-black leading-[51px] tracking-[-1px] mb-[1.063rem]">
            Your professional{" "}
            <span className="gradient-text-two">agent workspace</span>
          </h2>

          <p className="text-lg text-cyan65">
            Manage your clients, prepare will documents, generate PDFs, create
            invoices, and handle appointments all from your dedicated dashboard.
          </p>

          <ul className="space-y-4 mt-[2.816rem]">
            {login.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-cyan65">
                <div className="w-8 h-8 rounded-xl bg-cyan5212/12 border border-cyan5212/28 flex items-center justify-center p-1.5">
                  <item.icon />
                </div>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row items-center gap-3 mt-9">
          <div className="flex flex-col gap-1 rounded-[0.875rem] p-4.5 bg-cyan5212/6 border border-cyan5212/15 md:max-w-54 w-full">
            <span className="text-2xl text-cyan64 font-black">200+</span>
            <p className="text-sm font-medium text-cyan4A7A74">
              Certified agents
            </p>
          </div>

          <div className="flex flex-col gap-1 rounded-[0.875rem] p-4.5 bg-cyan5212/6 border border-cyan5212/15 md:max-w-54 w-full">
            <span className="text-2xl text-cyan64 font-black">5k+</span>
            <p className="text-sm font-medium text-cyan4A7A74">
              will completed
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="h-auto md:h-[6.688rem] text-lg text-cyan65 mt-5 py-4 md:py-8 border-t border-borderColor/28">
          Want to join as will writer?{" "}
          <Link href="" className="font-bold capitalize">
            apply here
          </Link>
        </p>
      </div>

      {/* RIGHT PANEL */}
      <div
        className="
        w-full p-4 md:py-16 md:px-13
        border border-borderColor/18
        rounded-2xl lg:rounded-r-2xl lg:rounded-l-none
      "
      >
        <LoginHeader role={role} />

        <LoginForm />
      </div>
    </Container>
  );
};

export default function LoginPage() {
  return (
    <Suspense fallback={<Loader2 />}>
      <Page />
    </Suspense>
  );
}
