import { ArrowRight, Shield } from "lucide-react"

export const HeroSection = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Shorten Your Links,
          <span className="text-primary">Expand Your Reach</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-10">
          Transform long, unwieldy URLs into clean, memorable links that drive
          more clicks and improve your brand experience.
        </p>
        <div className="w-full max-w-3xl flex flex-col md:flex-row gap-4 mb-12">
          <input
            type="url"
            placeholder="Paste your long URL here..."
            className="flex-1 h-12 text-base px-4 rounded-md border border-input bg-background"
          />
          <button className="h-12 px-8 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center">
            Shorten URL <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="h-4 w-4" />
          <span>No registration required. 100% secure and free to use.</span>
        </div>
      </section>
    </>
  )
}
