import { Link, NavLink, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { clearToken } from "../../services/auth/token";

interface HeaderProps {
  showAdminLogin?: boolean;
}

export function Header({ showAdminLogin = true }: HeaderProps) {
  const navigate = useNavigate();
  const hasToken =
    typeof window !== "undefined" ? !!localStorage.getItem("token") : false;

  const linkBase = "px-2 py-1 text-sm font-medium transition";

  const handleLogout = () => {
    clearToken();
    navigate("/login");
  };

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        w-full
        p-[14px_24px]
        flex items-center justify-between gap-4
        bg-white/95 backdrop-blur
        shadow-[0_12px_30px_rgba(20,20,40,0.07)]
        border-b border-[rgba(118,104,255,0.12)]
      "
    >
      <Link
        to="/"
        className="flex items-center gap-3 cursor-pointer select-none"
      >
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
      </Link>

      <div className="flex items-center gap-3">
        {hasToken && (
          <>
            <NavLink
              to="/admin/talento"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? "text-[#5a4df4] font-semibold"
                    : "text-[#5146d6] hover:text-[#5a4df4]"
                }`
              }
            >
              Talentos
            </NavLink>

            <NavLink
              to="/admin/atuacao"
              className={({ isActive }) =>
                `${linkBase} ${
                  isActive
                    ? "text-[#5a4df4] font-semibold"
                    : "text-[#5146d6] hover:text-[#5a4df4]"
                }`
              }
            >
              Atuacoes
            </NavLink>
          </>
        )}

        {hasToken ? (
          <button
            onClick={handleLogout}
            className="
              w-10 h-10
              rounded-full
              flex items-center justify-center
              text-[#5a4df4]
              border border-[#d2ceff]
              bg-white
              cursor-pointer
              transition-all duration-200
              hover:border-[#8d89ff]
              hover:text-[#4a3fdc]
              active:translate-y-[1px]
            "
            title="Sair"
            aria-label="Sair"
          >
            <LogOut className="w-5 h-5" />
          </button>
        ) : (
          showAdminLogin && (
            <Link
              to="/login"
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
              Entrar como administrador
            </Link>
          )
        )}
      </div>
    </header>
  );
}
