import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Globe, Code, Search, LineChart, Share2, FileText, PieChart, Target, MapPin, Mail } from 'lucide-react';

const services = {
  'web-development': {
    title: 'Web Development',
    icon: Code,
    description: 'Custom, responsive websites built with modern technologies and SEO best practices.',
    fullDescription: `Our web development services are tailored to create high-performing, user-friendly websites that drive results. We combine cutting-edge technology with strategic design to deliver solutions that help your business grow online.`,
    features: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Content Management Systems',
      'Website Maintenance & Support',
      'Performance Optimization',
      'Responsive Design',
      'SEO-Friendly Architecture',
      'Security Implementation'
    ],
    process: [
      { title: 'Discovery', description: 'Understanding your business goals and requirements' },
      { title: 'Planning', description: 'Creating a strategic roadmap for your website' },
      { title: 'Design', description: 'Crafting user-friendly interfaces and experiences' },
      { title: 'Development', description: 'Building your website with modern technologies' },
      { title: 'Testing', description: 'Ensuring quality and performance across devices' },
      { title: 'Launch', description: 'Deploying your website with ongoing support' }
    ]
  },
  'seo-services': {
    title: 'SEO Services',
    icon: Search,
    description: 'Comprehensive search engine optimization to improve rankings and drive organic traffic.',
    fullDescription: `Our SEO services are designed to improve your website's visibility in search engines and drive qualified organic traffic. We use data-driven strategies and best practices to achieve sustainable results.`,
    features: [
      'Technical SEO Audits',
      'Keyword Research & Strategy',
      'On-Page Optimization',
      'Content Strategy',
      'Link Building',
      'Local SEO',
      'Performance Tracking',
      'Competitor Analysis'
    ],
    process: [
      { title: 'Audit', description: 'Analyzing your current SEO performance' },
      { title: 'Strategy', description: 'Developing a customized SEO plan' },
      { title: 'Implementation', description: 'Executing optimization techniques' },
      { title: 'Monitoring', description: 'Tracking rankings and traffic' },
      { title: 'Reporting', description: 'Regular performance updates' },
      { title: 'Optimization', description: 'Continuous improvement based on data' }
    ]
  },
  'digital-advertising': {
    title: 'Digital Advertising',
    icon: LineChart,
    description: 'Strategic PPC campaigns across multiple platforms for maximum ROI.',
    fullDescription: `Our digital advertising services help you reach your target audience effectively across various platforms. We create and manage data-driven campaigns that generate leads and drive conversions.`,
    features: [
      'Google Ads Management',
      'Social Media Advertising',
      'Display Advertising',
      'Remarketing Campaigns',
      'Campaign Strategy',
      'Ad Creative Design',
      'Conversion Tracking',
      'ROI Optimization'
    ],
    process: [
      { title: 'Research', description: 'Understanding your target audience' },
      { title: 'Strategy', description: 'Creating effective campaign plans' },
      { title: 'Setup', description: 'Implementing tracking and campaigns' },
      { title: 'Management', description: 'Daily campaign optimization' },
      { title: 'Analysis', description: 'Performance monitoring and reporting' },
      { title: 'Optimization', description: 'Continuous improvement for better ROI' }
    ]
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    icon: Share2,
    description: 'Build and engage your audience across all major platforms.',
    fullDescription: `Our social media marketing services help you build a strong presence across social platforms, engage with your audience, and drive meaningful interactions that convert into business results.`,
    features: [
      'Social Media Strategy',
      'Content Creation',
      'Community Management',
      'Social Advertising',
      'Influencer Marketing',
      'Analytics & Reporting',
      'Brand Voice Development',
      'Crisis Management'
    ],
    process: [
      { title: 'Analysis', description: 'Evaluating current social presence' },
      { title: 'Strategy', description: 'Developing platform-specific plans' },
      { title: 'Creation', description: 'Producing engaging content' },
      { title: 'Management', description: 'Daily platform engagement' },
      { title: 'Growth', description: 'Building audience and reach' },
      { title: 'Optimization', description: 'Refining based on performance' }
    ]
  },
  'content-marketing': {
    title: 'Content Marketing',
    icon: FileText,
    description: 'Strategic content creation that drives traffic and delivers value.',
    fullDescription: `Our content marketing services focus on creating valuable, relevant content that attracts and retains your target audience. We develop comprehensive strategies that establish your authority and drive conversions.`,
    features: [
      'Content Strategy',
      'Blog Writing',
      'Whitepapers & Ebooks',
      'Case Studies',
      'Video Content',
      'Infographics',
      'Email Newsletters',
      'Content Distribution'
    ],
    process: [
      { title: 'Research', description: 'Understanding your audience needs' },
      { title: 'Planning', description: 'Creating content calendars' },
      { title: 'Creation', description: 'Developing quality content' },
      { title: 'Distribution', description: 'Publishing and promotion' },
      { title: 'Measurement', description: 'Tracking content performance' },
      { title: 'Optimization', description: 'Refining content strategy' }
    ]
  },
  'email-marketing': {
    title: 'Email Marketing',
    icon: Mail,
    description: 'Automated email campaigns that nurture leads and boost retention.',
    fullDescription: `Our email marketing services help you build and maintain relationships with your audience through targeted, personalized communications that drive engagement and conversions.`,
    features: [
      'Email Strategy',
      'Campaign Design',
      'Automation Setup',
      'List Management',
      'A/B Testing',
      'Performance Analytics',
      'Template Design',
      'Deliverability Optimization'
    ],
    process: [
      { title: 'Strategy', description: 'Developing email marketing plans' },
      { title: 'Setup', description: 'Creating automation workflows' },
      { title: 'Design', description: 'Crafting engaging templates' },
      { title: 'Testing', description: 'Ensuring optimal delivery' },
      { title: 'Launch', description: 'Executing campaigns' },
      { title: 'Analysis', description: 'Measuring and improving results' }
    ]
  },
  'analytics-reporting': {
    title: 'Analytics & Reporting',
    icon: PieChart,
    description: 'In-depth tracking and analysis of all marketing efforts.',
    fullDescription: `Our analytics and reporting services provide clear insights into your marketing performance. We help you understand your data and make informed decisions to improve results.`,
    features: [
      'Google Analytics Setup',
      'Custom Dashboard Creation',
      'KPI Tracking',
      'Conversion Analysis',
      'User Behavior Tracking',
      'Regular Reporting',
      'Data Visualization',
      'Recommendations'
    ],
    process: [
      { title: 'Setup', description: 'Implementing tracking systems' },
      { title: 'Collection', description: 'Gathering relevant data' },
      { title: 'Analysis', description: 'Interpreting performance data' },
      { title: 'Reporting', description: 'Creating clear insights' },
      { title: 'Review', description: 'Discussing results and strategy' },
      { title: 'Action', description: 'Implementing improvements' }
    ]
  },
  'brand-strategy': {
    title: 'Brand Strategy',
    icon: Target,
    description: 'Develop a strong brand identity that resonates with your audience.',
    fullDescription: `Our brand strategy services help you create a compelling brand identity that connects with your target audience and differentiates you in the market.`,
    features: [
      'Brand Positioning',
      'Visual Identity',
      'Voice & Messaging',
      'Brand Guidelines',
      'Market Research',
      'Competitor Analysis',
      'Brand Architecture',
      'Brand Experience'
    ],
    process: [
      { title: 'Discovery', description: 'Understanding your brand essence' },
      { title: 'Research', description: 'Analyzing market and competition' },
      { title: 'Strategy', description: 'Developing brand positioning' },
      { title: 'Creation', description: 'Building brand elements' },
      { title: 'Implementation', description: 'Rolling out brand identity' },
      { title: 'Management', description: 'Maintaining brand consistency' }
    ]
  },
  'local-seo': {
    title: 'Local SEO',
    icon: MapPin,
    description: 'Dominate local search results and attract nearby customers.',
    fullDescription: `Our local SEO services help your business stand out in local search results and attract customers in your area. We optimize your online presence for location-based searches.`,
    features: [
      'Google Business Profile Optimization',
      'Local Citation Building',
      'Review Management',
      'Local Content Strategy',
      'Local Link Building',
      'Local Keyword Research',
      'Map Pack Optimization',
      'Local Landing Pages'
    ],
    process: [
      { title: 'Audit', description: 'Analyzing local presence' },
      { title: 'Research', description: 'Identifying local opportunities' },
      { title: 'Optimization', description: 'Implementing local SEO tactics' },
      { title: 'Citations', description: 'Building local listings' },
      { title: 'Monitoring', description: 'Tracking local rankings' },
      { title: 'Growth', description: 'Expanding local visibility' }
    ]
  }
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services[params.slug as keyof typeof services];
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} - Digimint Digital Marketing Agency`,
    description: service.fullDescription.slice(0, 155) + '...',
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];
  if (!service) return notFound();

  const IconComponent = service.icon;

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-8">
            <IconComponent className="w-8 h-8 text-black" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-6xl mb-6">
            {service.title}
          </h1>
          <p className="text-lg leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* Features Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-6 text-black dark:text-white border-3 border-black dark:border-white/10"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* Process Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 text-black dark:text-white border-3 border-black dark:border-white/10"
              >
                <div className="text-primary text-xl font-bold mb-2">
                  {index + 1}. {step.title}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our {service.title.toLowerCase()} services can help your business grow.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-primary/90 transition-colors duration-300"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="rounded-md bg-black px-6 py-3 text-base font-semibold text-white border border-gray-700 hover:bg-black/80 transition-colors duration-300"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}