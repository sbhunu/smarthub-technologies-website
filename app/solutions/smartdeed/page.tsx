import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Shield, Check, Lock, FileCheck, History } from 'lucide-react'

export default function SmartDeedPage() {
  const features = [
    'Full deeds registry platform',
    'Digital conveyancer submissions',
    'Blockchain-secured deed history',
    'Automated examination workflows',
    'Digital approval and rejection system',
    'Title deed tracking and management',
    'Real-time status updates',
    'Compliance with deeds office standards',
  ]

  const workflows = [
    { title: 'Submission', description: 'Conveyancers submit deed documents digitally' },
    { title: 'Examination', description: 'Deeds office examines for legal compliance' },
    { title: 'Approval', description: 'Approved deeds are registered on blockchain' },
    { title: 'Issuance', description: 'Digital title deeds issued to property owners' },
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  SmartDeed
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                  Digital Deeds Management & Conveyancing System
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
                  SmartDeed revolutionizes the deeds registration process with a fully digital platform 
                  that connects conveyancers, deeds offices, and property owners. Leveraging blockchain 
                  technology for immutable record-keeping, it ensures transparency, security, and 
                  efficiency in property title management.
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Workflow Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflows.map((workflow, index) => (
                <Card key={workflow.title}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {index + 1}
                      </div>
                      <CardTitle className="text-lg">{workflow.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{workflow.description}</CardDescription>
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
                    Immutable deed records secured on distributed ledger technology
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileCheck className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Digital Workflow</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Automated examination and approval processes for efficiency
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <History className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Audit Trail</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Complete transaction history with timestamp verification
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="text-center">
            <Card className="bg-card">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Transform Your Deeds Office Operations
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Discover how SmartDeed can streamline your conveyancing and title registration processes
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
