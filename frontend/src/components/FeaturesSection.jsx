import { Zap, Shield, ExternalLink } from "lucide-react"

export const FeaturesSection = () => {
  return (
    <section id="features" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Features for{" "}
          <span className="text-primary">Better Links</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Generate short links instantly with our optimized infrastructure
              for quick redirects.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-muted-foreground">
              All links are encrypted and protected against malware and phishing
              attempts.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <ExternalLink className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Click Analytics</h3>
            <p className="text-muted-foreground">
              Track performance with detailed analytics on clicks, locations,
              and devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
