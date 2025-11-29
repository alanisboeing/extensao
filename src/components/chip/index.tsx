export function Chip({ label }: { label: string }) {
  return (
    <button
      className="
        px-[16px] py-[6px]
        text-[13px] font-medium
        rounded-[14px]
        bg-[#f6f4ff]
        text-[#5b4ef0]
        border border-[rgba(91,78,240,0.35)]
        cursor-pointer
        transition-all duration-200
        shadow-none
        hover:bg-[#efeafa]
        active:scale-[0.98]
      "
    >
      {label}
    </button>
  );
}
