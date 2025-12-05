import { useState, type FormEvent } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ email, senha });

    // aqui você faz a autenticação
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f7] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-[0_12px_30px_rgba(20,20,40,0.07)] border border-[rgba(118,104,255,0.08)]">
        {/* LOGO */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6a5af9] to-[#8d89ff] text-white font-semibold flex items-center justify-center text-xl">
            RT
          </div>

          <div>
            <p className="text-lg font-semibold text-[#1f1a3d]">
              Rede de Talentos
            </p>
            <span className="text-sm text-[#7c7c92]">
              Match de especialistas
            </span>
          </div>
        </div>

        {/* TÍTULO */}
        <h2 className="text-2xl font-semibold text-[#1f1a3d] mb-2 text-center">
          Acesse sua Conta
        </h2>
        <p className="text-sm text-[#6c6a80] text-center mb-6">
          Entre para continuar explorando talentos e oportunidades.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#1f1a3d]">E-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-xl px-4 py-2.5 bg-[#fbfbff] text-[#1f1a3d] border-[#d2ceff] outline-none focus:border-[#6a5af9] transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#1f1a3d]">Senha</label>
            <input
              type="password"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="border rounded-xl px-4 py-2.5 bg-[#fbfbff] text-[#1f1a3d] border-[#d2ceff] outline-none focus:border-[#6a5af9] transition-all"
            />
          </div>

          {/* BOTÃO */}
          <button
            type="submit"
            className="mt-2 py-2.5 rounded-xl bg-gradient-to-r from-[#5c63f0] to-[#b88cfe] text-white font-semibold shadow-md hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Entrar
          </button>
        </form>

        {/* RODAPÉ */}
        <p className="text-center text-sm text-[#6c6a80] mt-6">
          Esqueceu a senha?{" "}
          <a href="#" className="text-[#5a4df4] font-medium hover:underline">
            Recuperar acesso
          </a>
        </p>
      </div>
    </div>
  );
}
