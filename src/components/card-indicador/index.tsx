import React from "react";

export interface CardIndicadorProps {
  valor: string | number;
  label: string;
  icone?: React.ReactNode;
  background?: string; // aceita gradient, hex, rgb...
}

export default function CardIndicador({
  valor,
  label,
  icone,
  background,
}: CardIndicadorProps) {
  return (
    <div
      className="
        w-[15rem] h-[6rem]
        p-4 rounded-2xl text-white
        flex justify-between items-center
        shadow-lg hover:shadow-xl
        transition-all duration-150 ease-out
        hover:-translate-y-[2px]
      "
      style={{
        background: background || "linear-gradient(135deg, #8c73ff, #66c8ff)",
      }}
    >
      <div className="flex flex-col items-start gap-1">
        <span className="text-[1.45rem] font-semibold leading-none">
          {valor}
        </span>

        <span className="text-sm font-medium opacity-95 leading-tight">
          {label}
        </span>
      </div>

      <div className="text-[30px] opacity-90 flex items-center justify-center">
        {icone}
      </div>
    </div>
  );
}
