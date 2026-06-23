"use client"
import { ArrowRight, PackageSearch, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border bg-secondary/40 pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            San Bartolo, Hidalgo
          </span>
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground text-balance md:text-6xl">
            Tienda Futbolito <span className="text-primary">Gus</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Tu tienda de abarrotes de confianza. Encuentra todo lo que necesitas
            y administra tu inventario de forma sencilla con nuestro sistema
            moderno de control de productos, existencias y ventas.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" onClick={() => (window.location.href = "#productos") }>
              Ver productos
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => (window.location.href = "#inventario") }>
              <PackageSearch className="h-4 w-4" />
              Sistema de inventario
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl">
            <img
              src="/gallery/tienda-fachada.png"
              alt="Fachada de la Tienda Futbolito Gus"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card p-4 shadow-lg sm:block">
            <p className="text-2xl font-bold text-primary">+500</p>
            <p className="text-sm text-muted-foreground">productos disponibles</p>
          </div>
        </div>
      </div>
    </section>
  )
}
