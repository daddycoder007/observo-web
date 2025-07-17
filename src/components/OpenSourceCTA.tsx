import { Button } from "@/components/ui/button";
import { Github, Star, GitBranch, Users, Heart } from "lucide-react";

export const OpenSourceCTA = () => {
  const stats = [
    { icon: Star, value: "2.5k+", label: "GitHub Stars" },
    { icon: GitBranch, value: "500+", label: "Forks" },
    { icon: Users, value: "100+", label: "Contributors" },
    { icon: Heart, value: "MIT", label: "License" }
  ];

  const features = [
    "Fully open source",
    "No vendor lock-in",
    "Community driven",
    "Transparent development"
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-900 text-white">
      <div className="section-container">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Open Source
              <span className="block text-gradient">by Design</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fade-in-up [animation-delay:200ms]">
              Built in the open, for the community. Contribute, customize, and deploy with complete transparency.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-colors duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="font-semibold text-white">{feature}</h3>
              </div>
            ))}
          </div>

          {/* GitHub Integration */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-12 lg:p-16 mb-16">
            <div className="flex items-center justify-center mb-8">
              <Github className="w-16 h-16 text-white mr-4" />
              <div className="text-left">
                <h3 className="text-3xl font-bold text-white">Join the Community</h3>
                <p className="text-gray-300">daddycoder007/Observo</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">Open Source</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">MIT</div>
                <div className="text-gray-300">License</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Community Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/daddycoder007/Observo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95">
                Star Repository
              </button>
            </div>
          </div>

          {/* Contributing CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Contribute to Observo
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Help us build the future of log monitoring. Every contribution makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105 active:scale-95">
                Start Contributing
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 active:scale-95">
                Read Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};