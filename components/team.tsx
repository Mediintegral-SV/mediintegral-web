import Image from "next/image"
import { Button } from "@/components/ui/button"

const team = [
  {
    image: "/team-1.png",
    name: "Lic. Nombre Apellido",
    specialty: "Psicólogo Clínico",
  },
  {
    image: "/team-2.png",
    name: "Lic. Nombre Apellido",
    specialty: "Psicólogo Clínico",
  },
  {
    image: "/team-3.png",
    name: "Lic. Nombre Apellido",
    specialty: "Psicólogo Clínico",
  },
  {
    image: "/team-4.png",
    name: "Lic. Nombre Apellido",
    specialty: "Psicólogo Clínico",
  },
]

export function Team() {
  return (
    <section id="nosotros" className="scroll-mt-16 bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
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
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
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
                  <p className="text-sm text-primary">{member.specialty}</p>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a href="#contacto">Agendar con el especialista</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
