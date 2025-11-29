export function Header() {
  return (
    <header
      className="
        w-full
        p-[14px_24px]
        flex items-center justify-between gap-4
        bg-white
        rounded-[18px]
        shadow-[0_12px_30px_rgba(20,20,40,0.07)]
        border border-[rgba(118,104,255,0.08)]
        mb-[28px]
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            w-10 h-10
            rounded-[10px]
            bg-[linear-gradient(135deg,#6a5af9,#8d89ff)]
            text-white font-semibold text-[18px]
            flex items-center justify-center
          "
        >
          RT
        </div>

        <div>
          <p className="text-[1rem] font-semibold m-0 leading-none">
            Rede de Talentos
          </p>
          <span className="text-[0.83rem] text-[#7c7c92] leading-none">
            Match de especialistas
          </span>
        </div>
      </div>

      <button
        className="
          px-4 py-[9px]
          border border-[#c9c7ff]
          rounded-[10px]
          font-medium
          text-[#5146d6]
          bg-[#f7f5ff]
          cursor-pointer
          transition-all duration-200
          hover:bg-[#edeaff] hover:border-[#8d89ff]
        "
      >
        Administrador
      </button>
    </header>
  );
}
