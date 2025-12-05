import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Brain, Shield, Coins, Code, Smartphone, FileText, Building2, Pickaxe, TrendingUp, Train, Users, Blocks } from 'lucide-react'

export default function Home() {
  const products = [
    {
      title: 'SmartBoundary',
      description: 'Surveyor-General Records Management System with AI-driven verification and GIS mapping.',
      icon: FileText,
      href: '/solutions/smartboundary',
    },
    {
      title: 'SmartDeed',
      description: 'Digital Deeds Management & Conveyancing System with blockchain-secured deed history.',
      icon: Shield,
      href: '/solutions/smartdeed',
    },
    {
      title: 'SmartMiner',
      description: 'Mining Rights Registration & Cadastre System with blockchain record immutability.',
      icon: Pickaxe,
      href: '/solutions/smartminer',
    },
    {
      title: 'SmartCitizenServices',
      description: 'Citizen Online Portal for billing, permits, complaints, and service requests.',
      icon: Building2,
      href: '/solutions/municipal',
    },
    {
      title: 'SmartValuer',
      description: 'AI-Enhanced AVM & CAMA Property Valuation Engine with mass valuation capabilities.',
      icon: TrendingUp,
      href: '/solutions/valuer',
    },
    {
      title: 'MapRail',
      description: 'Railway Property & Infrastructure Asset Management with rights-of-way management.',
      icon: Train,
      href: '/solutions/rail-cadastre',
    },
    {
      title: 'CommServe',
      description: 'Customary Land & Rural Administration System with mobile-friendly field system.',
      icon: Users,
      href: '/solutions/customary',
    },
    {
      title: 'SmartAsset',
      description: 'Blockchain-based Tokenisation of Commercial Assets with smart contracts.',
      icon: Blocks,
      href: '/solutions/smartasset',
    },
  ]

  const features = [
    { icon: Brain, label: 'AI-Powered Systems' },
    { icon: Shield, label: 'Blockchain Security' },
    { icon: Coins, label: 'Asset Tokenization' },
    { icon: Code, label: 'Enterprise Software' },
    { icon: Smartphone, label: 'Mobile Development' },
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-10" />
            {/* Background image removed - add /images/software-engineering-bg.jpg to public folder if needed */}
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative z-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Digital Infrastructure for Modern{' '}
                <span className="text-primary">Property & Land Systems</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
                Building intelligent systems for Property, Land, State, Municipal, and Customary
                Land Management using AI, Blockchain, and Advanced Software Engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base">
                  <Link href="/solutions">Explore Solutions</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-base">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Strip */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.label} className="flex flex-col items-center text-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{feature.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                Our Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital systems tailored for modern land and property management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => {
                const Icon = product.icon
                return (
                  <Link key={product.href} href={product.href}>
                    <Card className="h-full hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                      <CardHeader>
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{product.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="leading-relaxed">
                          {product.description}
                        </CardDescription>
                        <Button variant="link" className="mt-4 p-0 h-auto text-primary">
                          Learn More →
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Land Management Systems?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join government agencies, municipalities, and enterprises that trust Smart Hub Technologies
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
