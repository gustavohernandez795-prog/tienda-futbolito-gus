import { SectionHeading } from "@/components/section-heading"

const videos = [
  {
    id: "d9g5BVq_XPY",
    title: "Video informativo 1",
  },
  {
    id: "cRkFLvIYF8c",
    title: "Video informativo 2",
  },
]

export function Videos() {
  return (
    <section id="videos" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Videos"
          title="Aprende más sobre la tienda"
          description="Conoce más sobre cómo funciona nuestra tienda y el sistema de inventario."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden rounded-xl border border-border shadow-sm"
            >
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
