"use client";

import { useForm } from "react-hook-form";
import {
  registerSchema,
  type RegisterFormData,
} from "../../../models/request-schemas/register";
import { cadastrarUsuario } from "../../../services/auth/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { Router, useNavigate } from "react-router-dom";

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await cadastrarUsuario({
        email: data.email,
        senha: data.senha,
        confirmarSenha: data.senha,
        nome: data.nome,
      });

      alert("Usuário cadastrado com sucesso!");
      navigate("/login");
    } catch (error: any) {
      alert(error.message || "Erro ao cadastrar usuário");
    }
  };

  const requiredMessage = "Campo de preenchimento obrigatório";
  const inputClass =
    "w-full rounded-lg border border-[#d8dbe8] bg-[#f9fafb] px-4 py-2.5 text-sm text-[#1f1a3d] " +
    "placeholder:text-[#9ca3af] shadow-[0_1px_2px_rgba(0,0,0,0.03)] " +
    "outline-none focus:ring-2 focus:ring-[#6bd4ff] focus:border-[#5a4df4] transition";

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
          Criar Conta
        </h2>
        <p className="text-sm text-[#6c6a80] text-center mb-6">
          Cadastre-se para explorar talentos e oportunidades.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* NOME */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#1f1a3d]">
              Nome Completo
            </label>
            <input
              type="text"
              {...register("nome", { required: requiredMessage })}
              className={inputClass}
              placeholder="Seu nome completo"
              required
            />
            {errors.nome && (
              <p className="text-red-500 text-sm">
                {errors.nome.message || requiredMessage}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#1f1a3d]">E-mail</label>
            <input
              type="email"
              {...register("email", { required: requiredMessage })}
              className={inputClass}
              placeholder="seu@email.com"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message || requiredMessage}
              </p>
            )}
          </div>

          {/* SENHA */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#1f1a3d]">Senha</label>
            <input
              type="password"
              {...register("senha", { required: requiredMessage })}
              className={inputClass}
              placeholder="Crie uma senha"
              required
            />
            {errors.senha && (
              <p className="text-red-500 text-sm">
                {errors.senha.message || requiredMessage}
              </p>
            )}
          </div>

          {/* CONFIRMAR SENHA */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#1f1a3d]">
              Confirmar Senha
            </label>
            <input
              type="password"
              {...register("confirmarSenha", { required: requiredMessage })}
              className={inputClass}
              placeholder="Repita a senha"
              required
            />
            {errors.confirmarSenha && (
              <p className="text-red-500 text-sm">
                {errors.confirmarSenha.message || requiredMessage}
              </p>
            )}
          </div>

          {/* BOTÃO */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 py-2.5 rounded-xl bg-gradient-to-r from-[#5c63f0] to-[#b88cfe] text-white font-semibold shadow-md hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60"
          >
            {isSubmitting ? "Criando..." : "Criar Conta"}
          </button>
        </form>

        {/* LOGIN */}
        <p className="text-center text-sm text-[#6c6a80] mt-6">
          Já tem uma conta?{" "}
          <a
            href="login"
            className="text-[#5a4df4] font-medium hover:underline"
          >
            Fazer login
          </a>
        </p>
      </div>
    </div>
  );
}
