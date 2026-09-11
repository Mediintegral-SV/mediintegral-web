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
    image: "/team-4.png", // Asegúrate de tener esta imagen en la carpeta public
    name: "Lic. Karla Jovel",
    specialty: "Psicología Clínica y Consejería",
    whatsappUrl: "https://wa.me/50375687614?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20la%20Lic.%20Karla%20Jovel",
  },
  {
    image: "/team-1.png", // Imagen temporal o reutilizada para el 5to integrante mientras subes su foto oficial
    name: "Lic. Francisco Javier Guevara Rojas",
    specialty: "Especialista en Niños y Adolescentes",
    whatsappUrl: "https://wa.me/50375687614?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20el%20Lic.%20Francisco%20Guevara",
  },
]

export function Team() {
  return (
    <section id="nosotros" className="relative scroll-mt-16 overflow-hidden py-16 md:py-24">
      {/* Fondo de naturaleza personalizado con la foto de los árboles y luz */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/nature-bg.jpg" // Nombre del archivo de tu imagen de fondo
          alt="Fondo natural de bosque y luz"
          fill
          className="object-cover opacity-20 blur-[2px]"
        />
        {/* Capa de luz blanca translúcida para asegurar que no irrite la vista y el texto resalte */}
        <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nuestro equipo
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-blue-950 text-balance md:text-4xl">
            Licenciados que te acompañan
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Profesionales certificados y comprometidos con tu bienestar integral.
          </p>
        </div>

        {/* Cuadrícula para los 5 profesionales */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
              <div className="flex flex-col justify-between flex-1 gap-4 p-5">
                <div>
                  <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
                  <p className="mt-1 text-xs text-primary font-medium leading-relaxed">{member.specialty}</p>
                </div>
                <Button asChild variant="outline" size="sm" className="w-full text-xs">
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
