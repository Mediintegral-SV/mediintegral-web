"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+503 7568-7614",
    href: "tel:+50375687614",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "mediintegral.sv@gmail.com",
    href: "mailto:mediintegral.sv@gmail.com",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. Calle La Ceiba, Col. Escalón, Edif. Zona 49, Frente al Centro Comercial Vías Españolas, San Salvador",
    href: null,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Escríbenos por WhatsApp",
    href: "https://wa.me/50375687614?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios",
  },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (isSubmitting) {
      e.preventDefault()
      return
    }
    setIsSubmitting(true)
  }

  return (
    <section id="contacto" className="scroll-mt-16 bg-slate-900/5 py-20 md:py-28 border-t border-cyan-500/15">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Información de contacto */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full shadow-sm mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                Contacto
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-4xl text-balance">
                Agenda tu cita hoy
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 text-pretty">
                Da el primer paso hacia tu bienestar. Completa el formulario o
                contáctanos directamente y con gusto te atenderemos.
              </p>
            </div>

            <ul className="flex flex-col gap-5">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 shadow-sm">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.label === "WhatsApp" ? "_blank" : undefined}
                        rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                        className="text-sm text-slate-600 transition-colors hover:text-cyan-700"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-600">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Formulario de contacto */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-cyan-500/5 md:p-8 backdrop-blur-sm">
            <form 
              action="https://formspree.io/f/xnpqwgwl" 
              method="POST" 
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              {/* Redirección tras el envío */}
              <input type="hidden" name="_next" value="https://mediintegral.com.sv/#contacto" />
              
              {/* Campo trampa invisible para bots */}
              <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <div className="flex flex-col gap-2">
                <label htmlFor="nombre" className="text-sm font-semibold text-slate-900">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="Tu nombre completo"
                  className="h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="telefono" className="text-sm font-semibold text-slate-900">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  disabled={isSubmitting}
                  placeholder="+503 0000-0000"
                  className="h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="tipo" className="text-sm font-semibold text-slate-900">
                  Tipo de Terapia
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  defaultValue=""
                  required
                  disabled={isSubmitting}
                  className="h-11 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-900 outline-none transition-colors focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-50"
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option value="Psicología Clínica (Adultos)">Psicología Clínica (Adultos)</option>
                  <option value="Psicología Infantil y Adolescentes">Psicología Infantil y Adolescentes</option>
                  <option value="Terapia Familiar y de Pareja">Terapia Familiar y de Pareja</option>
                  <option value="Evaluaciones Psicológicas">Evaluaciones Psicológicas</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="mensaje" className="text-sm font-semibold text-slate-900">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  disabled={isSubmitting}
                  placeholder="Cuéntanos brevemente cómo podemos ayudarte"
                  className="rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-12 rounded-2xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold tracking-wide shadow-md transition-all duration-200" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando solicitud..." : "Enviar Solicitud"}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
