import Link from 'next/link'
import { Database, Shield, Lock, CheckCircle, AlertTriangle, Mail } from 'lucide-react'

export default function DataProtectionPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Database className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-bold text-4xl md:text-5xl mb-4 text-balance">
              Data Protection Policy
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
                Smart Hub Technologies is committed to protecting the personal information of our clients, partners, and users. This Data Protection Policy outlines our approach to data protection and our compliance with international data protection regulations, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Protection of Personal Information Act (POPIA) - South Africa</li>
                <li>General Data Protection Regulation (GDPR) - European Union</li>
                <li>Other applicable international data protection laws</li>
              </ul>
            </div>

            {/* Data Protection Principles */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Data Protection Principles</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We adhere to the following core principles when processing personal information:
              </p>

              <div className="space-y-6">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Lawfulness, Fairness, and Transparency</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Personal information is processed lawfully, fairly, and transparently in relation to the data subject.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Purpose Limitation</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Data is collected for specified, explicit, and legitimate purposes and not further processed in a manner incompatible with those purposes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Data Minimization</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We collect only data that is adequate, relevant, and limited to what is necessary for the purposes for which it is processed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Accuracy</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Personal data is kept accurate and up to date. Reasonable steps are taken to ensure inaccurate data is rectified or deleted.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Storage Limitation</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Data is retained only for as long as necessary to fulfill the purposes for which it was collected.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Integrity and Confidentiality</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Data is processed securely using appropriate technical and organizational measures to protect against unauthorized access, loss, or damage.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Accountability</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We are responsible for and can demonstrate compliance with data protection principles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical and Organizational Measures */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Technical and Organizational Security Measures</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">3.1 Technical Measures</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong className="text-foreground">Encryption:</strong> Data encryption in transit (TLS 1.3) and at rest (AES-256)</li>
                <li><strong className="text-foreground">Blockchain Security:</strong> Immutable record-keeping using distributed ledger technology</li>
                <li><strong className="text-foreground">Access Controls:</strong> Role-based access control (RBAC) and multi-factor authentication</li>
                <li><strong className="text-foreground">Network Security:</strong> Firewalls, intrusion detection, and prevention systems</li>
                <li><strong className="text-foreground">Database Security:</strong> Encrypted databases with audit logging</li>
                <li><strong className="text-foreground">Regular Updates:</strong> Security patches and software updates</li>
                <li><strong className="text-foreground">Backup Systems:</strong> Encrypted backups with disaster recovery procedures</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">3.2 Organizational Measures</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Staff Training:</strong> Regular data protection and security awareness training</li>
                <li><strong className="text-foreground">Confidentiality Agreements:</strong> All staff sign confidentiality and data protection agreements</li>
                <li><strong className="text-foreground">Access Management:</strong> Principle of least privilege and need-to-know basis</li>
                <li><strong className="text-foreground">Vendor Management:</strong> Due diligence on third-party processors</li>
                <li><strong className="text-foreground">Incident Response:</strong> Documented procedures for data breach response</li>
                <li><strong className="text-foreground">Regular Audits:</strong> Internal and external security audits</li>
                <li><strong className="text-foreground">Privacy by Design:</strong> Data protection integrated into system development</li>
              </ul>
            </div>

            {/* Data Subject Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Subject Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We respect and facilitate the exercise of the following data subject rights:
              </p>

              <div className="space-y-4">
                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Right of Access</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Request confirmation of whether we process your personal data and obtain a copy of that data.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Right to Rectification</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Request correction of inaccurate or incomplete personal data.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Right to Erasure ("Right to be Forgotten")</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Request deletion of your personal data under certain circumstances, subject to legal retention requirements.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Right to Restriction of Processing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Request limitation of processing in specific situations, such as while disputing accuracy.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Right to Data Portability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Receive your personal data in a structured, commonly used format and transmit it to another controller.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Right to Object</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Object to processing based on legitimate interests or for direct marketing purposes.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Rights Related to Automated Decision-Making</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Not be subject to decisions based solely on automated processing that produce legal or similarly significant effects.
                  </p>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Right to Withdraw Consent</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Withdraw consent at any time where processing is based on consent, without affecting lawfulness of prior processing.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-6">
                To exercise these rights, please contact us using the details provided at the end of this policy. We will respond to requests within the timeframes required by applicable law (typically 30 days).
              </p>
            </div>

            {/* Data Breach Procedures */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Breach Response</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">5.1 Detection and Assessment</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We maintain systems to detect potential data breaches and assess their severity. All suspected breaches are investigated promptly.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">5.2 Notification</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the event of a data breach that poses a risk to data subjects' rights and freedoms, we will:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Notify relevant supervisory authorities within 72 hours of becoming aware of the breach (as required by GDPR/POPIA)</li>
                <li>Notify affected individuals without undue delay if there is a high risk to their rights and freedoms</li>
                <li>Document all breaches, including facts, effects, and remedial actions taken</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-foreground">5.3 Containment and Recovery</h3>
              <p className="text-muted-foreground leading-relaxed">
                We implement immediate containment measures, conduct forensic analysis, and restore systems securely. Post-incident reviews identify improvements to prevent future breaches.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When transferring personal data internationally, we ensure appropriate safeguards are in place:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Adequacy Decisions:</strong> Transfers to countries deemed adequate by relevant authorities</li>
                <li><strong className="text-foreground">Standard Contractual Clauses:</strong> EU-approved contracts for international transfers</li>
                <li><strong className="text-foreground">Binding Corporate Rules:</strong> Internal policies ensuring data protection across our organization</li>
                <li><strong className="text-foreground">Explicit Consent:</strong> Obtaining informed consent where required</li>
                <li><strong className="text-foreground">Transfer Impact Assessments:</strong> Evaluating risks of data transfers to specific jurisdictions</li>
              </ul>
            </div>

            {/* Third-Party Processors */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Third-Party Data Processors</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We engage third-party service providers who may process personal data on our behalf. We ensure:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Written contracts specifying data processing obligations</li>
                <li>Due diligence assessments of processor security measures</li>
                <li>Processors only act on our documented instructions</li>
                <li>Appropriate technical and organizational security measures</li>
                <li>Sub-processor approval requirements</li>
                <li>Regular audits and compliance reviews</li>
              </ul>
            </div>

            {/* Data Protection Officer */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Data Protection Officer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Smart Hub Technologies has appointed a Data Protection Officer (DPO) who is responsible for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Monitoring compliance with data protection laws and policies</li>
                <li>Providing advice on data protection impact assessments</li>
                <li>Serving as point of contact for supervisory authorities</li>
                <li>Handling data subject requests and complaints</li>
                <li>Conducting staff training on data protection</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                You can contact our DPO regarding any data protection matters at admin@smarthubtechnologies.com.
              </p>
            </div>

            {/* Records and Documentation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Records of Processing Activities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We maintain comprehensive records of our data processing activities, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Categories of personal data processed</li>
                <li>Purposes of processing</li>
                <li>Categories of data subjects</li>
                <li>Recipients of personal data</li>
                <li>International data transfers</li>
                <li>Retention periods</li>
                <li>Security measures implemented</li>
              </ul>
            </div>

            {/* Privacy Impact Assessments */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">10. Data Protection Impact Assessments</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For high-risk processing activities, we conduct Data Protection Impact Assessments (DPIAs) to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Identify and assess risks to data subjects</li>
                <li>Evaluate necessity and proportionality of processing</li>
                <li>Determine mitigation measures</li>
                <li>Consult with supervisory authorities when required</li>
                <li>Document decisions and risk management strategies</li>
              </ul>
            </div>

            {/* Policy Updates */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">11. Policy Reviews and Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                This Data Protection Policy is reviewed annually and updated as necessary to reflect changes in legislation, technology, and business practices. All updates are communicated to relevant stakeholders and made available on our website.
              </p>
            </div>

            {/* Supervisory Authorities */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">12. Supervisory Authorities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to lodge a complaint with relevant supervisory authorities:
              </p>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mb-4">
                <p className="text-foreground font-semibold mb-2">South Africa - Information Regulator</p>
                <p className="text-muted-foreground mb-1">Email: inforeg@justice.gov.za</p>
                <p className="text-muted-foreground">Website: www.justice.gov.za/inforeg</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                For EU data subjects, you may contact your local data protection authority.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">13. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For any questions about this Data Protection Policy or to exercise your rights, please contact:
              </p>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <p className="text-foreground font-semibold mb-2">Smart Hub Technologies</p>
                <p className="text-muted-foreground mb-1">Data Protection Officer</p>
                <p className="text-muted-foreground mb-1">77 Main Street, Pomona, 1505, South Africa</p>
                <p className="text-muted-foreground mb-1">Email: admin@smarthubtechnologies.com</p>
                <p className="text-muted-foreground">Phone: +27 79 690 8740</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Contact Data Protection Officer
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
