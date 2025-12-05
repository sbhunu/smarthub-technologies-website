import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Building2, Landmark, MapPin, Home, Pickaxe, Train, Users, Coins } from 'lucide-react'

export default function IndustriesPage() {
  const industries = [
    {
      icon: Landmark,
      title: 'Government',
      description: 'National and provincial government agencies managing land, property, and state assets.',
      solutions: ['SmartBoundary', 'SmartDeed', 'SmartMiner'],
      benefits: [
        'Centralized land records management',
        'Transparent processes and accountability',
        'Reduced processing times',
        'Enhanced security and compliance',
      ],
    },
    {
      icon: Building2,
      title: 'Municipalities',
      description: 'Local government and metropolitan municipalities serving citizens and managing municipal services.',
      solutions: ['SmartCitizenServices', 'SmartValuer'],
      benefits: [
        'Improved citizen service delivery',
        'Online billing and payments',
        'Efficient permit processing',
        'Accurate property valuations',
      ],
    },
    {
      icon: MapPin,
      title: 'Surveying & Cadastral Agencies',
      description: 'Surveyor-General offices and cadastral departments managing land surveys and boundary records.',
      solutions: ['SmartBoundary', 'SmartDeed'],
      benefits: [
        'Digital diagram submissions',
        'AI-powered verification',
        'GIS integration',
        'Real-time status tracking',
      ],
    },
    {
      icon: Home,
      title: 'Real Estate & Valuation',
      description: 'Property valuers, real estate firms, and financial institutions requiring accurate valuations.',
      solutions: ['SmartValuer', 'SmartAsset'],
      benefits: [
        'Automated property valuations',
        'Market trend analysis',
        'Asset tokenization opportunities',
        'Investment transparency',
      ],
    },
    {
      icon: Pickaxe,
      title: 'Mining Sector',
      description: 'Mining companies, departments of mineral resources, and mineral rights administrators.',
      solutions: ['SmartMiner'],
      benefits: [
        'Transparent mining rights registry',
        'Prevent overlapping claims',
        'Compliance tracking',
        'Blockchain security',
      ],
    },
    {
      icon: Train,
      title: 'Rail & Infrastructure',
      description: 'Railway operators and infrastructure companies managing land parcels and assets.',
      solutions: ['MapRail'],
      benefits: [
        'Comprehensive asset tracking',
        'Infrastructure maintenance workflows',
        'Rights-of-way management',
        'GIS visualization',
      ],
    },
    {
      icon: Users,
      title: 'Customary & Rural Land Authorities',
      description: 'Traditional authorities, tribal councils, and rural development agencies.',
      solutions: ['CommServe'],
      benefits: [
        'Digitized land allocation records',
        'Mobile field data capture',
        'Respect for traditional governance',
        'Offline capability',
      ],
    },
    {
      icon: Coins,
      title: 'FinTech / Asset Tokenization',
      description: 'Financial technology firms, investment platforms, and asset management companies.',
      solutions: ['SmartAsset'],
      benefits: [
        'Blockchain-based tokenization',
        'Fractional ownership',
        'Enhanced liquidity',
        'Transparent transactions',
      ],
    },
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Industries We Serve
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Delivering specialized solutions across diverse sectors in land, property, 
              and infrastructure management
            </p>
          </div>

          {/* Industries Grid */}
          <div className="space-y-12">
            {industries.map((industry) => {
              const Icon = industry.icon
              return (
                <Card key={industry.title}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{industry.title}</CardTitle>
                        <CardDescription className="text-base">
                          {industry.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Solutions */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Recommended Solutions</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.solutions.map((solution) => (
                            <Link 
                              key={solution} 
                              href={`/solutions/${solution.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                                {solution}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {industry.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* CTA */}
          <section className="mt-16 text-center">
            <Card className="bg-card">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Don't See Your Industry?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We create custom solutions for diverse sectors. Contact us to discuss 
                  how we can help your organization.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
