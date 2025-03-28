import { FeaturesSection } from "./components/FeaturesSection"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
    </div>
  )
}

export default App
