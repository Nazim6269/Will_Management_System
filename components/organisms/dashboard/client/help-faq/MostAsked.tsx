import React from "react";

const MostAsked = () => {
  const faqs = [
    { id: 1, question: "How do I download my will PDF?" },
    { id: 2, question: "How do I pay my invoice?" },
    { id: 3, question: "Can I change my will after it's done?" },
    { id: 4, question: "Is my will legally valid?" },
    { id: 5, question: "How do I book an appointment?" },
  ];

  return (
    <div className="w-full max-w-md rounded-2xl border border-blue16 overflow-hidden bg-blue14   p-4 ">
      {/* Header */}
      <div className="mb-4.f">
        <h2 className="text-blueF0 text-sm font-bold font-plus-jakarta">
          Most Asked
        </h2>
      </div>

      {/* FAQ List */}
      <div className="space-y-1">
        {faqs.map((faq, index) => (
          <div key={faq.id} className="group">
            <button className="w-full flex items-center gap-2 py-2 text-left transition-all">
              {/* Number Badge */}
              <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-lg bg-borderColor/15 border border-borderColor/32 text-violet85 font-bold group-hover:bg-blue66 text-xs group-hover:text-white transition-colors">
                {faq.id}
              </div>

              {/* Question Text */}
              <span className="text-blue46 text-xs font-medium font-plus-jakarta group-hover:text-blueF0 transition-colors">
                {faq.question}
              </span>
            </button>

            {/* Divider (Hidden on last item) */}
            {index !== faqs.length - 1 && (
              <div className="h-[1px] w-full bg-blue16/50" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostAsked;
