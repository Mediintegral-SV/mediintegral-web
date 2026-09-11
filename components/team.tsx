import Image from "next/image"

export function Team() {
  return (
    <section id="nosotros" className="relative py-20 md:py-28 overflow-hidden bg-slate-900 text-white">
      {/* Imagen de fondo de los árboles con un filtro degradado verde esmeralda más notorio */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/team-background.jpg" // O la ruta de tu imagen de árboles
          alt="Equipo MediIntegral"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
        {/* Capa de degradado verde esmeralda intenso para teñir el fondo manteniendo los árboles */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-emerald-900/70 to-teal-950/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        
        {/* Cabecera de la sección */}
        <div className="mx-auto max-w-2xl text-center">
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

        {/* Aquí iría la cuadrícula o contenido de los miembros del equipo que ya tengas */}
        
      </div>
    </section>
  )
}
