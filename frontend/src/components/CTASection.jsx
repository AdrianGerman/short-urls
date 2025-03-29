export const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to simplify your links?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of marketers, content creators, and businesses who
            trust LinkSnip for their URL shortening needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors">
              Get Started for Free
            </button>
            <button className="px-8 py-3 border border-input bg-background hover:bg-accent rounded-md transition-colors">
              See Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
