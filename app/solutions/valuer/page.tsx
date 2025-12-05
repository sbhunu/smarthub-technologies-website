import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { TrendingUp, Check, Brain, BarChart, Calculator } from 'lucide-react'

export default function ValuerPage() {
  const features = [
    'Automated Valuation Model (AVM)',
    'CAMA valuation engine',
    'AI-powered property analytics',
    'Mass valuation capabilities',
    'Scenario simulation tools',
    'Market trend analysis',
    'Comparable property matching',
    'Valuation roll generation',
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  SmartValuer
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                  AI-Enhanced Property Valuation Engine
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
                  SmartValuer combines advanced Automated Valuation Models (AVM) with Computer-Assisted 
                  Mass Appraisal (CAMA) technology to deliver accurate, consistent property valuations 
                  at scale. Powered by AI and machine learning, it analyzes market trends, comparable 
                  sales, and property characteristics to support municipalities, valuers, and financial 
                  institutions in making informed decisions.
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
                  <Brain className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>AI & Machine Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Advanced algorithms for accurate property value prediction
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Market Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Real-time market data integration and trend analysis
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Calculator className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>CAMA Engine</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Computer-Assisted Mass Appraisal for large-scale valuations
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="text-center">
            <Card className="bg-card">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Revolutionize Property Valuation
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Discover how SmartValuer can enhance accuracy and efficiency in property assessment
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
