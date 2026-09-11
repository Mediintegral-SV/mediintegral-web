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
    <section id="beneficios" className="relative overflow-hidden py-20 md:py-28 bg-emerald-950/5 border-y border-primary/10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        
        {/* Encabezado de la sección */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full">
            ¿Por qué elegirnos?
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-blue-950 md:text-4xl">
            Un acompañamiento en el que puedes confiar
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Pilares fundamentales que garantizan un espacio seguro para tu salud mental.
          </p>
        </div>

        {/* Cuadrícula moderna en formato de bloques limpios sin efecto "tarjeta repetitiva" */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon
            return (
              <div 
                key={index}
                className="group relative flex flex-col items-start p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/60 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40 hover:-translate-y-1"
              >
                {/* Icono con contenedor estilizado */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground mb-4">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-bold text-blue-950 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-muted-foreground">
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
