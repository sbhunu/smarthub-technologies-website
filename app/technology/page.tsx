import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Brain, Shield, MapPin, Code, Smartphone, Workflow, Database, Cloud } from 'lucide-react'

export default function TechnologyPage() {
  const technologies = [
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Machine learning models for automated verification, property valuation, pattern recognition, and predictive analytics to enhance decision-making.',
      applications: [
        'Automated diagram verification',
        'Property valuation models (AVM)',
        'Document classification',
        'Fraud detection',
      ],
    },
    {
      icon: Shield,
      title: 'Blockchain & DLT',
      description: 'Distributed ledger technology for immutable record-keeping, transparent transactions, and secure asset tokenization.',
      applications: [
        'Deed registration security',
        'Mining rights immutability',
        'Asset tokenization',
        'Smart contracts',
      ],
    },
    {
      icon: MapPin,
      title: 'GIS & Geospatial',
      description: 'Advanced geographic information systems for spatial analysis, mapping, and visualization of land parcels and infrastructure.',
      applications: [
        'Cadastral mapping',
        'Boundary analytics',
        'Infrastructure visualization',
        'Spatial queries',
      ],
    },
    {
      icon: Code,
      title: 'Enterprise Software',
      description: 'Scalable, secure enterprise architecture with modern development frameworks and cloud-native design patterns.',
      applications: [
        'Microservices architecture',
        'API-first design',
        'Event-driven systems',
        'Cloud deployment',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications with offline capabilities for field data capture and remote operations.',
      applications: [
        'iOS and Android apps',
        'Offline-first design',
        'Field data capture',
        'Real-time sync',
      ],
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Intelligent process automation using n8n, Strapi, and custom workflow engines to streamline business operations.',
      applications: [
        'Approval workflows',
        'Document processing',
        'Notification systems',
        'Integration orchestration',
      ],
    },
  ]

  const integrations = [
    { name: 'Esri ArcGIS', category: 'GIS', logo: '/logos/esri-arcgis.svg' },
    { name: 'QGIS', category: 'GIS', logo: '/logos/qgis.png' },
    { name: 'PostGIS', category: 'GIS', logo: '/logos/postgis.svg' },
    { name: 'SAP', category: 'ERP', logo: '/logos/sap.svg' },
    { name: 'Ethereum', category: 'Blockchain', logo: '/logos/ethereum.svg' },
    { name: 'Hyperledger', category: 'Blockchain', logo: '/logos/hyperledger.svg' },
    { name: 'TensorFlow', category: 'AI/ML', logo: '/logos/tensorflow.svg' },
    { name: 'PyTorch', category: 'AI/ML', logo: '/logos/pytorch.svg' },
    { name: 'AWS', category: 'Cloud', logo: '/logos/aws.svg' },
    { name: 'Azure', category: 'Cloud', logo: '/logos/azure.svg' },
  ]

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Technology & Innovation
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leveraging cutting-edge technologies to build the next generation of 
              land and property management systems
            </p>
          </div>

          {/* Technology Focus Areas */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech) => {
                const Icon = tech.icon
                return (
                  <Card key={tech.title} className="flex flex-col">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{tech.title}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {tech.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-foreground">Applications:</p>
                        {tech.applications.map((app) => (
                          <div key={app} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-sm text-muted-foreground">{app}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* Partnerships & Integrations */}
          <section className="mb-20">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Partnerships & Integrations</CardTitle>
                <CardDescription>
                  We integrate with leading platforms and technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {integrations.map((integration) => (
                    <div key={integration.name} className="text-center">
                      <div className="h-20 w-20 mx-auto rounded-lg bg-card border border-border flex items-center justify-center mb-2 p-3 hover:border-primary transition-colors">
                        {integration.logo ? (
                          <Image
                            src={integration.logo}
                            alt={`${integration.name} logo`}
                            width={64}
                            height={64}
                            className="object-contain"
                            style={{ maxWidth: '100%', height: 'auto' }}
                          />
                        ) : (
                          <Database className="h-8 w-8 text-muted-foreground" />
                        )}
                      </div>
                      <p className="text-sm font-medium text-foreground">{integration.name}</p>
                      <p className="text-xs text-muted-foreground">{integration.category}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Architecture */}
          <section className="mb-20">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Cloud className="h-8 w-8 text-primary" />
                  Enterprise Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our solutions are built on modern, cloud-native architectures designed for 
                  scalability, security, and performance. We employ microservices patterns, 
                  event-driven design, and API-first approaches to ensure flexibility and 
                  maintainability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold text-foreground">Scalability</h4>
                    <p className="text-sm text-muted-foreground">
                      Horizontal scaling to handle millions of concurrent users and transactions
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold text-foreground">Security</h4>
                    <p className="text-sm text-muted-foreground">
                      Multi-layer security with encryption, authentication, and audit trails
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-semibold text-foreground">Reliability</h4>
                    <p className="text-sm text-muted-foreground">
                      99.9% uptime SLA with redundancy and disaster recovery
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA */}
          <section className="text-center">
            <Card className="bg-card">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Explore Our Technology Solutions
                </h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Learn how our innovative technology can transform your operations
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <Link href="/solutions">View Solutions</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
