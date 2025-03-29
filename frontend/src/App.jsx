import { CTASection } from "./components/CTASection"
import { FeaturesSection } from "./components/FeaturesSection"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { PricingSection } from "./components/PricingSection"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </main>
    </div>
  )
}

export default App
