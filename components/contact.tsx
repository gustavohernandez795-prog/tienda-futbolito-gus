"use client"

import type { FormEvent } from "react"
import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
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

  // TODO: conectar con Formspree (action="https://formspree.io/f/XXXX")
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
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
                  Gracias por contactarnos. Te responderemos pronto. (Pendiente
                  de conectar con Formspree.)
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="nombre">Nombre completo</Label>
                  <Input id="nombre" name="nombre" placeholder="Tu nombre" required />
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
                  <Select name="tipo">
                    <SelectTrigger id="tipo">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="compra">Compra de productos</SelectItem>
                      <SelectItem value="mayoreo">Pedido por mayoreo</SelectItem>
                      <SelectItem value="info">Información general</SelectItem>
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
                  />
                </div>

                <div className="sm:col-span-2">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="h-4 w-4" />
                    Enviar solicitud
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
