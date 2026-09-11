export function MissionVision() {
  return (
    <section className="py-20 md:py-28 bg-slate-50/50">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        
        {/* Cabecera de la sección */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-sm">
            Nuestra filosofía
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Comprometidos con tu Salud Mental
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Los principios y propósitos que guían cada uno de nuestros espacios terapéuticos.
          </p>
        </div>

        {/* Tarjetas de Misión, Visión, Promesa y Experiencia */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          
          {/* Misión */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Misión
                </h3>
              </div>
              <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
                Ayudar a superar condiciones emocionales, a través de bases psicológicas para una mejoría a largo plazo.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Visión
                </h3>
              </div>
              <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
                Todos los seres humanos tienen la capacidad innata de sanar sus emociones: nuestro papel es ayudarle a conectar con esa capacidad.
              </p>
            </div>
          </div>

          {/* Nuestra Promesa */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Nuestra Promesa
                </h3>
              </div>
              <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
                Brindar nuestro conocimiento y experiencia a su servicio, con honestidad, respeto y humildad.
              </p>
            </div>
          </div>

          {/* Experiencia */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Experiencia
                </h3>
              </div>
              <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
                Psicólogos clínicos especializados, estamos siempre actualizados sobre los mejores tratamientos disponibles.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
