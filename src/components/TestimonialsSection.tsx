import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "DevOps Engineer",
      company: "TechCorp",
      avatar: "SC",
      rating: 5,
      quote: "Observo transformed our log monitoring. We went from scattered log files to real-time insights in under 10 minutes. The self-hosted approach gives us complete control over our data.",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Marcus Rodriguez",
      role: "Platform Lead",
      company: "StartupXYZ",
      avatar: "MR",
      rating: 5,
      quote: "The performance is incredible. We're processing millions of logs per second with sub-100ms latency. The dashboard is intuitive and the API is well-documented.",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Emily Watson",
      role: "SRE Manager",
      company: "Enterprise Inc",
      avatar: "EW",
      rating: 5,
      quote: "Finally, a log monitoring solution that doesn't break the bank. The self-hosted model saves us thousands monthly while providing enterprise-grade features.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Deployments" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "1M+", label: "Logs/Second" },
    { number: "5min", label: "Average Setup Time" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Trusted by
            <span className="block text-gradient">Developers Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Join thousands of teams who have transformed their log monitoring with Observo.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-gray-300" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-semibold mr-4`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-gray-400 font-bold text-xl">TechCorp</div>
            <div className="text-gray-400 font-bold text-xl">StartupXYZ</div>
            <div className="text-gray-400 font-bold text-xl">Enterprise Inc</div>
            <div className="text-gray-400 font-bold text-xl">CloudScale</div>
            <div className="text-gray-400 font-bold text-xl">DataFlow</div>
          </div>
        </div>

       
      </div>
    </section>
  );
};