import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Target, Eye, Award, Users2, Globe, ShieldCheck } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pioneering cutting-edge solutions using AI, blockchain, and advanced software engineering',
    },
    {
      icon: ShieldCheck,
      title: 'Trust & Security',
      description: 'Building secure, reliable systems that governments and enterprises can depend on',
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'Digitizing African land and state infrastructure to drive economic growth',
    },
  ]

  const capabilities = [
    'Enterprise Information Systems',
    'AI-driven automation and analytics',
    'Blockchain-enabled trust systems',
    'Custom mobile and web app engineering',
    'GIS and geospatial technology',
    'Consultancy on property systems and land governance',
  ]

  const reasons = [
    {
      title: '20+ Years Experience',
      description: 'Deep expertise in land and property systems across Africa',
    },
    {
      title: 'Trusted by Government',
      description: 'Serving municipalities, state agencies, and public enterprises',
    },
    {
      title: 'Domain Expertise',
      description: 'Specialized knowledge in cadastral systems, deeds, valuation, and infrastructure',
    },
    {
      title: 'Proven Track Record',
      description: 'Successfully deployed systems managing millions of land records',
    },
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              About Smart Hub Technologies
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a technology company specializing in digital infrastructure for land, 
              property, and state management systems across Africa
            </p>
          </div>

          {/* Who We Are */}
          <section className="mb-20">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Users2 className="h-8 w-8 text-primary" />
                  Who We Are
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Smart Hub Technologies is a leading provider of enterprise software solutions for 
                  property, land, and state management. With over two decades of experience, we have 
                  established ourselves as trusted technology partners to governments, municipalities, 
                  and state agencies across Africa. Our team combines deep domain expertise in land 
                  administration with cutting-edge technology skills in AI, blockchain, and software 
                  engineering to deliver transformative digital solutions.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Vision & Mission */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Eye className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To digitize African land and state infrastructure, creating transparent, 
                    efficient, and secure systems that drive economic development and empower 
                    citizens through technology.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Target className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Building intelligent, scalable systems for property, land, state, municipal, 
                    and customary land management using AI, blockchain, and advanced software 
                    engineering to serve governments and enterprises.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <Card key={value.title} className="text-center">
                    <CardHeader>
                      <div className="mx-auto h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* What We Do */}
          <section className="mb-20">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">What We Do</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {capabilities.map((capability) => (
                    <div key={capability} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{capability}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Why Choose Us */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((reason) => (
                <Card key={reason.title}>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Award className="h-6 w-6 text-primary" />
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {reason.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <Card className="bg-card">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Partner with Us
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join leading government agencies and enterprises that trust Smart Hub Technologies
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
