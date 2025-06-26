import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Mail,
  MapPin,
  Phone,
  Shield,
  Eye,
  Lock,
  Users,
} from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

const BRAND_NAME = "Bharat Travels";
const CURRENT_YEAR = new Date().getFullYear();
const LAST_UPDATED = "January 15, 2024";
const CONTACT_EMAIL = "privacy@bharattravels.com";
const CONTACT_PHONE = "+91 98765 43210";
const ADDRESS = [
  "Bharat Travels",
  "Attn: Privacy Department",
  "123 Heritage Lane",
  "New Delhi, DL 110001",
];

const privacySections = [
  {
    title: "1. Information We Collect",
    icon: Eye,
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          We collect information you provide directly to us, information we
          obtain automatically when you use our services, and information from
          third parties.
        </p>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">
            1.1 Personal Information You Provide
          </h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>
              <strong>Account Information:</strong> Name, email address, phone
              number, date of birth
            </li>
            <li>
              <strong>Booking Information:</strong> Travel preferences, passport
              details, emergency contacts
            </li>
            <li>
              <strong>Payment Information:</strong> Credit card details, billing
              address (processed securely)
            </li>
            <li>
              <strong>Communication:</strong> Messages, reviews, feedback, and
              customer service interactions
            </li>
            <li>
              <strong>Profile Information:</strong> Photos, travel history,
              preferences, and interests
            </li>
          </ul>

          <h3 className="text-lg font-medium mt-6">
            1.2 Automatically Collected Information
          </h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>
              <strong>Device Information:</strong> IP address, browser type,
              operating system, device identifiers
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent, search
              queries, booking patterns
            </li>
            <li>
              <strong>Location Data:</strong> GPS coordinates (with your
              permission), IP-based location
            </li>
            <li>
              <strong>Cookies and Tracking:</strong> Website preferences,
              session data, analytics information
            </li>
          </ul>

          <h3 className="text-lg font-medium mt-6">
            1.3 Third-Party Information
          </h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>
              Social media profile information (when you connect accounts)
            </li>
            <li>Travel partner information and reviews</li>
            <li>Payment processor and fraud prevention data</li>
            <li>Marketing partner and affiliate referral data</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    icon: Users,
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          We use the information we collect to provide, maintain, and improve
          our services, process transactions, and communicate with you.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Service Provision</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Process bookings and payments</li>
              <li>Provide customer support</li>
              <li>Send booking confirmations</li>
              <li>Facilitate travel arrangements</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Communication</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Send service updates</li>
              <li>Marketing communications</li>
              <li>Travel alerts and notifications</li>
              <li>Survey and feedback requests</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Improvement</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Analyze usage patterns</li>
              <li>Personalize recommendations</li>
              <li>Improve website functionality</li>
              <li>Develop new features</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Legal & Security</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and abuse</li>
              <li>Enforce terms of service</li>
              <li>Protect user safety</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "3. Information Sharing and Disclosure",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          We do not sell your personal information. We may share your
          information in the following circumstances:
        </p>

        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-blue-900">
              Service Providers
            </h3>
            <p className="text-blue-800 text-sm mt-2">
              We share information with hotels, airlines, tour operators, and
              other travel service providers to fulfill your bookings.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-green-900">
              Business Partners
            </h3>
            <p className="text-green-800 text-sm mt-2">
              We may share aggregated, non-personally identifiable information
              with marketing partners and analytics providers.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-yellow-900">
              Legal Requirements
            </h3>
            <p className="text-yellow-800 text-sm mt-2">
              We may disclose information when required by law, court order, or
              to protect our rights and safety.
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-purple-900">
              Business Transfers
            </h3>
            <p className="text-purple-800 text-sm mt-2">
              In the event of a merger, acquisition, or sale, your information
              may be transferred to the new entity.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "4. Data Security",
    icon: Lock,
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized access,
          alteration, disclosure, or destruction.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Technical Safeguards</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Encrypted data storage</li>
              <li>Regular security audits and testing</li>
              <li>Secure payment processing (PCI DSS compliant)</li>
              <li>Multi-factor authentication</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Organizational Measures</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Employee training on data protection</li>
              <li>Access controls and permissions</li>
              <li>Regular backup procedures</li>
              <li>Incident response procedures</li>
              <li>Third-party security assessments</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 p-4 rounded-lg mt-4">
          <p className="text-red-800 text-sm">
            <strong>Important:</strong> While we strive to protect your
            information, no method of transmission over the internet or
            electronic storage is 100% secure. We cannot guarantee absolute
            security.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "5. Cookies and Tracking Technologies",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          We use cookies and similar technologies to enhance your browsing
          experience, analyze site traffic, and personalize content.
        </p>

        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-center mb-2">
                Essential Cookies
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Required for basic site functionality and security
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-center mb-2">
                Analytics Cookies
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Help us understand how visitors use our site
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-center mb-2">
                Marketing Cookies
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Used to deliver relevant advertisements
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            You can control cookie preferences through your browser settings or
            our cookie consent banner. Note that disabling certain cookies may
            affect site functionality.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "6. Your Rights and Choices",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Depending on your location, you may have certain rights regarding your
          personal information:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">GDPR Rights (EU Residents)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Right to access your data</li>
              <li>Right to rectification</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">
              CCPA Rights (California Residents)
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Right to know what data is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of sale</li>
              <li>Right to non-discrimination</li>
              <li>Right to correct inaccurate information</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <p className="text-blue-800 text-sm">
            <strong>How to Exercise Your Rights:</strong> Contact us at{" "}
            {CONTACT_EMAIL} or use our online privacy request form. We will
            respond within 30 days.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "7. Data Retention",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          We retain your personal information for as long as necessary to
          provide our services, comply with legal obligations, resolve disputes,
          and enforce our agreements.
        </p>

        <div className="space-y-3">
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>
              <strong>Account Information:</strong> Retained while your account
              is active and for 3 years after closure
            </li>
            <li>
              <strong>Booking Records:</strong> Retained for 7 years for tax and
              legal compliance
            </li>
            <li>
              <strong>Payment Information:</strong> Retained as required by
              payment processors and regulations
            </li>
            <li>
              <strong>Marketing Data:</strong> Retained until you opt-out or for
              2 years of inactivity
            </li>
            <li>
              <strong>Website Analytics:</strong> Aggregated data retained
              indefinitely, personal data for 26 months
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "8. International Data Transfers",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Your information may be transferred to and processed in countries
          other than your country of residence. We ensure appropriate safeguards
          are in place for international transfers.
        </p>

        <div className="bg-gray-50 border p-4 rounded-lg">
          <h3 className="font-medium mb-2">Transfer Safeguards</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>
              Standard Contractual Clauses (SCCs) approved by the European
              Commission
            </li>
            <li>Adequacy decisions for transfers to approved countries</li>
            <li>Binding Corporate Rules for intra-group transfers</li>
            <li>Certification schemes and codes of conduct</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "9. Children's Privacy",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Our services are not directed to children under 13 years of age. We do
          not knowingly collect personal information from children under 13. If
          we become aware that we have collected personal information from a
          child under 13, we will take steps to delete such information.
        </p>

        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <p className="text-orange-800 text-sm">
            <strong>Parents:</strong> If you believe your child has provided us
            with personal information, please contact us immediately at{" "}
            {CONTACT_EMAIL}.
          </p>
        </div>
      </>
    ),
  },
  {
    title: "10. Changes to This Privacy Policy",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify
          you of any material changes by posting the new Privacy Policy on this
          page and updating the "Last updated" date. For significant changes, we
          may also send you an email notification.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Your continued use of our services after any changes to this Privacy
          Policy constitutes your acceptance of such changes.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to us. Learn how we protect your data.
            </p>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              Last updated: {LAST_UPDATED}
            </div>
            <Badge variant="secondary" className="text-xs">
              GDPR & CCPA Compliant
            </Badge>
          </div>

          {/* Privacy Content */}
          <Card>
            <CardContent className="p-8 space-y-8">
              {privacySections.map((section, index) => (
                <section key={index} className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary flex items-center">
                    {section.icon && <section.icon className="h-6 w-6 mr-2" />}
                    {section.title}
                  </h2>
                  {section.content}
                  {index < privacySections.length - 1 && <Separator />}
                </section>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
