import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title:       "Terms of Service | SBC Cleaning Services Dubai",
  description: "Terms of Service for SBC Cleaning Services Dubai. Read our terms and conditions for cleaning services in Dubai, UAE.",
  alternates:  { canonical: `${COMPANY.siteUrl}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-hero-gradient pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Terms of Service" }]} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-white/85 text-xl max-w-2xl">
            Please read these terms carefully before using our cleaning services.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gray leading-relaxed mb-6">
            <strong>Last updated:</strong> February 2025
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">1. Service Agreement</h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            By booking a cleaning service with {COMPANY.legalName} (&quot;SBC Cleaning&quot;, &quot;we&quot;, &quot;us&quot;), you agree to these Terms of Service. These terms apply to all cleaning services provided within Dubai, UAE.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">2. Booking & Scheduling</h2>
          <ul className="list-disc pl-6 text-brand-gray space-y-2 mb-6">
            <li>Bookings can be made via phone, WhatsApp, or our website booking form</li>
            <li>All bookings are subject to availability and confirmation by our team</li>
            <li>We will confirm your booking within 30 minutes during business hours</li>
            <li>Specific time slots are approximate and may vary by up to 30 minutes</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">3. Cancellation Policy</h2>
          <ul className="list-disc pl-6 text-brand-gray space-y-2 mb-6">
            <li>Cancellations made 24 hours or more before the scheduled service are free of charge</li>
            <li>Cancellations within 24 hours may incur a cancellation fee of up to 50% of the service cost</li>
            <li>No-shows without prior notice will be charged the full service amount</li>
            <li>We reserve the right to cancel or reschedule services due to unforeseen circumstances</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">4. Pricing & Payment</h2>
          <ul className="list-disc pl-6 text-brand-gray space-y-2 mb-6">
            <li>Prices quoted are in UAE Dirhams (AED) and are subject to the scope of work agreed</li>
            <li>Additional charges may apply for heavily soiled areas, extra rooms, or special requests</li>
            <li>Payment is due upon completion of the cleaning service</li>
            <li>We accept cash, bank transfer, and major payment methods</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">5. Our Responsibilities</h2>
          <ul className="list-disc pl-6 text-brand-gray space-y-2 mb-6">
            <li>We provide fully trained, vetted, and insured cleaning staff</li>
            <li>We bring all necessary professional cleaning supplies and equipment</li>
            <li>We perform services with reasonable care and to professional standards</li>
            <li>We are fully licensed and insured for cleaning services in Dubai</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">6. Client Responsibilities</h2>
          <ul className="list-disc pl-6 text-brand-gray space-y-2 mb-6">
            <li>Provide safe and reasonable access to the property</li>
            <li>Secure valuables, fragile items, and pets before the cleaning session</li>
            <li>Inform us of any specific cleaning requirements or areas of concern</li>
            <li>Ensure running water and electricity are available at the property</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">7. Satisfaction Guarantee</h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            We stand behind the quality of our work. If you are not satisfied with any aspect of our cleaning service, please notify us within 24 hours and we will return to address any concerns at no additional cost.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">8. Liability</h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            SBC Cleaning is fully insured. In the unlikely event of accidental damage to your property during cleaning, we will assess and compensate fairly. Claims must be reported within 24 hours of the service. Our liability is limited to the direct cost of repair or replacement of the damaged item.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">9. Governing Law</h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            These Terms of Service are governed by the laws of the United Arab Emirates and the Emirate of Dubai. Any disputes shall be subject to the jurisdiction of the courts of Dubai.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">10. Contact</h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            For questions about these terms, contact us:
          </p>
          <ul className="list-none text-brand-gray space-y-2 mb-6">
            <li><strong>Company:</strong> {COMPANY.legalName}</li>
            <li><strong>Email:</strong> {COMPANY.email}</li>
            <li><strong>Phone:</strong> {COMPANY.phoneDisplay}</li>
            <li><strong>Location:</strong> {COMPANY.address.full}</li>
          </ul>
        </div>
      </section>
    </>
  );
}
