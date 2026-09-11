import { ShieldCheck, HeartHandshake, Lock, Laptop } from "lucide-react"

const benefits = [
  {
    icon: HeartHandshake,
    title: "Atención personalizada",
    description: "Cada proceso se adapta a tus necesidades, ritmo y objetivos.",
  },
  {
    icon: Lock,
    title: "Confidencialidad",
    description: "Tu información y tu historia se manejan con total discreción.",
  },
  {
    icon: ShieldCheck,
    title: "Enfoque humano y ético",
    description: "Trabajamos con respeto, empatía y principios profesionales.",
  },
  {
    icon: Laptop,
    title: "Presencial y en línea",
    description: "Elige la modalidad que mejor se ajuste a tu día a día.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="relative overflow-hidden py-20 md:py-28 bg-slate-900/5 border-y border-cyan-500/15">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Encabezado de la sección */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
            ¿Por qué elegirnos?
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Un acompañamiento en el que puedes confiar
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Pilares fundamentales que garantizan un espacio seguro para tu salud mental.
          </p>
        </div>

        {/* Cuadrícula moderna en formato de bloques limpios */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index}
                className="group relative flex flex-col items-start p-6 rounded-3xl bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-cyan-400 hover:-translate-y-1"
              >
                {/* Icono con contenedor estilizado en tono celeste */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 transition-colors group-hover:bg-cyan-700 group-hover:text-white mb-4 shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}
