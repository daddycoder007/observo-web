import { ArrowRight, Download, Play, CheckCircle, Server, Database, BarChart3, Copy, Check } from "lucide-react";
import { useState } from "react";

export const HowItWorksSection = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const truncateCommand = (command: string, maxLength: number = 50) => {
    if (command.length <= maxLength) return command;
    return command.substring(0, maxLength) + '...';
  };

  const steps = [
    {
      icon: Download,
      title: "Install",
      description: "Run a single command to install Observo on your infrastructure",
      command: "curl -sSL https://raw.githubusercontent.com/daddycoder007/Observo/main/get-observo.sh | bash",
      color: "from-blue-500 to-blue-600",
      delay: "0ms"
    },
    {
      icon: Play,
      title: "Start",
      description: "Launch all services with Docker Compose in one command",
      command: "./quick-start.sh",
      color: "from-green-500 to-green-600",
      delay: "200ms"
    },
    {
      icon: CheckCircle,
      title: "Monitor",
      description: "Access your dashboard and start monitoring logs immediately",
      command: "http://localhost:8080",
      color: "from-purple-500 to-purple-600",
      delay: "400ms"
    }
  ];

  const architecture = [
    {
      icon: Server,
      title: "Log Agent",
      description: "Lightweight agent that collects and forwards logs to Kafka",
      features: ["Real-time collection", "Multiple formats", "Compression"]
    },
    {
      icon: Database,
      title: "Storage Layer",
      description: "MongoDB-based storage with automatic indexing and retention",
      features: ["Scalable storage", "Fast queries", "Data retention"]
    },
    {
      icon: BarChart3,
      title: "Dashboard",
      description: "React-based web interface for visualization and analysis",
      features: ["Real-time updates", "Advanced filtering", "Custom dashboards"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            How It
            <span className="block text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Get up and running with Observo in just three simple steps. No complex configuration required.
          </p>
        </div>

        {/* Steps */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: step.delay }}
              >
                {/* Step Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-blue-600 mb-2">STEP {index + 1}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Command */}
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-xl font-mono text-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-xs">Terminal</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => copyToClipboard(step.command, index)}
                          className="text-gray-400 hover:text-white transition-colors duration-200 p-1 rounded"
                          title="Copy command"
                        >
                          {copiedIndex === index ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <code className="text-green-400 break-all">
                      $ {truncateCommand(step.command)}
                    </code>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Overview */}
        <div className="bg-white rounded-3xl p-12 lg:p-16 shadow-xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Architecture Overview
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with modern technologies for scalability, performance, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {architecture.map((component, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-105 transition-transform duration-300">
                  <component.icon className="w-10 h-10 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {component.title}
                </h4>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {component.description}
                </p>

                <ul className="space-y-2">
                  {component.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};