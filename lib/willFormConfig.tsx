import { StepConfig } from "@/types/formType";
import {
  PrimaryBeneficiaryForm,
  ResiduaryBeneficiaryForm,
  TestatorInfoForm,
  ImmediateDependentForm,
  AgentConformation,
  ExecutorInfo,
  ExecutorsForm,
  ExecutorPower,
  ExclusionAlert,
  Exclusion,
  ChildrenGuardianShipForm,
  FinalReviewChecklist,
  GenerateWill,
} from "@/components/molecules/agent/willform";

export const willFormSteps: StepConfig[] = [
  {
    id: "step_1",
    label: "Testator Info",
    components: [
      <TestatorInfoForm key="1" />,
      <ImmediateDependentForm key="2" />,
      <AgentConformation key="3" />,
    ],
    validate: () => true, // Replace with actual validation logic
  },
  {
    id: "step_2",
    label: "Beneficiaries",
    components: [
      <PrimaryBeneficiaryForm key="1" />,
      <ResiduaryBeneficiaryForm key="2" />,
    ],
    validate: () => true,
  },
  {
    id: "step_3",
    label: "Executors",
    components: [
      <ExecutorInfo key="1" />,
      <ExecutorsForm key="2" />,
      <ExecutorPower key="3" />,
    ],
    validate: () => true,
  },
  {
    id: "step_4",
    label: "Exclusions",
    components: [<ExclusionAlert key="1" />, <Exclusion key="2" />],
    validate: () => true,
  },
  {
    id: "step_5",
    label: "Guardianship",
    components: [<ChildrenGuardianShipForm key="1" />],
    validate: () => true,
  },
  {
    id: "step_6",
    label: "Review & Generate",
    components: [<FinalReviewChecklist key="1" />, <GenerateWill key="2" />],
    validate: () => true,
  },
];
