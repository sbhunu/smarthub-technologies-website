import Link from 'next/link'
import { Shield, Lock, Database, Eye, FileText, Mail } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-bold text-4xl md:text-5xl mb-4 text-balance">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Smart Hub Technologies ("we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This policy applies to all products and services offered by Smart Hub Technologies, including SmartBoundary, SmartDeed, SmartMiner, SmartCitizenServices, SmartValuer, MapRail, CommServe, and SmartAsset.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">2.1 Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Name, email address, and contact details</li>
                <li>Organization name and job title</li>
                <li>Account credentials and authentication data</li>
                <li>Communication preferences</li>
                <li>Information provided in forms, surveys, or support requests</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">2.2 Technical Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We automatically collect certain technical information, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>IP address and device identifiers</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Log data and analytics information</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">2.3 Service-Specific Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                Depending on the services you use, we may collect property records, cadastral data, land registration information, valuation data, and other information necessary to provide our enterprise solutions.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing transactions and managing user accounts</li>
                <li>Responding to inquiries and providing customer support</li>
                <li>Sending administrative information and service updates</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Ensuring security and preventing fraud</li>
                <li>Complying with legal obligations</li>
                <li>Marketing communications (with your consent)</li>
              </ul>
            </div>

            {/* Legal Basis for Processing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Legal Basis for Processing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We process your personal information based on the following legal grounds:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Consent:</strong> You have given explicit consent for processing your personal data</li>
                <li><strong className="text-foreground">Contract:</strong> Processing is necessary for the performance of a contract with you</li>
                <li><strong className="text-foreground">Legal Obligation:</strong> Processing is required to comply with legal requirements</li>
                <li><strong className="text-foreground">Legitimate Interests:</strong> Processing is necessary for our legitimate business interests</li>
              </ul>
            </div>

            {/* Data Sharing and Disclosure */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong className="text-foreground">Service Providers:</strong> Third-party vendors who perform services on our behalf</li>
                <li><strong className="text-foreground">Business Partners:</strong> Strategic partners for joint services or integrations</li>
                <li><strong className="text-foreground">Government Entities:</strong> When required by law or to protect rights and safety</li>
                <li><strong className="text-foreground">Professional Advisors:</strong> Legal, financial, and technical consultants</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information to third parties for their marketing purposes.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place, including standard contractual clauses approved by the European Commission and compliance with GDPR requirements.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Blockchain technology for immutable record-keeping</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on data protection practices</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. Retention periods vary based on data type and regulatory requirements.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under applicable data protection laws (including GDPR and POPIA), you have the following rights:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Right to Access:</strong> Request copies of your personal data</li>
                <li><strong className="text-foreground">Right to Rectification:</strong> Request correction of inaccurate information</li>
                <li><strong className="text-foreground">Right to Erasure:</strong> Request deletion of your personal data</li>
                <li><strong className="text-foreground">Right to Restriction:</strong> Request limitation of processing</li>
                <li><strong className="text-foreground">Right to Data Portability:</strong> Receive your data in a structured format</li>
                <li><strong className="text-foreground">Right to Object:</strong> Object to certain processing activities</li>
                <li><strong className="text-foreground">Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">10. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. For more information, please see our Cookie Policy.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">11. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal data, please contact us.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">12. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Continued use of our services constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Us */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">13. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <p className="text-foreground font-semibold mb-2">Smart Hub Technologies</p>
                <p className="text-muted-foreground mb-1">77 Main Street, Pomona, 1505, South Africa</p>
                <p className="text-muted-foreground mb-1">Email: admin@smarthubtechnologies.com</p>
                <p className="text-muted-foreground">Phone: +27 79 690 8740</p>
              </div>
            </div>

            {/* Regulatory Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">14. Regulatory Compliance</h2>
              <p className="text-muted-foreground leading-relaxed">
                Smart Hub Technologies complies with the Protection of Personal Information Act (POPIA) in South Africa, the General Data Protection Regulation (GDPR) in the European Union, and other applicable data protection laws. We are committed to upholding the highest standards of data privacy and security.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Contact Us About Privacy
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
