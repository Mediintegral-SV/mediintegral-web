import Image from "next/image"

const teamMembers = [
  {
    name: "Lic. Johana Carolina Rivera Escalante",
    role: "Psicóloga Infantil",
    image: "/team-1.jpg",
    whatsapp: "50375687614",
  },
  {
    name: "Lic. Luis Eduardo Herrera",
    role: "Psicólogo (Parejas y Adultos)",
    image: "/team-2.jpg",
    whatsapp: "50375687614",
  },
  {
    name: "Lic. Yaneth Sorto",
    role: "Licenciada en Psicología",
    image: "/team-3.jpg",
    whatsapp: "50375687614",
  },
  {
    name: "Lic. Karla Jovel",
    role: "Psicología Clínica y Consejería",
    image: "/team-4.jpg",
    whatsapp: "50375687614",
  },
  {
    name: "Lic. Francisco Javier Guevara Rojas",
    role: "Especialista en Niños y Adolescentes",
    image: "/team-5.jpg",
    whatsapp: "50375687614",
  },
]

export function Team() {
  return (
    <section id="nosotros" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#1b4d3e] via-[#13382c] to-[#1b4d3e] text-white">
      {/* Fondo nature-bg.jpg con opacidad suave */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/nature-bg.jpg"
          alt="Fondo natural MediIntegral"
          fill
          className="object-cover object-center opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b4d3e]/85 via-[#13382c]/80 to-[#1b4d3e]/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        
        {/* Cabecera */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-200 bg-emerald-900/60 px-4 py-1.5 rounded-full border border-emerald-600/40 shadow-sm">
            Nuestro Equipo
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
            Licenciados que te acompañan
          </h2>
          <p className="mt-2 text-sm md:text-base text-emerald-100/90">
            Profesionales certificados y comprometidos con tu bienestar integral.
          </p>
        </div>

        {/* Tarjetas: Fila superior de 3 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto mb-6">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between rounded-2xl border border-emerald-600/30 bg-white p-5 shadow-xl transition-all hover:border-emerald-500"
            >
              <div>
                <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <h3 className="font-serif text-sm font-bold text-slate-900 leading-snug">{member.name}</h3>
                <p className="text-xs font-semibold text-emerald-700 mt-1 mb-4">{member.role}</p>
              </div>

              <a
                href={`https://wa.me/${member.whatsapp}?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20${encodeURIComponent(member.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-center text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors"
              >
                Agendar cita
              </a>
            </div>
          ))}
        </div>

        {/* Tarjetas: Fila inferior de 2 centradas */}
        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {teamMembers.slice(3, 5).map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between rounded-2xl border border-emerald-600/30 bg-white p-5 shadow-xl transition-all hover:border-emerald-500"
            >
              <div>
                <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <h3 className="font-serif text-sm font-bold text-slate-900 leading-snug">{member.name}</h3>
                <p className="text-xs font-semibold text-emerald-700 mt-1 mb-4">{member.role}</p>
              </div>

              <a
                href={`https://wa.me/${member.whatsapp}?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20${encodeURIComponent(member.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-center text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors"
              >
                Agendar cita
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
