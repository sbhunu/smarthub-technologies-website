import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { FileText, Shield, Pickaxe, Building2, TrendingUp, Train, Users, Blocks } from 'lucide-react'

export default function SolutionsPage() {
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

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Our Solutions
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital systems for property, land, and state management powered by AI, 
              blockchain, and advanced software engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
      </main>

      <Footer />
    </>
  )
}
