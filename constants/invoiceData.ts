export const invoicesData = [
  {
    id: "INV-0031",
    clientName: "Sarah Johnson",
    email: "sarah@example.com",
    feeType: "Will-writing",
    amount: 750,
    issued: "01 Apr 2026",
    due: "15 Apr 2026",
    status: "Paid",
  },
  {
    id: "INV-0030",
    clientName: "Michael Brown",
    email: "michael@example.com",
    feeType: "Revision",
    amount: 350,
    issued: "28 Mar 2026",
    due: "11 Apr 2026",
    status: "Unpaid",
  },
  {
    id: "INV-0029",
    clientName: "Emma Williams",
    email: "emma@example.com",
    feeType: "Will-writing",
    amount: 750,
    issued: "25 Mar 2026",
    due: "08 Apr 2026",
    status: "Pending",
  },
  {
    id: "INV-0028",
    clientName: "David Clarke",
    email: "david@example.com",
    feeType: "Vault-storage",
    amount: 120,
    issued: "20 Mar 2026",
    due: "03 Apr 2026",
    status: "Paid",
  },
  {
    id: "INV-0027",
    clientName: "Jennifer Scott",
    email: "jennifer@example.com",
    feeType: "Will-writing",
    amount: 800,
    issued: "01 Mar 2026",
    due: "15 Mar 2026",
    status: "Overdue",
  },

  // Generate more realistic entries
  ...Array.from({ length: 25 }, (_, i) => {
    const index = 25 - i;
    const feeTypes = ["Will-writing", "Revision", "Vault-storage"];
    const statuses = ["Paid", "Unpaid", "Pending", "Overdue"];

    return {
      id: `INV-${String(25 - i).padStart(4, "0")}`,
      clientName: `Client ${index}`,
      email: `client${index}@example.com`,
      feeType: feeTypes[i % feeTypes.length],
      amount: [120, 350, 750, 800][i % 4],
      issued: `0${(i % 9) + 1} Feb 2026`,
      due: `1${(i % 9) + 1} Feb 2026`,
      status: statuses[i % statuses.length],
    };
  }),
];
