import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Blocks, Check, Lock, Users, BarChart } from 'lucide-react'

export default function SmartAssetPage() {
  const features = [
    'Blockchain-based asset tokenization',
    'Smart contract automation',
    'Investor portal and dashboard',
    'Real-time asset performance tracking',
    'Fractional ownership management',
    'Secondary market trading',
    'Regulatory compliance tools',
    'Transparent transaction history',
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Blocks className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  SmartAsset
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                  Blockchain-based Asset Tokenization Platform
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
                  SmartAsset revolutionizes commercial property investment through blockchain tokenization. 
                  By converting real estate and other physical assets into digital tokens, it enables 
                  fractional ownership, enhanced liquidity, and transparent asset management. Investors 
                  can access previously illiquid markets while asset owners unlock capital through 
                  innovative financing structures.
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
                  <Lock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Blockchain Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Secure, immutable record of ownership and transactions
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Investor Portal</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    User-friendly interface for managing tokenized assets
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Real-time dashboards for asset performance and ROI tracking
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="text-center">
            <Card className="bg-card">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Unlock Asset Liquidity with Tokenization
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Discover how SmartAsset can transform your commercial properties into liquid digital assets
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
