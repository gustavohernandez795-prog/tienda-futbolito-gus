import { Store, Globe, Camera, AtSign, MapPin, Mail } from "lucide-react"

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Inventario", href: "#inventario" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
]

const socials = [
  { icon: Globe, label: "Facebook", href: "#" },
  { icon: Camera, label: "Instagram", href: "#" },
  { icon: AtSign, label: "Twitter", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Store className="h-5 w-5" />
            </span>
            <span className="font-heading text-lg font-bold">
              Tienda Futbolito Gus
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
            Tu tienda de abarrotes de confianza en San Bartolo, Hidalgo. Calidad,
            variedad y un sistema moderno de inventario.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-background/90">
            Enlaces rápidos
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-background/70 transition-colors hover:text-background"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-background/90">
            Contacto
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-background/70">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              San Bartolo, Hidalgo, México
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              contacto@futbolitogus.com
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background/10 text-background transition-colors hover:bg-primary"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-sm text-background/60 md:px-6">
          {`© ${new Date().getFullYear()} Tienda Futbolito Gus. Todos los derechos reservados.`}
        </div>
      </div>
    </footer>
  )
}
