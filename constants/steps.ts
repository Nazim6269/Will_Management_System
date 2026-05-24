export interface IStep {
  id: number;
  step: string;
  text: string;
}

export const steps: IStep[] = [
  {
    id: 1,
    step: "STEP 1",
    text: "Testator",
  },
  {
    id: 2,
    step: "STEP 2",
    text: "Benificiaries",
  },
  {
    id: 3,
    step: "STEP 3",
    text: "Executor",
  },
  {
    id: 4,
    step: "STEP 4",
    text: "Exclusions",
  },
  {
    id: 5,
    step: "STEP 5",
    text: "Children",
  },
  {
    id: 6,
    step: "STEP 6",
    text: "Review",
  },
];
