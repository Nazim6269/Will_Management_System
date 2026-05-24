function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-borderColor/18 bg-blue10 px-3 py-1 text-xs font-semibold text-blue46">
      {label}
    </span>
  );
}

export default Tag;