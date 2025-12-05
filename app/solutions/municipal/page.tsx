import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Building2, Check, CreditCard, FileText, MessageSquare, Wrench } from 'lucide-react'

export default function MunicipalPage() {
  const features = [
    'Online billing and payment processing',
    'Permit application and tracking',
    'Complaint and service request management',
    'GIS integration for property services',
    'Municipal billing system integration',
    'Citizen account management',
    'Mobile-responsive design',
    'Real-time notifications and updates',
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  SmartCitizenServices
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                  Citizen Online Portal for Local Government
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
                  SmartCitizenServices delivers a comprehensive citizen portal that transforms how 
                  residents interact with their local government. From online bill payments to permit 
                  applications and service requests, this platform enhances civic engagement while 
                  improving operational efficiency for municipal staff.
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
            <h2 className="text-3xl font-bold text-foreground mb-8">Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CreditCard className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Billing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    View statements, make payments, and manage accounts online
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Permits</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Apply for building permits, licenses, and certificates
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <MessageSquare className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Complaints</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Report issues and track resolution progress in real-time
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Wrench className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Service Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Request municipal services and maintenance online
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="text-center">
            <Card className="bg-card">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Enhance Your Municipal Services
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  See how our citizen portal can improve service delivery and citizen satisfaction
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
