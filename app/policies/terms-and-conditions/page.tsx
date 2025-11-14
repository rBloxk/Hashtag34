export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Terms and Conditions
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Hashtag34 Stories website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on Hashtag34 Stories website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Product Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content on this site is accurate, complete, reliable, current, or error-free. If a product offered by us is not as described, your sole remedy is to return it in unused condition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Customization and Design</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you customize products through our platform:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>You are responsible for ensuring that your designs do not infringe on any third-party rights</li>
                <li>You grant us a license to use, reproduce, and display your designs for the purpose of fulfilling your order</li>
                <li>We reserve the right to refuse to print any design that we deem inappropriate, offensive, or illegal</li>
                <li>Customized products are non-refundable unless there is a manufacturing defect</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Pricing and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                All prices are listed in INR and are subject to change without notice. We reserve the right to modify prices at any time. Payment must be received before we begin processing your order. We accept various payment methods as displayed on our checkout page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Shipping and Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will make every effort to deliver products within the estimated timeframe. However, delivery times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers or customs. Risk of loss and title for products pass to you upon delivery to the carrier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Returns and Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                Please refer to our Return Policy for detailed information about returns and refunds. Customized products may have different return policies than standard products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Hashtag34 Stories or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Hashtag34 Stories or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at hello@hashtag34.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

