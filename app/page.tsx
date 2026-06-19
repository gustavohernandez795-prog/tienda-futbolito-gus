import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { Inventory } from "@/components/inventory"
import { Benefits } from "@/components/benefits"
import { Gallery } from "@/components/gallery"
import { Videos } from "@/components/videos"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Inventory />
        <Benefits />
        <Gallery />
        <Videos />
        <Location />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
