export default function CustomisationPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Customisation Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Hashtag34 Stories, we offer extensive customization options to help you create unique, personalized products. This policy outlines the terms and guidelines for customizing products through our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Customization Options</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our customization platform allows you to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Add text, images, and graphics to products</li>
                <li>Choose from various fonts, colors, and sizes</li>
                <li>Upload your own images and designs</li>
                <li>Position and resize design elements</li>
                <li>Preview your design before ordering</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Design Guidelines</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To ensure the best quality results, please follow these guidelines:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Use high-resolution images (minimum 300 DPI for best results)</li>
                <li>Ensure text is readable and appropriately sized</li>
                <li>Keep important design elements within the printable area</li>
                <li>Use appropriate file formats (PNG, JPG, SVG, PDF)</li>
                <li>Consider color contrast for visibility</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Content Restrictions</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to refuse to print any design that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Contains offensive, discriminatory, or hateful content</li>
                <li>Infringes on intellectual property rights (copyrights, trademarks, etc.)</li>
                <li>Contains illegal content or promotes illegal activities</li>
                <li>Violates any applicable laws or regulations</li>
                <li>Contains personal information of others without consent</li>
                <li>Is of poor quality that would result in unsatisfactory printing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By uploading or creating a design:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>You represent that you own the rights to the design or have permission to use it</li>
                <li>You grant us a license to use, reproduce, and display your design solely for the purpose of fulfilling your order</li>
                <li>You are responsible for any copyright or trademark infringement</li>
                <li>We are not liable for any legal issues arising from your design content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Design Approval and Production</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Before production:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>You will have the opportunity to preview your design</li>
                <li>Please review your design carefully before confirming your order</li>
                <li>Once an order is confirmed, production will begin</li>
                <li>We cannot make changes to your design after order confirmation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Returns and Refunds for Customized Products</h2>
              <p className="text-muted-foreground leading-relaxed">
                Customized products are generally non-refundable and non-returnable unless there is a manufacturing defect or error on our part. If you receive a customized product with a defect or that doesn't match your approved design, please contact us immediately, and we will work to resolve the issue, including replacement or refund if appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Quality Assurance</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to produce high-quality customized products. However, final print quality may vary based on the design file quality, colors used, and product material. We recommend reviewing our design guidelines and using high-resolution images for best results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Production Time</h2>
              <p className="text-muted-foreground leading-relaxed">
                Customized products may require additional production time compared to standard products. Production times will be indicated during checkout. Rush orders may be available for an additional fee.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Design Storage</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may store your design files for a limited period to facilitate reorders or customer service inquiries. However, we are not responsible for long-term storage of your designs. We recommend keeping backup copies of your design files.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Client Instructions</h2>
              <p className="text-muted-foreground leading-relaxed">
                When placing a customized order, you may provide special instructions or requirements. We will do our best to accommodate reasonable requests, but cannot guarantee fulfillment of instructions that conflict with our design guidelines or production capabilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about customization options, design guidelines, or need assistance with your custom design, please contact us at hello@hashtag34.com. Our team is here to help bring your vision to life!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

