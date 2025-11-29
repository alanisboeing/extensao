import React from "react";

interface BotaoProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function Botao({ label, onClick, type = "button" }: BotaoProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="
        bg-gradient-to-r from-[#5c63f0] to-[#b88cfe]
        text-white font-semibold
        rounded-lg
        px-6 py-2
        transition
        duration-200
        cursor-pointer
        hover:opacity-90
        active:scale-95
      "
    >
      {label}
    </button>
  );
}
