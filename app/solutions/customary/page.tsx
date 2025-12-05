import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Users, Check, Smartphone, BookOpen, MapPin } from 'lucide-react'

export default function CustomaryPage() {
  const features = [
    'Customary land allocation tracking',
    'Village and headman administration',
    'Digital record book system',
    'Mobile-friendly field data capture',
    'Community land rights management',
    'Traditional authority workflows',
    'Land dispute documentation',
    'Inheritance and succession tracking',
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  CommServe
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                  Customary Land & Rural Administration System
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
                  CommServe digitizes traditional land administration while 
                  respecting customary practices and governance structures. This mobile-first system 
                  enables traditional authorities, headmen, and rural administrators to efficiently 
                  manage land allocations, record keeping, and community land rights in areas under 
                  customary tenure.
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
                  <Smartphone className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Mobile-First Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Field-ready mobile apps for data capture in remote areas
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Digital Records</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Electronic record books replacing traditional paper systems
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Offline Capability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Works without internet connectivity with sync when online
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="text-center">
            <Card className="bg-card">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Modernize Customary Land Administration
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  See how our system can support traditional authorities in managing customary land
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
