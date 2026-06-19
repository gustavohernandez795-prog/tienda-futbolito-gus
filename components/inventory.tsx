import {
  PackagePlus,
  Boxes,
  ReceiptText,
  ClipboardList,
  PackageX,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SectionHeading } from "@/components/section-heading"

const actions = [
  {
    icon: PackagePlus,
    title: "Registrar productos",
    description: "Da de alta nuevos productos con nombre, categoría y precio.",
  },
  {
    icon: Boxes,
    title: "Agregar existencias",
    description: "Actualiza el stock disponible al recibir mercancía.",
  },
  {
    icon: ReceiptText,
    title: "Registrar ventas",
    description: "Lleva el control de cada venta y reduce el inventario.",
  },
  {
    icon: ClipboardList,
    title: "Consultar inventario",
    description: "Revisa el estado completo de tus productos en tiempo real.",
  },
  {
    icon: PackageX,
    title: "Ver productos agotados",
    description: "Identifica rápidamente qué productos necesitas reabastecer.",
  },
]

const inventoryRows = [
  { producto: "Arroz 1kg", categoria: "Abarrotes", precio: 28, stock: 42 },
  { producto: "Coca-Cola 600ml", categoria: "Bebidas", precio: 18, stock: 8 },
  { producto: "Paleta Payaso", categoria: "Dulces", precio: 12, stock: 0 },
  { producto: "Cloro 1L", categoria: "Limpieza", precio: 25, stock: 15 },
  { producto: "Aceite 900ml", categoria: "Abarrotes", precio: 42, stock: 5 },
  { producto: "Sabritas 45g", categoria: "Dulces", precio: 16, stock: 24 },
]

function stockStatus(stock: number) {
  if (stock === 0)
    return { label: "Agotado", className: "bg-destructive/10 text-destructive" }
  if (stock <= 10)
    return { label: "Bajo", className: "bg-accent/15 text-accent" }
  return { label: "Disponible", className: "bg-primary/10 text-primary" }
}

export function Inventory() {
  return (
    <section id="inventario" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Sistema de inventario"
          title="Administra tu tienda con facilidad"
          description="Un sistema completo para mantener tu negocio organizado y bajo control en todo momento."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map((a) => (
            <Card key={a.title} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <a.icon className="h-6 w-6" />
                </span>
                <CardTitle className="pt-2">{a.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 overflow-hidden">
          <CardHeader>
            <CardTitle>Inventario actual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Producto</TableHead>
                    <TableHead>Categoría</TableHead>
                    <TableHead className="text-right">Precio</TableHead>
                    <TableHead className="text-right">Existencias</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventoryRows.map((row) => {
                    const status = stockStatus(row.stock)
                    return (
                      <TableRow key={row.producto}>
                        <TableCell className="font-medium text-foreground">
                          {row.producto}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {row.categoria}
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">
                          {"$"}
                          {row.precio.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">
                          {row.stock}
                        </TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${status.className}`}
                          >
                            {status.label}
                          </span>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
