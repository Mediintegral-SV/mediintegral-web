export function MissionVision() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Nuestra Filosofía
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Comprometidos con tu Salud Mental
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Los principios y propósitos que guían cada uno de nuestros espacios terapéuticos.
          </p>
        </div>

        {/* Cuadrícula de Misión, Visión, Promesa y Experiencia */}
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Misión */}
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/40 p-8 shadow-sm transition-all hover:shadow-md">
            <h3 className="font-serif text-xl font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
              MISIÓN
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              Ayudar a superar condiciones emocionales, a través de bases psicológicas para una mejoría a largo plazo.
            </p>
          </div>

          {/* Visión */}
          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/40 p-8 shadow-sm transition-all hover:shadow-md">
            <h3 className="font-serif text-xl font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
              VISIÓN
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              Todos los seres humanos tienen la capacidad innata de sanar sus emociones: nuestro papel es ayudarle a conectar con esa capacidad.
            </p>
          </div>

          {/* Nuestra Promesa */}
          <div className="rounded-3xl border border-slate-100 bg-slate-50/60 p-8 shadow-sm transition-all hover:shadow-md">
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-500"></span>
              NUESTRA PROMESA
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              Brindar nuestro conocimiento y experiencia a su servicio, con honestidad, respeto y humildad.
            </p>
          </div>

          {/* Experiencia */}
          <div className="rounded-3xl border border-slate-100 bg-slate-50/60 p-8 shadow-sm transition-all hover:shadow-md">
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-500"></span>
              EXPERIENCIA
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              Psicólogos clínicos especializados, estamos siempre actualizados sobre los mejores tratamientos disponibles.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
