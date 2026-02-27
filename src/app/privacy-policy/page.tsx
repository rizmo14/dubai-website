import type { Metadata } from "next";
import { COMPANY } from "@/lib/data";
import Breadcrumb from "@/components/shared/Breadcrumb";

export const metadata: Metadata = {
  title:       "Privacy Policy | SBC Cleaning Services Dubai",
  description: "Privacy Policy for SBC Cleaning Services Dubai. Learn how we collect, use, and protect your personal information.",
  alternates:  { canonical: `${COMPANY.siteUrl}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-hero-gradient pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/85 text-xl max-w-2xl">
            Your privacy matters to us. This policy outlines how we handle your data.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-brand">
          <p className="text-brand-gray leading-relaxed mb-6">
            <strong>Last updated:</strong> February 2025
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">1. Information We Collect</h2>
          <p className="text-brand-gray leading-relaxed mb-4">
            When you use our services or contact us, we may collect the following information:
          </p>
          <ul className="list-disc pl-6 text-brand-gray space-y-2 mb-6">
            <li>Your name and contact details (phone number, email address)</li>
            <li>Your address or property location in Dubai</li>
            <li>Service preferences and booking history</li>
            <li>Communication records (WhatsApp messages, emails, phone calls)</li>
            <li>Website usage data through cookies and analytics tools</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="text-brand-gray leading-relaxed mb-4">
            We use your personal information to:
          </p>
          <ul className="list-disc pl-6 text-brand-gray space-y-2 mb-6">
            <li>Process and fulfil your cleaning service bookings</li>
            <li>Communicate with you about your appointments and services</li>
            <li>Send you service reminders and follow-up communications</li>
            <li>Improve our services and customer experience</li>
            <li>Comply with legal obligations under UAE law</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">3. Data Protection</h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and access is restricted to authorized personnel only.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">4. Third-Party Sharing</h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service partners only when necessary to deliver our cleaning services, and only with your consent.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">5. Cookies & Analytics</h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            Our website uses cookies and Google Analytics to understand how visitors use our site. This helps us improve our website and services. You can disable cookies in your browser settings at any time.
          </p>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">6. Your Rights</h2>
          <p className="text-brand-gray leading-relaxed mb-4">
            Under UAE data protection regulations, you have the right to:
          </p>
          <ul className="list-disc pl-6 text-brand-gray space-y-2 mb-6">
            <li>Access your personal data held by us</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for data processing</li>
            <li>Lodge a complaint with the relevant authority</li>
          </ul>

          <h2 className="text-2xl font-bold text-brand-dark mt-10 mb-4">7. Contact Us</h2>
          <p className="text-brand-gray leading-relaxed mb-6">
            If you have any questions about this Privacy Policy, please contact us:
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
