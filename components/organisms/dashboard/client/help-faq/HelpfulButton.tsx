import { ThumbsDown, ThumbsUp } from "lucide-react";

interface HelpfulButtonProps {
  active: boolean;
  type: "yes" | "no";
  onClick: () => void;
}

export function HelpfulButton({
  active,
  type,
  onClick,
}: HelpfulButtonProps) {
  const isYes = type === "yes";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-200
        ${
          active
            ? isYes
              ? "border-green-500/40 bg-green-950/50 text-green-400"
              : "border-red-500/40 bg-red-950/50 text-red-400"
            : "border-borderColor/18 bg-blue10 text-blue70 hover:bg-blue14"
        }`}
    >
      {isYes ? <ThumbsUp size={12} /> : <ThumbsDown size={12} />}
      {isYes ? "Yes" : "No"}
    </button>
  );
}
