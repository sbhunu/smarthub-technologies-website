import Link from 'next/link'
import { Facebook, Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  const productLinks = [
    { label: 'SmartBoundary', href: '/solutions/smartboundary' },
    { label: 'SmartDeed', href: '/solutions/smartdeed' },
    { label: 'SmartMiner', href: '/solutions/smartminer' },
    { label: 'SmartCitizenServices', href: '/solutions/municipal' },
    { label: 'SmartValuer', href: '/solutions/valuer' },
    { label: 'MapRail', href: '/solutions/rail-cadastre' },
    { label: 'CommServe', href: '/solutions/customary' },
    { label: 'SmartAsset', href: '/solutions/smartasset' },
  ]

  const companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Technology', href: '/technology' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact', href: '/contact' },
  ]

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Data Protection', href: '/data-protection' },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Products */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>77 Main Street, Pomona</p>
              <p>1505, South Africa</p>
              <p className="pt-2">
                <a href="mailto:admin@smarthubtechnologies.com" className="hover:text-primary transition-colors">
                  admin@smarthubtechnologies.com
                </a>
              </p>
              <p>
                <a href="tel:+27796908740" className="hover:text-primary transition-colors">
                  +27 79 690 8740
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Smart Hub Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* TODO: Update social media links with actual company profiles */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
