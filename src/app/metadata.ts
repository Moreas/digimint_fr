export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Digimint',
    description: 'Professional digital marketing services including SEO, social media marketing, content creation, and web development.',
    url: 'https://digimint.com',
    logo: 'https://digimint.com/logo_dark.png',
    sameAs: [
      'https://facebook.com/digimint',
      'https://twitter.com/digimint',
      'https://instagram.com/digimint',
      'https://linkedin.com/company/digimint'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Digital Street',
      addressLocality: 'Tech City',
      addressRegion: 'ST',
      postalCode: '12345',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'info@digimint.com'
    }
  };
}