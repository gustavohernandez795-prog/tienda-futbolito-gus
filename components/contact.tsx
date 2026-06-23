"use client"

import type { FormEvent } from "react"
import { useState } from "react"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { SectionHeading } from "@/components/section-heading"

export function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setLoading(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const nombre = String(formData.get("nombre") || "")
    const correo = String(formData.get("correo") || "")
    const telefono = String(formData.get("telefono") || "")
    const tipoSolicitud = String(formData.get("tipo") || "")
    const producto = String(formData.get("producto") || "")
    const cantidad = String(formData.get("cantidad") || "")
    const fechaSolicitud = String(formData.get("fecha") || "")
    const mensaje = String(formData.get("mensaje") || "")

    try {
      const formspreeResponse = await fetch("https://formspree.io/f/xpqgzlzo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      const tursoResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          correo,
          telefono,
          tipoSolicitud,
          producto,
          cantidad,
          fechaSolicitud,
          mensaje,
        }),
      })

      if (!formspreeResponse.ok) {
        setError("La solicitud no se pudo enviar por Formspree.")
        return
      }

      if (!tursoResponse.ok) {
        setError("La solicitud se envió, pero no se pudo guardar en Turso.")
        return
      }

      setSent(true)
      form.reset()
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setError("Ocurrió un error al enviar el formulario.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Contacto"
          title="Solicita tus productos"
          description="Completa el formulario y nos pondremos en contacto contigo lo antes posible."
        />

        <Card>
          <CardContent className="p-6 md:p-8">
            {sent ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-primary" />

                <h3 className="font-heading text-xl font-semibold text-foreground">
                  ¡Solicitud enviada!
                </h3>

                <p className="max-w-sm text-sm text-muted-foreground">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSent(false)}
                >
                  Enviar otra solicitud
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="nombre">Nombre completo</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="correo">Correo electrónico</Label>
                  <Input
                    id="correo"
                    name="correo"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="771 000 0000"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="tipo">Tipo de solicitud</Label>
                  <Select name="tipo" required>
                    <SelectTrigger id="tipo">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="compra">Compra de productos</SelectItem>
                      <SelectItem value="mayoreo">Pedido por mayoreo</SelectItem>
                      <SelectItem value="info">Información general</SelectItem>
                      <SelectItem value="producto-agotado">
                        Producto agotado
                      </SelectItem>
                      <SelectItem value="sugerencia">Sugerencia</SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="producto">Producto de interés</Label>
                  <Input
                    id="producto"
                    name="producto"
                    placeholder="Ej. Abarrotes, bebidas..."
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="cantidad">Cantidad aproximada</Label>
                  <Input
                    id="cantidad"
                    name="cantidad"
                    type="number"
                    min={1}
                    placeholder="Ej. 10"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="fecha">Fecha de solicitud</Label>
                  <Input id="fecha" name="fecha" type="date" />
                </div>

                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Cuéntanos qué necesitas..."
                    required
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive sm:col-span-2">
                    <AlertCircle className="h-4 w-4" />
                    <p>{error}</p>
                  </div>
                )}

                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={loading}
                  >
                    <Send className="h-4 w-4" />
                    {loading ? "Enviando..." : "Enviar solicitud"}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}