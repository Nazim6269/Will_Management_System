function MetaRow({
  label,
  value,
  valueClassName,
}: {
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-center justify-between border-t border-borderColor/3 py-[11px]">
      <span className="text-sm text-blue46">{label}</span>
      <span className={`text-sm font-semibold text-blue70 ${valueClassName}`}>
        {value}
      </span>
    </div>
  );
}

export default MetaRow;
