function DateChip({ day, month }: { day: string; month: string }) {
  return (
    <div className="flex min-w-[68px] flex-col items-center rounded-[10px] border border-borderColor/32 bg-borderColor/15 px-4 py-4 shrink-0">
      <span className="text-[1.75rem] font-extrabold leading-7 text-blue85">
        {day}
      </span>
      <span className="mt-1 text-xs font-bold tracking-[1px] uppercase text-blue46">
        {month}
      </span>
    </div>
  );
}

export default DateChip;