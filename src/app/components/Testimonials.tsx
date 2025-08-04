'use client';

export default function Testimonials() {
  const testimonials = [
    {
      content: "Digimint transformed our online presence. Their SEO and content strategy doubled our organic traffic in just 3 months.",
      author: "Sarah Johnson",
      role: "CEO at TechStart Solutions"
    },
    {
      content: "The PPC campaigns they run consistently deliver a 300% ROI. Their data-driven approach and constant optimization make all the difference.",
      author: "Michael Chen",
      role: "Marketing Director at GrowthMax"
    },
    {
      content: "Working with Digimint has been a game-changer. Their social media management has helped us build a loyal community and drive real business results.",
      author: "Emma Davis",
      role: "Founder at Lifestyle Brands Co"
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