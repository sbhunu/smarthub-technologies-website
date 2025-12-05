import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Pickaxe, Check, MapPin, Lock, FileStack } from 'lucide-react'

export default function SmartMinerPage() {
  const features = [
    'Mining cadastre management',
    'Mining rights registration and tracking',
    'GIS mapping and extent verification',
    'Blockchain record immutability',
    'Prospecting rights management',
    'Mining lease administration',
    'Compliance monitoring',
    'Royalty tracking integration',
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Pickaxe className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  SmartMiner
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                  Mining Rights Registration & Cadastre System
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
                  SmartMiner provides comprehensive management of mining rights, prospecting licenses, 
                  and mineral cadastre. With blockchain-secured records and GIS integration, it ensures 
                  transparent, accurate tracking of mining activities while preventing overlapping claims 
                  and maintaining regulatory compliance.
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
                  <CardTitle>GIS Cadastre</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Spatial analysis and visualization of mining extents and claims
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Blockchain Records</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Immutable registry of mining rights and license history
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileStack className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Document Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Centralized storage for permits, licenses, and compliance documents
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="text-center">
            <Card className="bg-card">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Modernize Your Mining Cadastre
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Learn how SmartMiner can enhance transparency and efficiency in mining rights management
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
