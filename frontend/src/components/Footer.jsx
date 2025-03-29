import { Link2 } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-400 hover:text-zinc-50"
                >
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Link2 className="h-5 w-5 text-blue-500" />
            <span className="font-bold">LinkSnip</span>
          </div>

          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} LinkSnip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
