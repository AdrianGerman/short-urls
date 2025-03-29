import { Link2 } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"></div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Link2 className="h-5 w-5 text-primary" />
            <span className="font-bold">LinkSnip</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LinkSnip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
