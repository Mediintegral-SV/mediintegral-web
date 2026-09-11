import Image from "next/image"

export function Team() {
  return (
    <section id="nosotros" className="relative py-20 md:py-28 overflow-hidden bg-slate-900 text-white">
      {/* Imagen de fondo de los árboles con un filtro degradado verde esmeralda */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/team-background.jpg"
          alt="Equipo MediIntegral"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        {/* Capa de degradado verde esmeralda intenso para teñir el fondo manteniendo los árboles */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/85 via-emerald-900/75 to-teal-950/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        
        {/* Cabecera de la sección */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-900/60 px-3.5 py-1.5 rounded-full border border-emerald-700/50 shadow-sm backdrop-blur-sm">
            Nuestro Equipo
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-white md:text-4xl">
            Profesionales comprometidos con tu bienestar
          </h2>
          <p className="mt-2 text-sm md:text-base text-emerald-100/80">
            Un espacio humano, cálido y confidencial guiado por expertos en salud mental.
          </p>
        </div>

        {/* Cuadrícula con los miembros del equipo */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Miembro 1 */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 shadow-xl transition-all hover:bg-white/15">
            <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl bg-slate-800">
              <Image
                src="/team-1.jpg"
                alt="Psicólogo clínico"
                fill
                className="object-cover object-center"
              />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">Lic. Especialista</h3>
            <p className="text-xs font-medium text-emerald-300 mb-2">Psicología Clínica y Terapia</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Especialista en acompañamiento emocional para adultos y adolescentes con enfoque integral.
            </p>
          </div>

          {/* Miembro 2 */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 shadow-xl transition-all hover:bg-white/15">
            <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl bg-slate-800">
              <Image
                src="/team-2.jpg"
                alt="Psicóloga infantil"
                fill
                className="object-cover object-center"
              />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">Lic. Especialista</h3>
            <p className="text-xs font-medium text-emerald-300 mb-2">Psicología Infantil y Familiar</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Enfoque especializado en dinámicas familiares y desarrollo emocional temprano.
            </p>
          </div>

          {/* Miembro 3 */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 shadow-xl transition-all hover:bg-white/15">
            <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl bg-slate-800">
              <Image
                src="/team-3.jpg"
                alt="Psicoterapeuta"
                fill
                className="object-cover object-center"
              />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">Lic. Especialista</h3>
            <p className="text-xs font-medium text-emerald-300 mb-2">Psicoterapia y Bienestar</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Comprometido en brindar herramientas prácticas para la gestión de la ansiedad y el estrés.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
