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
    image: "/team-4.png",
    name: "Lic. Karla Jovel",
    specialty: "Psicología Clínica y Consejería",
    whatsappUrl: "https://wa.me/50375687614?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20la%20Lic.%20Karla%20Jovel",
  },
  {
    image: "/team-1.png",
    name: "Lic. Francisco Javier Guevara Rojas",
    specialty: "Especialista en Niños y Adolescentes",
    whatsappUrl: "https://wa.me/50375687614?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20el%20Lic.%20Francisco%20Guevara",
  },
]

export function Team() {
  return (
    <section id="nosotros" className="relative scroll-mt-16 overflow-hidden py-20 md:py-28 bg-emerald-950">
      
      {/* Difuminado superior suave para conectar con la sección anterior */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none opacity-80" />

      {/* Fondo elegante en tonos oscuros/verdes con imagen */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/nature-bg.jpg"
          alt="Fondo natural"
          fill
          className="object-cover opacity-20 brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-900/70 to-emerald-950/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-200 bg-emerald-900/80 px-3.5 py-1.5 rounded-full border border-emerald-400/40 shadow-sm">
            Nuestro equipo
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl drop-shadow-sm">
            Licenciados que te acompañan
          </h2>
          <p className="mt-2 text-sm md:text-base text-emerald-100/90 font-medium">
            Profesionales certificados y comprometidos con tu bienestar integral.
          </p>
        </div>

        {/* Cuadrícula uniforme con elementos centrados */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center max-w-5xl mx-auto">
          {team.map((member, index) => (
            <article
              key={index}
              className={`flex flex-col overflow-hidden rounded-2xl border border-emerald-500/30 bg-white/95 backdrop-blur-md shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl w-full ${
                index >= 3 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="h-64 w-full overflow-hidden bg-slate-100 relative">
                <Image
                  src={member.image}
                  alt={`Fotografía de ${member.name}`}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="flex flex-col justify-between flex-1 gap-4 p-5">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                  <p className="mt-1 text-xs text-emerald-700 font-semibold leading-relaxed">{member.specialty}</p>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full text-xs font-medium border-emerald-300 text-emerald-700 hover:bg-emerald-700 hover:text-white transition-colors">
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

      {/* Difuminado inferior suave para conectar con la siguiente sección */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none opacity-80" />
    </section>
  )
}
