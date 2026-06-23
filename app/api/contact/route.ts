import { NextResponse } from "next/server"
import { turso } from "@/lib/turso"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      nombre,
      correo,
      telefono,
      tipoSolicitud,
      producto,
      cantidad,
      fechaSolicitud,
      mensaje,
    } = body

    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        {
          success: false,
          error: "Nombre, correo y mensaje son obligatorios.",
        },
        { status: 400 }
      )
    }

    const mensajeCompleto = `
Tipo de solicitud: ${tipoSolicitud || "No especificado"}
Cantidad aproximada: ${cantidad || "No especificada"}
Fecha de solicitud: ${fechaSolicitud || "No especificada"}

Mensaje:
${mensaje}
    `.trim()

    await turso.execute({
      sql: `
        INSERT INTO solicitudes (
          nombre,
          correo,
          telefono,
          producto_interes,
          mensaje
        )
        VALUES (?, ?, ?, ?, ?)
      `,
      args: [
        nombre,
        correo,
        telefono || "",
        producto || "",
        mensajeCompleto,
      ],
    })

    return NextResponse.json(
      {
        success: true,
        message: "Solicitud guardada correctamente en Turso.",
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error completo al guardar en Turso:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Error interno al guardar la solicitud.",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    )
  }
}