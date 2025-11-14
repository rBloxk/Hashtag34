export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cookies Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Hashtag34 Stories uses cookies for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Performance cookies: Help us understand how visitors interact with our website</li>
                <li>Functionality cookies: Remember your preferences and settings</li>
                <li>Targeting cookies: Used to deliver relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Types of Cookies We Use</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Essential Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as setting your privacy preferences or filling in forms.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Analytics Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use analytics cookies to understand how visitors use our website. This helps us improve the way our website works, for example, by ensuring that users find what they are looking for easily.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Marketing Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant content on other sites.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website and deliver advertisements. These third parties may include Google Analytics, social media platforms, and advertising networks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
                <li>Cookie preferences: You can manage your cookie preferences through our website settings</li>
                <li>Third-party opt-out: You can opt out of certain third-party cookies through their respective websites</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please note that disabling cookies may affect the functionality of our website and your user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookie Duration</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies can be either "persistent" or "session" cookies:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Session cookies: Temporary cookies that expire when you close your browser</li>
                <li>Persistent cookies: Remain on your device for a set period or until you delete them</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please review this page periodically for any updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our use of cookies, please contact us at hello@hashtag34.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

