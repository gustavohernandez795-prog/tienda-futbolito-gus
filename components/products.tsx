import { ShoppingBasket, CupSoda, Candy, SprayCan } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"

const products = [
  {
    icon: ShoppingBasket,
    title: "Abarrotes",
    description:
      "Granos, enlatados, harinas, aceites y todos los productos básicos para tu despensa.",
  },
  {
    icon: CupSoda,
    title: "Bebidas",
    description:
      "Refrescos, jugos, agua embotellada y bebidas refrescantes siempre frías.",
  },
  {
    icon: Candy,
    title: "Dulces",
    description:
      "Gran variedad de dulces, golosinas y botanas para todos los gustos.",
  },
  {
    icon: SprayCan,
    title: "Productos de limpieza",
    description:
      "Detergentes, jabones, desinfectantes y artículos para el hogar.",
  },
]

export function Products() {
  return (
    <section id="productos" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Nuestros productos"
          title="Todo lo que necesitas en un solo lugar"
          description="Contamos con una amplia selección de productos organizados por categoría para que encuentres lo que buscas fácilmente."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Card
              key={p.title}
              className="group transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="h-6 w-6" />
                </span>
                <CardTitle className="pt-2">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
