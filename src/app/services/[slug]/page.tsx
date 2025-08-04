import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Globe, Code, Search, LineChart, Share2, FileText, PieChart, Target, MapPin, Mail } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// Define types for our services
type ServiceProcess = {
  title: string;
  description: string;
};

type Service = {
  title: string;
  icon: LucideIcon;
  description: string;
  fullDescription: string;
  features: string[];
  process: ServiceProcess[];
};

type ServiceSlug = 
  | 'ai-development'
  | 'ai-seo'
  | 'predictive-analytics'
  | 'ai-content'
  | 'nlp-services'
  | 'ai-automation'
  | 'machine-learning'
  | 'ai-strategy'
  | 'computer-vision';

const services: Record<ServiceSlug, Service> = {
  'ai-development': {
    title: 'AI Development',
    icon: Code,
    description: 'Custom AI solutions and integrations built with cutting-edge technologies.',
    fullDescription: `Our AI development services are tailored to create powerful, intelligent systems that transform your business operations. We combine state-of-the-art AI technologies with deep industry expertise to deliver solutions that drive innovation and growth.`,
    features: [
      'Custom AI Model Development',
      'AI Integration Services',
      'Chatbot Development',
      'AI-Powered Analytics',
      'Machine Learning Pipelines',
      'Neural Network Design',
      'AI Infrastructure Setup',
      'Model Optimization'
    ],
    process: [
      { title: 'Discovery', description: 'Understanding your AI needs and objectives' },
      { title: 'Planning', description: 'Creating an AI implementation roadmap' },
      { title: 'Development', description: 'Building and training AI models' },
      { title: 'Integration', description: 'Implementing AI solutions in your systems' },
      { title: 'Testing', description: 'Validating AI performance and accuracy' },
      { title: 'Deployment', description: 'Launching with ongoing monitoring' }
    ]
  },
  'ai-seo': {
    title: 'AI-Powered SEO',
    icon: Search,
    description: 'Advanced search engine optimization using AI for content and keyword analysis.',
    fullDescription: `Our AI-powered SEO services leverage machine learning to optimize your online presence. We use advanced algorithms to analyze search patterns, predict trends, and optimize content for maximum visibility.`,
    features: [
      'AI Content Optimization',
      'Predictive Keyword Analysis',
      'Automated Technical SEO',
      'ML-Based Link Building',
      'Content Gap Analysis',
      'Competitor AI Analysis',
      'Search Intent Modeling',
      'Performance Forecasting'
    ],
    process: [
      { title: 'Analysis', description: 'AI-driven SEO audit and opportunity identification' },
      { title: 'Strategy', description: 'Developing ML-powered optimization plans' },
      { title: 'Implementation', description: 'Executing AI-recommended changes' },
      { title: 'Monitoring', description: 'Real-time performance tracking' },
      { title: 'Learning', description: 'Continuous model improvement' },
      { title: 'Optimization', description: 'AI-guided content and technical updates' }
    ]
  },
  'predictive-analytics': {
    title: 'Predictive Analytics',
    icon: LineChart,
    description: 'AI-driven data analysis and forecasting for business intelligence.',
    fullDescription: `Our predictive analytics services harness the power of AI to turn your data into actionable insights. We develop custom machine learning models that help you anticipate trends, optimize operations, and make data-driven decisions.`,
    features: [
      'Predictive Modeling',
      'Time Series Analysis',
      'Customer Behavior Prediction',
      'Risk Assessment',
      'Demand Forecasting',
      'Anomaly Detection',
      'Pattern Recognition',
      'Automated Reporting'
    ],
    process: [
      { title: 'Data Assessment', description: 'Evaluating your data landscape' },
      { title: 'Model Selection', description: 'Choosing optimal ML algorithms' },
      { title: 'Development', description: 'Building predictive models' },
      { title: 'Training', description: 'Model training and validation' },
      { title: 'Integration', description: 'Implementing predictions in workflows' },
      { title: 'Monitoring', description: 'Continuous model performance tracking' }
    ]
  },
  'ai-content': {
    title: 'AI Content Generation',
    icon: FileText,
    description: 'Advanced content creation using state-of-the-art AI models.',
    fullDescription: `Our AI content generation services leverage cutting-edge language models to create engaging, relevant content at scale. We combine AI capabilities with human expertise to ensure quality and brand consistency.`,
    features: [
      'AI Article Writing',
      'Automated Blog Posts',
      'Social Media Content',
      'Product Descriptions',
      'Email Copy Generation',
      'Ad Copy Creation',
      'Content Optimization',
      'Multilingual Content'
    ],
    process: [
      { title: 'Training', description: 'Fine-tuning AI models to your brand' },
      { title: 'Creation', description: 'Generating initial content drafts' },
      { title: 'Review', description: 'Human expert quality assurance' },
      { title: 'Refinement', description: 'Content optimization and editing' },
      { title: 'Publishing', description: 'Content distribution and tracking' },
      { title: 'Analysis', description: 'Performance monitoring and iteration' }
    ]
  },
  'nlp-services': {
    title: 'Natural Language Processing',
    icon: Share2,
    description: 'Advanced NLP solutions for text analysis and understanding.',
    fullDescription: `Our NLP services help businesses understand and process human language at scale. We develop custom solutions for text analysis, sentiment monitoring, and automated communication systems.`,
    features: [
      'Text Classification',
      'Sentiment Analysis',
      'Named Entity Recognition',
      'Topic Modeling',
      'Language Understanding',
      'Chatbot Development',
      'Text Summarization',
      'Multilingual Processing'
    ],
    process: [
      { title: 'Requirements', description: 'Understanding your NLP needs' },
      { title: 'Data Preparation', description: 'Processing and cleaning text data' },
      { title: 'Model Development', description: 'Building NLP solutions' },
      { title: 'Training', description: 'Fine-tuning language models' },
      { title: 'Integration', description: 'Implementing NLP systems' },
      { title: 'Optimization', description: 'Continuous model improvement' }
    ]
  },
  'ai-automation': {
    title: 'AI Automation',
    icon: Globe,
    description: 'Intelligent process automation using AI and machine learning.',
    fullDescription: `Our AI automation services help businesses streamline operations and reduce manual work through intelligent automation. We develop custom solutions that combine AI, RPA, and workflow optimization.`,
    features: [
      'Process Automation',
      'Workflow Optimization',
      'Intelligent Scheduling',
      'Document Processing',
      'Task Automation',
      'Decision Automation',
      'Quality Control',
      'Performance Monitoring'
    ],
    process: [
      { title: 'Analysis', description: 'Identifying automation opportunities' },
      { title: 'Design', description: 'Creating intelligent workflows' },
      { title: 'Development', description: 'Building automation solutions' },
      { title: 'Testing', description: 'Validating automated processes' },
      { title: 'Deployment', description: 'Implementing automation systems' },
      { title: 'Monitoring', description: 'Ensuring optimal performance' }
    ]
  },
  'machine-learning': {
    title: 'Machine Learning Solutions',
    icon: PieChart,
    description: 'Custom machine learning models for prediction and pattern recognition.',
    fullDescription: `Our machine learning solutions help businesses leverage their data for competitive advantage. We develop custom ML models that automate processes, uncover insights, and drive intelligent decision-making.`,
    features: [
      'Supervised Learning Models',
      'Unsupervised Learning',
      'Deep Learning Solutions',
      'Neural Networks',
      'Model Training & Validation',
      'Feature Engineering',
      'Model Deployment',
      'Performance Monitoring'
    ],
    process: [
      { title: 'Data Analysis', description: 'Understanding your data landscape' },
      { title: 'Model Design', description: 'Selecting optimal algorithms' },
      { title: 'Development', description: 'Building ML models' },
      { title: 'Training', description: 'Model training and validation' },
      { title: 'Deployment', description: 'Implementing in production' },
      { title: 'Monitoring', description: 'Continuous performance tracking' }
    ]
  },
  'ai-strategy': {
    title: 'AI Strategy Consulting',
    icon: Target,
    description: 'Strategic guidance for AI implementation and digital transformation.',
    fullDescription: `Our AI strategy consulting helps businesses navigate the complex landscape of artificial intelligence. We provide expert guidance on AI adoption, implementation strategies, and digital transformation initiatives.`,
    features: [
      'AI Readiness Assessment',
      'Technology Roadmapping',
      'Implementation Planning',
      'Risk Assessment',
      'Change Management',
      'ROI Analysis',
      'Vendor Selection',
      'Team Training'
    ],
    process: [
      { title: 'Assessment', description: 'Evaluating current capabilities' },
      { title: 'Strategy', description: 'Developing AI roadmap' },
      { title: 'Planning', description: 'Creating implementation plan' },
      { title: 'Selection', description: 'Choosing right technologies' },
      { title: 'Implementation', description: 'Executing the strategy' },
      { title: 'Review', description: 'Measuring success and adjusting' }
    ]
  },
  'computer-vision': {
    title: 'Computer Vision',
    icon: MapPin,
    description: 'Advanced image and video processing solutions using AI.',
    fullDescription: `Our computer vision services help businesses extract insights from visual data. We develop custom solutions for image recognition, object detection, and automated visual analysis.`,
    features: [
      'Object Detection',
      'Image Recognition',
      'Visual Search',
      'Video Analysis',
      'Face Recognition',
      'Quality Inspection',
      'Scene Understanding',
      'Motion Analysis'
    ],
    process: [
      { title: 'Requirements', description: 'Understanding vision needs' },
      { title: 'Data Collection', description: 'Gathering visual datasets' },
      { title: 'Model Development', description: 'Building CV solutions' },
      { title: 'Training', description: 'Training vision models' },
      { title: 'Integration', description: 'Implementing in systems' },
      { title: 'Optimization', description: 'Improving accuracy and speed' }
    ]
  }
};

export async function generateMetadata({ params }: { params: { slug: ServiceSlug } }): Promise<Metadata> {
  const service = services[params.slug];
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} - Digimint AI Solutions`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      type: 'website'
    }
  };
}

export default function ServicePage({ params }: { params: { slug: ServiceSlug } }) {
  const service = services[params.slug];
  if (!service) return notFound();

  const IconComponent = service.icon;

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-black" strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
              {service.title}
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* Features Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-6 border-3 border-black dark:border-white/10"
              >
                <p className="text-lg font-semibold text-black dark:text-white">
                  {feature}
                </p>
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
          <h2 className="text-3xl font-bold text-black dark:text-white mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 border-3 border-black dark:border-white/10"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-black">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                  {step.title}
                </h3>
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
            Contact us today to discuss how our {service.title.toLowerCase()} can transform your business.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-black shadow-sm hover:bg-primary/90 transition-colors duration-300"
            >
              Get Started
            </a>
            <a
              href="/portfolio"
              className="rounded-md bg-black px-6 py-3 text-base font-semibold text-white border border-gray-700 hover:bg-black/80 transition-colors duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}