function SettingRow({
  title,
  sub,
  children,
}: {
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-6 border-t border-borderColor/18 px-6 py-[14px]">
      <div>
        <p className="text-sm font-semibold text-gray96">{title}</p>
        <p className="text-xs text-cyan4A7A74">{sub}</p>
      </div>
      <div className="w-[160px] shrink-0">{children}</div>
    </div>
  );
}

export default SettingRow;
