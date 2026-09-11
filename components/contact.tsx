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
    // Si ya se está enviando, prevenimos envíos duplicados
    if (isSubmitting) {
      e.preventDefault()
      return
    }
    setIsSubmitting(true)
  }

  return (
    <section id="contacto" className="scroll-mt-16 bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Contacto
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground text-balance md:text-4xl">
                Agenda tu cita hoy
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
                Da el primer paso hacia tu bienestar. Completa el formulario o
                contáctanos directamente y con gusto te atenderemos.
              </p>
            </div>

            <ul className="flex flex-col gap-5">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.label === "WhatsApp" ? "_blank" : undefined}
                        rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-lg shadow-primary/5 md:p-8">
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
                <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="Tu nombre completo"
                  className="h-11 rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="telefono" className="text-sm font-medium text-foreground">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  disabled={isSubmitting}
                  placeholder="+503 0000-0000"
                  className="h-11 rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="tipo" className="text-sm font-medium text-foreground">
                  Tipo de Terapia
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  defaultValue=""
                  required
                  disabled={isSubmitting}
                  className="h-11 rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
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
                <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  disabled={isSubmitting}
                  placeholder="Cuéntanos brevemente cómo podemos ayudarte"
                  className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando solicitud..." : "Enviar Solicitud"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
