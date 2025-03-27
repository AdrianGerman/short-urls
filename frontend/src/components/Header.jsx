import { Link2 } from "lucide-react"

export const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link2 className="h-6 w-6" />
        <span className="text-xl font-bold">LinkSnip</span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#features">Features</a>
        <a href="#how-it-works">How it works</a>
        <a href="">Pricing</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="text-sm bg-transparent hover:bg-accent px-4 py-2 rounded-md transition-colors">
          Log in
        </button>
        <button className="text-sm bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors">
          Sign up
        </button>
      </div>
    </header>
  )
}
