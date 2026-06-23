import { createClient } from "@libsql/client"

if (!process.env.TURSO_DATABASE_URL) {
  throw new Error("Falta TURSO_DATABASE_URL en el archivo .env.local")
}

if (!process.env.TURSO_AUTH_TOKEN) {
  throw new Error("Falta TURSO_AUTH_TOKEN en el archivo .env.local")
}

export const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
})