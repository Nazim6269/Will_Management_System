import { NoteIcon } from "@/components/atoms/icons";
import React from "react";

const ImportantNote = () => {
  return (
    <div className="bg-blue14 border border-borderColor/18 p-3 sm:p-5 rounded-xl space-y-2">
      <div className="flex items-center gap-1.5">
        <NoteIcon />{" "}
        <h2 className="text-base font-bold text-gray96">Important Note</h2>
      </div>
      <p className="text-xs font-normal text-cyan65 leading-[140%]">
        This Asset Register is separate from the will document. It will be
        downloaded as a standalone PDF for the executor's reference only.
      </p>
    </div>
  );
};

export default ImportantNote;
