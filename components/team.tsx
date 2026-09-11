import Image from "next/image"
import { Button } from "@/components/ui/button"

const team = [
  {
    image: "/team-1.png",
    name: "Lic. Johana Carolina Rivera Escalante",
    specialty: "Psicóloga Infantil",
    whatsappUrl: "https://wa.me/50375687614?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20la%20Lic.%20Johana%20Rivera",
  },
  {
    image: "/team-2.png",
    name: "Lic. Luis Eduardo Herrera",
    specialty: "Psicólogo (Parejas y Adultos)",
    whatsappUrl: "https://wa.me/50375687614?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20el%20Lic.%20Luis%20Eduardo%20Herrera",
  },
  {
    image: "/team-3.png",
    name: "Lic. Yaneth Sorto",
    specialty: "Licenciada en Psicología",
    whatsappUrl: "https://wa.me/50375687614?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20la%20Lic.%20Yaneth%20Sorto",
  },
  {
    image: "/team-4.png", // <--- Corregido para que apunte correctamente a la imagen 4
    name: "Lic. Karla Jovel",
    specialty: "Psicología Clínica y Consejería",
    whatsappUrl: "https://wa.me/50375687614?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20la%20Lic.%20Karla%20Jovel",
  },
  {
    image: "/team-1.png", // Nota: Si tienes una foto 5, puedes cambiar esta ruta por /team-5.png cuando la subas
    name: "Lic. Francisco Javier Guevara Rojas",
    specialty: "Especialista en Niños y Adolescentes",
    whatsappUrl: "https://wa.me/50375687614?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20el%20Lic.%20Francisco%20Guevara",
  },
]

export function Team() {
  return (
    <section id="nosotros" className="relative scroll-mt-16 overflow-hidden py-14 md:py-20 bg-emerald-950">
      {/* Fondo de naturaleza con filtro verde bosque elegante */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/nature-bg.jpg"
          alt="Fondo natural de bosque"
          fill
          className="object-cover opacity-35 brightness-90 contrast-105"
        />
        {/* Degradado suave en tonos esmeralda oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-emerald-950/75 to-emerald-950/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-900/60 px-3 py-1 rounded-full border border-emerald-500/30">
            Nuestro equipo
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
            Licenciados que te acompañan
          </h2>
          <p className="mt-2 text-sm md:text-base text-emerald-100/80">
            Profesionales certificados y comprometidos con tu bienestar integral.
          </p>
        </div>

        {/* Cuadrícula optimizada: 3 arriba y 2 abajo centrados */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {team.map((member, index) => (
            <article
              key={index}
              className={`flex flex-col overflow-hidden rounded-2xl border border-emerald-500/20 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                index >= 3 ? "lg:max-w-none lg:col-span-1 lg:mx-auto sm:col-span-1" : ""
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={member.image}
                  alt={`Fotografía de ${member.name}`}
                  width={480}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between flex-1 gap-4 p-5">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                  <p className="mt-1 text-xs text-primary font-semibold leading-relaxed">{member.specialty}</p>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full text-xs font-medium border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors">
                  <a 
                    href={member.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Agendar cita
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
