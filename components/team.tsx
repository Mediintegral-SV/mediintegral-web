import Image from "next/image"

const teamMembers = [
  {
    name: "Lic. Johana Carolina Rivera Escalante",
    role: "Psicología Infantil",
    description: "Especialista en atención y desarrollo emocional infantil, brindando un espacio seguro y adaptado para los más pequeños.",
    image: "/team-1.jpg",
  },
  {
    name: "Lic. Luis Eduardo Herrera",
    role: "Psicología de Parejas y Adultos",
    description: "Acompañamiento especializado en el manejo de relaciones, resolución de conflictos y bienestar emocional en adultos.",
    image: "/team-2.jpg",
  },
  {
    name: "Lic. Yaneth Sorto",
    role: "Psicología Clínica",
    description: "Enfoque profesional y humano orientado a la superación de condiciones emocionales y mejora a largo plazo.",
    image: "/team-3.jpg",
  },
  {
    name: "Lic. Karla Jovel",
    role: "Psicología Clínica y Consejería",
    description: "Brindando herramientas prácticas con honestidad, respeto y la experiencia necesaria para tu proceso.",
    image: "/team-4.jpg",
  },
  {
    name: "Lic. Francisco Javier Guevara Rojas",
    role: "Especialista en Niños y Adolescentes",
    description: "Enfoque clínico enfocado en guiar a las nuevas generaciones a través de etapas clave de su desarrollo.",
    image: "/team-5.jpg",
  },
]

export function Team() {
  return (
    <section id="nosotros" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-emerald-50/40">
      {/* Fondo luminoso con los árboles sutilmente visibles y claros */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <Image
          src="/team-background.jpg"
          alt="Fondo natural MediIntegral"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Cabecera de la sección */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-sm">
            Nuestro Equipo
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Profesionales comprometidos con tu bienestar
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Un espacio humano, cálido y confidencial guiado por expertos en salud mental.
          </p>
        </div>

        {/* Cuadrícula con los 5 miembros del equipo */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-emerald-200"
            >
              <div>
                <div className="relative h-44 w-full mb-4 overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900 leading-snug">{member.name}</h3>
                <p className="text-xs font-semibold text-emerald-700 mt-1 mb-2.5">{member.role}</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
