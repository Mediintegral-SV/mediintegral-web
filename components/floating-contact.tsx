"use client"

import { MessageCircle, Phone } from "lucide-react"

export function FloatingContact() {
  const whatsappUrl = "https://wa.me/50375687614?text=Hola,%20quisiera%20más%20información%20para%20agendar%20una%20cita."
  const phoneUrl = "tel:+50375687614"

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      
      {/* Botón de Llamada Telefónica */}
      <a
        href={phoneUrl}
        aria-label="Llamar por teléfono"
        className="group relative flex items-center justify-center h-12 w-12 rounded-full bg-cyan-700 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-cyan-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
      >
        <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
        
        {/* Tooltip flotante al pasar el mouse */}
        <span className="absolute right-14 whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 pointer-events-none hidden md:block">
          Llamar ahora
        </span>
      </a>

      {/* Botón de WhatsApp con animación de pulso sutil */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      >
        {/* Efecto de onda sutil detrás de WhatsApp */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        
        <MessageCircle className="h-7 w-7 transition-transform group-hover:scale-110" />

        {/* Tooltip flotante */}
        <span className="absolute right-16 whitespace-nowrap rounded-md bg-slate-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 pointer-events-none hidden md:block">
          Escríbenos por WhatsApp
        </span>
      </a>

    </div>
  )
}
