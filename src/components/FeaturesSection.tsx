import { 
  Activity, 
  Zap, 
  Shield, 
  Database, 
  BarChart3, 
  Search, 
  Globe, 
  Cpu,
  Clock,
  Eye,
  TrendingUp,
  Settings
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Monitor your logs in real-time with instant alerts and notifications. Never miss critical events again.",
      color: "from-blue-500 to-blue-600",
      delay: "0ms"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with high-performance architecture for handling millions of log entries per second.",
      color: "from-yellow-500 to-orange-500",
      delay: "100ms"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with encryption at rest and in transit. Your data stays private and secure.",
      color: "from-green-500 to-green-600",
      delay: "200ms"
    },
    {
      icon: Database,
      title: "Scalable Storage",
      description: "Distributed storage architecture that scales with your needs. Store petabytes of logs efficiently.",
      color: "from-purple-500 to-purple-600",
      delay: "300ms"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Powerful analytics and visualization tools to gain insights from your log data.",
      color: "from-indigo-500 to-indigo-600",
      delay: "400ms"
    },
    {
      icon: Search,
      title: "Smart Search",
      description: "Full-text search with regex support and intelligent filtering across all your logs.",
      color: "from-red-500 to-red-600",
      delay: "500ms"
    },
    {
      icon: Globe,
      title: "Multi-cloud Ready",
      description: "Deploy anywhere - AWS, GCP, Azure, or on-premises. No vendor lock-in.",
      color: "from-teal-500 to-teal-600",
      delay: "600ms"
    },
    {
      icon: Cpu,
      title: "Resource Efficient",
      description: "Optimized for minimal resource usage. Run on small instances or scale to enterprise clusters.",
      color: "from-gray-500 to-gray-600",
      delay: "700ms"
    }
  ];

  const highlights = [
    {
      icon: Clock,
      title: "5-Minute Setup",
      description: "Get up and running in under 5 minutes with our one-command installation.",
      metric: "5min"
    },
    {
      icon: Eye,
      title: "Real-time Visibility",
      description: "Monitor your entire infrastructure with real-time dashboards and alerts.",
      metric: "100%"
    },
    {
      icon: TrendingUp,
      title: "High Performance",
      description: "Handle millions of log entries per second with our optimized architecture.",
      metric: "1M+"
    },
    {
      icon: Settings,
      title: "Easy Configuration",
      description: "Simple YAML configuration with hot-reload support for zero-downtime updates.",
      metric: "0"
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Powerful Features for
            <span className="block text-gradient">Modern Logging</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Everything you need to monitor, analyze, and secure your log data in one comprehensive platform.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group cursor-pointer"
              style={{ animationDelay: feature.delay }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 lg:p-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Observo?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built by developers, for developers. Experience the difference with our modern approach to log monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-105 transition-transform duration-300">
                  <highlight.icon className="w-10 h-10 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {highlight.metric}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-16 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of developers who trust Observo for their log monitoring needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
              <button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 active:scale-95"
                onClick={() => window.location.href = "/docs"}
              >
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};