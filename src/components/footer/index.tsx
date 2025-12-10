export function Footer() {
  return (
    <footer className="bg-[#0d1021] text-white mt-12">
      <div className="max-w-[960px] mx-auto px-6 py-10 flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-6 items-start">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-[10px] bg-[linear-gradient(135deg,#6a5af9,#8d89ff)] text-white font-semibold text-[18px] flex items-center justify-center">
                RT
              </div>
              <span className="text-lg font-semibold">Rede de Talentos</span>
            </div>

            <p className="text-sm text-[#e5e5f5] leading-relaxed">
              Conectando talentos e acelerando inovação através de mentorias
              especializadas para o crescimento de negócios tecnológicos.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-[#9fb4ff]">Contato</h4>
            <a
              href="mailto:contato@redetalentos.com"
              className="text-sm text-[#e5e5f5] hover:text-white transition"
            >
              contato@redetalentos.com
            </a>
            <a
              href="tel:+5548999999999"
              className="text-sm text-[#e5e5f5] hover:text-white transition"
            >
              (48) 9 9999-9999
            </a>
            <span className="text-sm text-[#e5e5f5]">Criciúma, SC</span>
          </div>
        </div>

        <div className="border-t border-[#1c2038] pt-4">
          <p className="text-center text-xs text-[#c8c8de]">
            © 2025 RedeTalentos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
