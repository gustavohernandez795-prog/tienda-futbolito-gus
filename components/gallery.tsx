import { SectionHeading } from "@/components/section-heading"

const images = [
  {
    src: "/gallery/tienda-fachada.png",
    alt: "Fachada de la tienda de abarrotes",
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/gallery/estanteria-abarrotes.png",
    alt: "Estantería con productos de abarrotes",
  },
  {
    src: "/gallery/bebidas-refrigerador.png",
    alt: "Refrigerador con bebidas",
  },
  {
    src: "/gallery/inventario-tablet.png",
    alt: "Control de inventario con tablet",
  },
  {
    src: "/gallery/dulces-mostrador.png",
    alt: "Mostrador con dulces variados",
  },
]

export function Gallery() {
  return (
    <section id="galeria" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Galería"
          title="Conoce nuestra tienda"
          description="Un vistazo a nuestros productos, estanterías e instalaciones."
        />
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.src}
              className={`overflow-hidden rounded-xl border border-border shadow-sm ${img.className ?? ""}`}
            >
              <img
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
