import Link from 'next/link'
import { FileText, Scale, AlertCircle, Mail } from 'lucide-react'

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-b border-zinc-800">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Scale className="h-12 w-12 text-primary" />
            </div>
            <h1 className="font-bold text-4xl md:text-5xl mb-4 text-balance">
              Terms of Service
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
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your access to and use of Smart Hub Technologies' website, products, and services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you do not agree to these Terms, you may not access or use our Services. These Terms constitute a legally binding agreement between you and Smart Hub Technologies (Pty) Ltd.
              </p>
            </div>

            {/* Definitions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Definitions</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong className="text-foreground">"Services"</strong> refers to all products, software, and services provided by Smart Hub Technologies</li>
                <li><strong className="text-foreground">"User," "You," or "Your"</strong> refers to the individual or entity accessing our Services</li>
                <li><strong className="text-foreground">"Content"</strong> means any information, data, text, software, or materials</li>
                <li><strong className="text-foreground">"Account"</strong> refers to your registered user account with Smart Hub Technologies</li>
              </ul>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Service Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Smart Hub Technologies provides enterprise information systems for property, land, and state management, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>SmartBoundary - Surveyor-General Records Management</li>
                <li>SmartDeed - Digital Deeds Management & Conveyancing</li>
                <li>SmartMiner - Mining Rights Registration & Cadastre</li>
                <li>SmartCitizenServices - Municipal Citizen Portal</li>
                <li>SmartValuer - AI-Enhanced Property Valuation</li>
                <li>MapRail - Railway Property & Infrastructure Management</li>
                <li>CommServe - Customary Land Management</li>
                <li>SmartAsset - Blockchain Asset Tokenization</li>
              </ul>
            </div>

            {/* User Accounts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. User Accounts</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">4.1 Account Registration</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To access certain Services, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to maintain its accuracy.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">4.2 Account Security</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized access or security breach.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">4.3 Account Termination</h3>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent, abusive, or illegal activity.
              </p>
            </div>

            {/* Acceptable Use */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Acceptable Use Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to use the Services to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Transmit malicious code, viruses, or harmful software</li>
                <li>Attempt to gain unauthorized access to systems or networks</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Impersonate others or misrepresent your identity</li>
                <li>Engage in fraudulent activities or data manipulation</li>
                <li>Reverse engineer, decompile, or disassemble the software</li>
                <li>Use automated systems to access the Services without permission</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">6.1 Our Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All intellectual property rights in the Services, including software, designs, trademarks, and content, are owned by Smart Hub Technologies or our licensors. These Terms do not grant you any ownership rights.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">6.2 License Grant</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your internal business purposes.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">6.3 Your Content</h3>
              <p className="text-muted-foreground leading-relaxed">
                You retain ownership of content you submit to the Services. By submitting content, you grant us a license to use, store, and process that content to provide the Services.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Payment and Fees</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">7.1 Fees</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Certain Services require payment of fees. All fees are exclusive of applicable taxes unless otherwise stated. You agree to pay all fees according to the pricing and payment terms presented to you.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">7.2 Billing</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may bill you on a subscription basis or per-transaction basis as specified in your service agreement. Fees are non-refundable except as required by law or as expressly stated in your agreement.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">7.3 Price Changes</h3>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to change our fees with reasonable notice. Continued use of the Services after a price change constitutes acceptance of the new fees.
              </p>
            </div>

            {/* Data and Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Data and Privacy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your use of the Services is subject to our Privacy Policy, which is incorporated into these Terms by reference. We process personal data in accordance with applicable data protection laws, including POPIA and GDPR.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for ensuring that you have the necessary rights and permissions to provide any data to us and that your use of the Services complies with applicable privacy laws.
              </p>
            </div>

            {/* Service Level and Availability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We strive to provide reliable Services but do not guarantee uninterrupted access. We may suspend or modify the Services for maintenance, updates, or other reasons. Service Level Agreements (SLAs) may be specified in your enterprise agreement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to discontinue any aspect of the Services with reasonable notice.
              </p>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">10. Warranties and Disclaimers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We do not warrant that the Services will be error-free, secure, or meet your requirements. Enterprise customers may have specific warranties outlined in their service agreements.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">11. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SMART HUB TECHNOLOGIES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our total liability for all claims arising from or related to the Services shall not exceed the amount paid by you to us in the twelve (12) months preceding the claim, or ZAR 10,000, whichever is greater.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">12. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Smart Hub Technologies, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of the Services, violation of these Terms, or infringement of any rights of another party.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">13. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">13.1 Governing Law</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the Republic of South Africa, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">13.2 Jurisdiction</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of South Africa.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">13.3 Arbitration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Parties may agree to resolve disputes through arbitration in accordance with the Arbitration Act of South Africa.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">14. Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of the Services after changes become effective constitutes acceptance of the modified Terms.
              </p>
            </div>

            {/* General Provisions */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">15. General Provisions</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">15.1 Entire Agreement</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms, together with our Privacy Policy and any applicable service agreements, constitute the entire agreement between you and Smart Hub Technologies.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">15.2 Severability</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">15.3 Waiver</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No waiver of any term shall be deemed a further or continuing waiver of such term or any other term.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-foreground">15.4 Assignment</h3>
              <p className="text-muted-foreground leading-relaxed">
                You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-foreground">16. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
                <p className="text-foreground font-semibold mb-2">Smart Hub Technologies</p>
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
              Contact Our Legal Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
