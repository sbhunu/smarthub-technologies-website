import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Train, Check, MapPin, Wrench, FileStack } from 'lucide-react'

export default function RailCadastrePage() {
  const features = [
    'Railway land parcel management',
    'Servitude tracking and administration',
    'Infrastructure asset mapping',
    'Maintenance workflow management',
    'Rights-of-way administration',
    'GIS integration for rail corridors',
    'Asset condition monitoring',
    'Compliance and regulatory tracking',
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Train className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  MapRail
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                  Railway Property & Infrastructure Asset Management
                </p>
              </div>
            </div>
          </div>

          <section className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Overview</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  MapRail is a specialized system for managing railway land parcels, 
                  infrastructure assets, and rights-of-way. With comprehensive GIS integration and 
                  maintenance workflows, it provides rail operators with complete visibility and 
                  control over their land and infrastructure portfolio.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <Card key={feature}>
                  <CardContent className="flex items-start gap-3 pt-6">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>GIS Mapping</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Detailed mapping of rail corridors, parcels, and servitudes
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Wrench className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Asset Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Track maintenance schedules and infrastructure condition
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileStack className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Document Repository</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Centralized storage for easements, leases, and agreements
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="text-center">
            <Card className="bg-card">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Optimize Railway Asset Management
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Learn how MapRail can streamline your railway property and infrastructure management
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Request a Demo</Link>
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
