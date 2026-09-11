import Image from "next/image"
import { Button } from "@/components/ui/button"

const team = [
  {
    image: "/team-1.png",
    name: "Lic. Johana Rivera",
    specialty: "Psicóloga Infantil y Juvenil",
    whatsappUrl: "https://wa.me/50375687614?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20la%20Lic.%20Johana%20Rivera",
  },
  {
    image: "/team-2.png",
    name: "Lic. Francisco Guevara",
    specialty: "Psicólogo Clínico",
    whatsappUrl: "https://wa.me/50375687614?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20el%20Lic.%20Francisco%20Guevara",
  },
  {
    image: "/team-3.png",
    name: "Lic. Andrea Renderos",
    specialty: "Especialista en Terapia de Lenguaje",
    whatsappUrl: "https://wa.me/50375687614?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20la%20Lic.%20Andrea%20Renderos",
  },
  {
    image: "/team-1.png", // Temporal hasta colocar la 4ta foto oficial
    name: "Lic. Especialista",
    specialty: "Psicología Clínica",
    whatsappUrl: "https://wa.me/50375687614?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20el%20especialista",
  },
]

export function Team() {
  return (
    <section id="nosotros" className="relative scroll-mt-16 overflow-hidden py-16 md:py-24">
      {/* Fondo de paisaje natural con baja opacidad y desenfoque para descanso visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-img.jpg" // Puedes cambiar esta ruta por una foto de un paisaje natural si lo prefieres
          alt="Paisaje de fondo natural"
          fill
          className="object-cover opacity-15 blur-sm"
        />
        {/* Capa sutil para proteger la lectura y evitar fatiga visual */}
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nuestro equipo
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground text-balance md:text-4xl">
            Licenciados que te acompañan
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Profesionales certificados y comprometidos con tu bienestar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <article
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/95 shadow-sm backdrop-blur transition-all hover:shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={member.image}
                  alt={`Fotografía de ${member.name}`}
                  width={480}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.specialty}</p>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a 
                    href={member.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Agendar con el especialista
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
