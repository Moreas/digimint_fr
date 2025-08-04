export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Digimint',
    description: 'Digital Marketing Agency specializing in comprehensive marketing solutions',
    url: 'https://digimint.com',
    logo: 'https://digimint.com/images/logo_dark.png',
    sameAs: [
      'https://facebook.com/digimint',
      'https://twitter.com/digimint',
      'https://instagram.com/digimint',
      'https://linkedin.com/company/digimint'
    ],
    address: {
      '@type': 'PostalAddress',
      // Add your address details here
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '',
      contactType: 'customer service',
      email: 'contact@digimint.com'
    }
  };
}