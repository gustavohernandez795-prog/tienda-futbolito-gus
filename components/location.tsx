import { MapPin, Clock, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"

const details = [
  {
    icon: MapPin,
    title: "Dirección",
    text: "San Bartolo, Hidalgo, México",
  },
  {
    icon: Clock,
    title: "Horario",
    text: "Lunes a Domingo, 8:00 a.m. - 9:00 p.m.",
  },
  {
    icon: Phone,
    title: "Teléfono",
    text: "+52 771 000 0000",
  },
]

export function Location() {
  return (
    <section id="ubicacion" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Ubicación"
          title="Visítanos en San Bartolo, Hidalgo"
          description="Estamos ubicados en el corazón de San Bartolo. ¡Te esperamos!"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {details.map((d) => (
              <Card key={d.title}>
                <CardContent className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      {d.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{d.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <iframe
              title="Mapa de ubicación de San Bartolo, Hidalgo"
              src="https://www.google.com/maps?q=San+Bartolo,+Hidalgo,+Mexico&output=embed"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
