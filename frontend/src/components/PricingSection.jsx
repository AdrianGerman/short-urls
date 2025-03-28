import { ArrowRight } from "lucide-react"

export const PricingSection = () => {
  return (
    <section id="pricing" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Choose the plan that fits your needs. Start for free and upgrade as
          you grow.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card p-6 rounded-lg border border-border flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <div className="text-3xl font-bold mb-4">
              $0
              <span className="text-muted-foreground text-sm font-normal">
                /month
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Perfect for personal use and small projects.
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>Up to 50 links per month</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>Basic click analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>Standard support</span>
              </li>
            </ul>

            <button className="w-full py-2 border border-input bg-background hover:bg-accent rounded-md transition-colors">
              Get Started
            </button>
          </div>

          <div className="bg-card p-6 rounded-lg border border-primary flex flex-col relative">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
              Popular
            </div>
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <div className="text-3xl font-bold mb-4">
              $12
              <span className="text-muted-foreground text-sm font-normal">
                /month
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              For growing businesses and content creators.
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>Up to 500 links per month</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>Custom link aliases</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>Priority support</span>
              </li>
            </ul>

            <button className="w-full py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors">
              Start Pro Trial
            </button>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-4">
              $49
              <span className="text-muted-foreground text-sm font-normal">
                /month
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              For large teams and organizations.
            </p>

            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>Unlimited links</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>Enterprise-grade analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>Custom domains</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>API access</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary" />
                <span>24/7 dedicated support</span>
              </li>
            </ul>

            <button className="w-full py-2 border border-input bg-background hover:bg-accent rounded-md transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
