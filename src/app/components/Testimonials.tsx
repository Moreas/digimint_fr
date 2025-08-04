'use client';

export default function Testimonials() {
  const testimonials = [
    {
      content: "Digimint AI's machine learning solutions revolutionized our data analysis. Their predictive models have improved our decision-making accuracy by 85% and significantly reduced operational costs.",
      author: "Dr. Sarah Chen",
      role: "CTO at DataTech Innovations"
    },
    {
      content: "The AI-powered automation system they implemented has transformed our customer service. We've seen a 60% reduction in response times and a 40% increase in customer satisfaction.",
      author: "Michael Rodriguez",
      role: "Head of Operations at ServiceNow Global"
    },
    {
      content: "Their computer vision solution for quality control has been transformative. We've reduced defects by 95% and increased production efficiency by 40%. The ROI has been exceptional.",
      author: "Emma Patel",
      role: "Director of Manufacturing at InnovateX"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/5 dark:bg-white/5 rounded-2xl p-8 transition-colors"
            >
              <blockquote className="text-lg font-semibold leading-8 text-black dark:text-white">
                "{testimonial.content}"
              </blockquote>
              <div className="mt-6">
                <p className="font-semibold text-black dark:text-white">{testimonial.author}</p>
                <p className="mt-1 text-sm text-black/70 dark:text-white/70">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}