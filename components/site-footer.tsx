import { HeartPulse, Send, Facebook, Globe } from "lucide-react"

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Terapia", href: "#terapia" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
]

const socials = [
  { 
    label: "Facebook", 
    href: "https://www.facebook.com/share/1DyaUMbAgK/?mibextid=wwXIfr", 
    icon: Facebook 
  },
  { 
    label: "TikTok", 
    href: "https://www.tiktok.com/@mediintegral?_r=1&_t=ZS-99dHpBlsNEe", 
    icon: Globe 
  },
  { 
    label: "WhatsApp", 
    href: "https://wa.me/50375687614?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20servicios", 
    icon: Send 
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <a href="#inicio" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <HeartPulse className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Medi<span className="text-primary">Integral</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Centro de Atención Integral y Psicología. Cuidamos tu bienestar emocional
              y mental con un enfoque humano.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Enlaces rápidos</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Síguenos</h3>
            <div className="mt-4 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MediIntegral. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
