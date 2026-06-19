import { Gauge, ShieldCheck, TrendingUp, Clock, Smartphone, Wallet } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"

const benefits = [
  {
    icon: Gauge,
    title: "Control en tiempo real",
    description: "Conoce el estado de tu inventario al instante, sin esperas.",
  },
  {
    icon: TrendingUp,
    title: "Más ventas",
    description: "Evita quedarte sin stock y nunca pierdas una venta.",
  },
  {
    icon: Clock,
    title: "Ahorra tiempo",
    description: "Automatiza el conteo y registro de tus productos.",
  },
  {
    icon: ShieldCheck,
    title: "Datos seguros",
    description: "Tu información protegida y respaldada de forma confiable.",
  },
  {
    icon: Smartphone,
    title: "Acceso desde cualquier lugar",
    description: "Consulta tu tienda desde el celular, tablet o computadora.",
  },
  {
    icon: Wallet,
    title: "Mejor rentabilidad",
    description: "Toma mejores decisiones de compra y reduce desperdicios.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Beneficios"
          title="Ventajas de nuestro sistema"
          description="Diseñado para que administrar tu tienda de abarrotes sea más simple, rápido y rentable."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <Card key={b.title} className="border-l-4 border-l-primary">
              <CardContent className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <b.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
