import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Terms and Conditions
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using Bharat Travels
              services
            </p>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              Last updated: June 15, 2024
            </div>
          </div>

          <Card>
            <CardContent className="p-6 md:p-8 space-y-6">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By using Bharat Travels' services, you agree to be bound by
                  these terms. These apply to all users including browsers,
                  customers, and content contributors. If you disagree with any
                  terms, you may not access our services.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">
                  2. Booking and Payment
                </h2>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">2.1 Booking Process</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>
                      Bookings require confirmation and are subject to
                      availability
                    </li>
                    <li>Confirmation occurs only after payment processing</li>
                    <li>We reserve the right to refuse any booking</li>
                    <li>Prices may change until booking confirmation</li>
                  </ul>

                  <h3 className="text-lg font-medium mt-4">
                    2.2 Payment Terms
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>
                      Full payment required unless installment plans are offered
                    </li>
                    <li>
                      We accept UPI, credit/debit cards, net banking, and
                      wallets
                    </li>
                    <li>Prices are in INR unless specified otherwise</li>
                  </ul>
                </div>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">
                  3. Cancellation Policy
                </h2>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium">
                    3.1 Customer Cancellation
                  </h3>
                  <div className="bg-muted p-4 rounded-lg">
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>30+ days before:</strong> 90% refund
                      </li>
                      <li>
                        <strong>15-29 days before:</strong> 75% refund
                      </li>
                      <li>
                        <strong>7-14 days before:</strong> 50% refund
                      </li>
                      <li>
                        <strong>48 hours-6 days before:</strong> 25% refund
                      </li>
                      <li>
                        <strong>Less than 48 hours:</strong> No refund
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-lg font-medium mt-4">
                    3.2 Bharat Travels Cancellation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may cancel due to unforeseen circumstances, offering full
                    refunds or rescheduling options.
                  </p>
                </div>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">
                  4. Travel Requirements
                </h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Valid government ID proof required for all travelers</li>
                  <li>
                    Ensure passport has 6+ months validity for international
                    travel
                  </li>
                  <li>Obtain required visas and vaccinations</li>
                  <li>
                    Arrive 3 hours before international flights, 2 hours for
                    domestic
                  </li>
                </ul>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">
                  5. Travel Insurance
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strongly recommend comprehensive travel insurance covering
                  medical emergencies, trip cancellations, and lost baggage.
                  Bharat Travels is not liable for incidents covered by
                  insurance.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">
                  6. Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  As intermediaries, we're not liable for service provider
                  actions. Our liability is limited to the tour cost. We're not
                  responsible for indirect/consequential damages.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">
                  7. Force Majeure
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're not liable for failures due to unforeseen events like
                  natural disasters, wars, pandemics, or government actions.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">
                  8. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms are governed by Indian law. Disputes will be
                  resolved in Mumbai courts.
                </p>
              </section>

              <Separator />

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary">
                  9. Policy Changes
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update these terms periodically. Continued service use
                  after changes implies acceptance.
                </p>
              </section>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground py-4">
            For questions, contact us at legal@bharattravels.in or
            +91-9610846782
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
