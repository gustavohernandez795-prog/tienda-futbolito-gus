export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}) {
  return (
    <div className={`mb-12 max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}
