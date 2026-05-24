import LandingPage from "@/components/pages/marketing/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teojunping",
  description: "Teojunping",
};
export default function Home() {
  return <LandingPage />;
}
