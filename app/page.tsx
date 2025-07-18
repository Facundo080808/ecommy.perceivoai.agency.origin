"use client"

import { HeroSection } from "@/components/hero-section"
import { FreeTrialSection } from "@/components/free-trial-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TechnologySection } from "@/components/technology-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { BenefitsSection } from "@/components/benefits-section"
import { IntegrationSection } from "@/components/integration-section"
import { ROICalculator } from "@/components/roi-calculator"
import { PricingSection } from "@/components/pricing-section"
import { SecondaryHeroSection } from "@/components/secondary-hero-section"
import { ContactForm } from "@/components/contact-form"
import { CTASection } from "@/components/cta-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function Home() {


  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-hidden">
        <div id="inicio">
          <HeroSection />
        </div>
        <FreeTrialSection />
        <div id="caracteristicas">
          <FeaturesSection />
        </div>
        <div id="como-funciona">
          <HowItWorksSection />
        </div>
        <div id="tecnologia">
          <TechnologySection />
        </div>
        <div id="capacidades">
          <CapabilitiesSection />
        </div>
        <div id="beneficios">
          <BenefitsSection />
        </div>
       
          <IntegrationSection />
          <ROICalculator />
       
        <div id="precios">
          <PricingSection />
        </div>
        <SecondaryHeroSection />
        <div id="contacto">
          <ContactForm />
        </div>
        <CTASection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
