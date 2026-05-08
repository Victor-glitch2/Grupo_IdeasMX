"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Search, UserCheck, ClipboardList, FileText, MessageCircle } from "lucide-react"

const servicios = [
  { icon: Search, title: "Reclutamiento y Seleccion de Personal", color: "#3B82F6" },
  { icon: UserCheck, title: "Headhunting (Busqueda de Alto Nivel)", color: "#22C55E" },
  { icon: ClipboardList, title: "Evaluacion por Competencias", color: "#EC4899" },
  { icon: Users, title: "Entrevistas y Filtro de Candidatos", color: "#F59E0B" },
  { icon: FileText, title: "Asesoria en Descripciones de Puesto", color: "#8B5CF6" },
]

export default function ReclutalPage() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(1, window.scrollY / 500)
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hola, me interesa conocer las oportunidades laborales disponibles. Adjunto mi CV.")
    window.open(`https://wa.me/525575086614?text=${message}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Banner Image */}
      <section className="pt-20 md:pt-24 relative overflow-hidden">
        {/* Hero Banner Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/images/reclutal-hero.jpg"
            alt="Reclutamiento de personal"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10 text-center pb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Users className="w-4 h-4" />
            Reclutal
          </div>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-[family-name:var(--font-display)]"
            style={{
              transform: `translateY(${scrollProgress * -30}px)`,
              opacity: 1 - scrollProgress * 0.5,
            }}
          >
            Conectamos talento con{" "}
            <span className="text-primary">oportunidades</span>
          </h1>
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            style={{
              transform: `translateY(${scrollProgress * -20}px)`,
              opacity: 1 - scrollProgress * 0.3,
            }}
          >
            En Reclutal sabemos que el activo mas importante de una empresa es su gente. Nos 
            especializamos en encontrar y evaluar al profesional que no solo tiene las habilidades, 
            sino tambien la actitud para encajar en la cultura de tu organizacion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground">
              <Link href="#servicios">
                Descubre Nuestras Soluciones
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" onClick={handleWhatsAppContact}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Enviar CV por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center font-[family-name:var(--font-display)]">
            Lo que hacemos
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Servicios integrales de reclutamiento para encontrar el talento ideal.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicios.map((servicio) => {
              const Icon = servicio.icon
              return (
                <div
                  key={servicio.title}
                  className="bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: servicio.color + "15" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: servicio.color }} />
                  </div>
                  <h3 className="font-semibold text-foreground">{servicio.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CV Section - WhatsApp Only */}
      <section id="cv" className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            Tu proximo empleo espera
          </h2>
          <p className="text-muted-foreground mb-8">
            Envianos tu CV directamente por WhatsApp para conectar con las mejores oportunidades laborales.
          </p>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Envia tu CV por WhatsApp
            </h3>
            <p className="text-muted-foreground mb-6">
              Haz clic en el boton de abajo para abrir WhatsApp. Incluye tu CV en formato PDF junto con el mensaje y te contactaremos pronto.
            </p>
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto"
              onClick={handleWhatsAppContact}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Enviar CV por WhatsApp
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Recuerda adjuntar tu CV en formato PDF o Word al mensaje de WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* CTA for Companies */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <UserCheck className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-display)]">
            Encuentra a tu Proximo Talento
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Cuentanos sobre tu proyecto y te propondremos la solucion perfecta.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground">
            <Link href="/#contacto">
              Cotiza ya!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
            <a href="tel:+525575086614" className="hover:text-primary transition-colors">
              55-7508-6614
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:contacto@grupoideasmx.com" className="hover:text-primary transition-colors">
              contacto@grupoideasmx.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
