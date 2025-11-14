export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Return Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Return Eligibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We want you to be completely satisfied with your purchase. You may return most items within 7 days of delivery for a full refund or exchange, provided that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>The item is unused, unworn, and in its original condition</li>
                <li>The item is in its original packaging with all tags attached</li>
                <li>You have the original receipt or proof of purchase</li>
                <li>The item is not a customized or personalized product (see Customization Policy)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Customized Products</h2>
              <p className="text-muted-foreground leading-relaxed">
                Customized, personalized, or made-to-order products are generally not eligible for return unless there is a manufacturing defect or error on our part. If you receive a customized product with a defect or error, please contact us immediately, and we will work with you to resolve the issue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How to Initiate a Return</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To initiate a return:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                <li>Contact our customer service team at hello@hashtag34.com or through your account dashboard</li>
                <li>Provide your order number and reason for return</li>
                <li>We will provide you with a Return Authorization (RA) number and return instructions</li>
                <li>Package the item securely in its original packaging</li>
                <li>Ship the item back to us using the provided return address</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Return Shipping</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Return shipping costs are handled as follows:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>If the return is due to our error or a defective product, we will cover the return shipping costs</li>
                <li>If the return is for any other reason, the customer is responsible for return shipping costs</li>
                <li>We recommend using a trackable shipping method for returns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Refund Process</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Once we receive and inspect your returned item:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>We will process your refund within 5-7 business days</li>
                <li>Refunds will be issued to the original payment method</li>
                <li>Please allow additional time for the refund to appear in your account (varies by payment provider)</li>
                <li>Original shipping costs are non-refundable unless the return is due to our error</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Exchanges</h2>
              <p className="text-muted-foreground leading-relaxed">
                We currently do not offer direct exchanges. If you wish to exchange an item, please return the original item for a refund and place a new order for the desired item. We will process your return refund promptly to minimize any delay.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Non-Returnable Items</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The following items are not eligible for return:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Customized or personalized products (unless defective)</li>
                <li>Items that have been worn, used, or damaged by the customer</li>
                <li>Items without original packaging or tags</li>
                <li>Items returned after the 7-day return period</li>
                <li>Gift cards and digital products</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Damaged or Defective Items</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you receive a damaged or defective item, please contact us immediately with photos of the damage. We will arrange for a replacement or full refund, including return shipping costs, at no charge to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Late or Missing Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you haven't received your refund within the expected timeframe, please check with your bank or credit card company first. If the issue persists, contact us at hello@hashtag34.com, and we will investigate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our Return Policy, please contact us at hello@hashtag34.com. Our customer service team is here to help!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

