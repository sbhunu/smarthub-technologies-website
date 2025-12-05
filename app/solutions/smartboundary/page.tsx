import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { FileText, Check, MapPin, Brain, Database } from 'lucide-react'

export default function SmartBoundaryPage() {
  const features = [
    'AI-driven diagram verification and validation',
    'Comprehensive GIS mapping and boundary analytics',
    'Digital submission workflows for surveyors',
    'Surveyor-General diagrams management',
    'Sectional plans registry',
    'Survey records digitization',
    'Real-time status tracking',
    'Integration with cadastral systems',
  ]

  const workflows = [
    { title: 'Submission', description: 'Surveyors submit diagrams digitally through secure portal' },
    { title: 'Verification', description: 'AI validates measurements and compliance with standards' },
    { title: 'Review', description: 'Surveyor-General office reviews and approves submissions' },
    { title: 'Registration', description: 'Approved diagrams are registered and archived digitally' },
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  SmartBoundary
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                  Surveyor-General Records Management System
                </p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Overview</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  SmartBoundary is a comprehensive digital platform for managing surveyor-general diagrams, 
                  sectional plans, and survey records. Built with AI-powered verification capabilities and 
                  advanced GIS integration, it streamlines the entire survey submission and approval process 
                  while ensuring compliance with cadastral standards.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Features Grid */}
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

          {/* Workflows */}
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

          {/* Technology Stack */}
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
                    Automated verification, pattern recognition, and anomaly detection
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>GIS Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Advanced geospatial analysis and boundary visualization
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Database className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Enterprise Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Secure, scalable storage for millions of cadastral records
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <Card className="bg-card">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Modernize Your Survey Management?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Schedule a demo to see how SmartBoundary can transform your surveyor-general operations
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
