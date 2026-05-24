import { Toggle } from "./Toggle";

export function PrefRow({
  label,
  sub,
  on,
}: {
  label: string;
  sub: string;
  on: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 mb-4 last:mb-0 py-3.5 ">
      <div>
        <p className="text-sm font-semibold text-gray96 mb-0.5">{label}</p>
        <p className="text-xs text-cyan4A7A74">{sub}</p>
      </div>
      <Toggle defaultOn={on}  />
    </div>
  );
}
