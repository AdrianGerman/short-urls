import { CTASection } from "./components/CTASection"
import { FeaturesSection } from "./components/FeaturesSection"
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
      </main>
    </div>
  )
}

export default App
