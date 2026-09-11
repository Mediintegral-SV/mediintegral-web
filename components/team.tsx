import Image from "next/image"

const teamMembers = [
  {
    name: "Lic. Johana Carolina Rivera Escalante",
    role: "Psicóloga Infantil",
    image: "/team-1.png",
    whatsapp: "50375687614",
  },
  {
    name: "Lic. Luis Eduardo Herrera",
    role: "Psicólogo (Parejas y Adultos)",
    image: "/team-2.png",
    whatsapp: "50375687614",
  },
  {
    name: "Lic. Yaneth Sorto",
    role: "Licenciada en Psicología",
    image: "/team-3.png",
    whatsapp: "50375687614",
  },
  {
    name: "Lic. Karla Jovel",
    role: "Psicología Clínica y Consejería",
    image: "/team-4.png",
    whatsapp: "50375687614",
  },
  {
    name: "Lic. Francisco Javier Guevara Rojas",
    role: "Especialista en Niños y Adolescentes",
    image: "/team-5.png",
    whatsapp: "50375687614",
  },
]

export function Team() {
  return (
    <section id="nosotros" className="relative py-24 md:py-32 overflow-hidden bg-slate-900 text-white">
      {/* Fondo de naturaleza optimizado con capa de contraste */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/nature-bg.jpg"
          alt="Fondo natural MediIntegral"
          fill
          className="object-cover object-center scale-105 filter brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Cabecera con estilo de píldora flotante */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 shadow-lg backdrop-blur-md mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-300">
              Nuestro Equipo
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-md">
            Licenciados que te acompañan
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-200/90 font-light drop-shadow">
            Profesionales certificados y comprometidos con tu bienestar integral.
          </p>
        </div>

        {/* Tarjetas: Fila superior de 3 */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-8">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div 
              key={index} 
              className="group flex flex-col justify-between rounded-3xl border border-white/15 bg-white/95 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-emerald-500/10"
            >
              <div>
                <div className="relative h-56 w-full mb-5 overflow-hidden rounded-2xl bg-slate-100 shadow-inner">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900 leading-snug">{member.name}</h3>
                <p className="text-xs font-semibold text-emerald-700 mt-1 mb-6">{member.role}</p>
              </div>

              <a
                href={`https://wa.me/${member.whatsapp}?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20${encodeURIComponent(member.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-center text-xs font-bold tracking-wide text-white bg-emerald-700 hover:bg-emerald-800 rounded-2xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg"
              >
                <span>Agendar cita</span>
              </a>
            </div>
          ))}
        </div>

        {/* Tarjetas: Fila inferior de 2 centradas */}
        <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {teamMembers.slice(3, 5).map((member, index) => (
            <div 
              key={index} 
              className="group flex flex-col justify-between rounded-3xl border border-white/15 bg-white/95 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-emerald-500/10"
            >
              <div>
                <div className="relative h-56 w-full mb-5 overflow-hidden rounded-2xl bg-slate-100 shadow-inner">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900 leading-snug">{member.name}</h3>
                <p className="text-xs font-semibold text-emerald-700 mt-1 mb-6">{member.role}</p>
              </div>

              <a
                href={`https://wa.me/${member.whatsapp}?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20${encodeURIComponent(member.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-center text-xs font-bold tracking-wide text-white bg-emerald-700 hover:bg-emerald-800 rounded-2xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg"
              >
                <span>Agendar cita</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
