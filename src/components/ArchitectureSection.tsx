import { Server, Database, BarChart3, Zap, Globe, Shield, Cpu, Activity } from "lucide-react";

export const ArchitectureSection = () => {
  const components = [
    {
      icon: Server,
      title: "Log Agent",
      description: "Lightweight agent deployed on your servers",
      features: ["Real-time collection", "Multiple formats", "Compression", "Retry logic"],
      color: "from-blue-500 to-blue-600",
      position: "left"
    },
    {
      icon: Zap,
      title: "Kafka Cluster",
      description: "High-throughput message streaming",
      features: ["Scalable messaging", "Fault tolerance", "Real-time processing", "Partitioning"],
      color: "from-orange-500 to-red-500",
      position: "center"
    },
    {
      icon: Database,
      title: "MongoDB Storage",
      description: "Scalable document database",
      features: ["Automatic indexing", "Data retention", "Sharding", "Replication"],
      color: "from-green-500 to-green-600",
      position: "center"
    },
    {
      icon: BarChart3,
      title: "Web Dashboard",
      description: "React-based visualization interface",
      features: ["Real-time updates", "Advanced filtering", "Custom dashboards", "Alerts"],
      color: "from-purple-500 to-purple-600",
      position: "right"
    }
  ];

  const dataFlow = [
    {
      from: "Log Files",
      to: "Log Agent",
      description: "Real-time collection"
    },
    {
      from: "Log Agent",
      to: "Kafka",
      description: "Streaming ingestion"
    },
    {
      from: "Kafka",
      to: "MongoDB",
      description: "Persistent storage"
    },
    {
      from: "MongoDB",
      to: "Dashboard",
      description: "Query & display"
    }
  ];

  return (
    <section id="architecture" className="py-20 lg:py-32 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Modern
            <span className="block text-gradient">Architecture</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Built with proven technologies for scalability, reliability, and performance at any scale.
          </p>
        </div>

          {/* Architecture Diagram */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 lg:p-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                System Architecture
              </h3>
              <p className="text-lg text-gray-600">
                Scalable, fault-tolerant design for enterprise-grade log monitoring
              </p>
            </div>

            {/* Flow Diagram */}
            <div className="relative">
              {/* Data Flow Lines */}
              <div className="hidden lg:block absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
                  {/* Flow arrows */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                      refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                    </marker>
                  </defs>
                  
                  {/* Flow paths */}
                  <path d="M 200 200 Q 300 150 400 200" stroke="#3b82f6" strokeWidth="3" 
                    markerEnd="url(#arrowhead)" className="animate-pulse" />
                  <path d="M 400 200 Q 500 150 600 200" stroke="#3b82f6" strokeWidth="3" 
                    markerEnd="url(#arrowhead)" className="animate-pulse" />
                  <path d="M 600 200 Q 700 150 800 200" stroke="#3b82f6" strokeWidth="3" 
                    markerEnd="url(#arrowhead)" className="animate-pulse" />
                </svg>
              </div>

              {/* Components */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
                {components.map((component, index) => (
                  <div
                    key={index}
                    className="text-center group cursor-pointer"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`w-24 h-24 bg-gradient-to-br ${component.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                      <component.icon className="w-12 h-12 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {component.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
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
        </div>

        {/* Technical Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Performance Metrics */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Activity className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-gray-900">Throughput</span>
                </div>
                <span className="text-2xl font-bold text-blue-600">1M+ logs/sec</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Cpu className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-gray-900">Latency</span>
                </div>
                <span className="text-2xl font-bold text-green-600">&lt;100ms</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold text-gray-900">Uptime</span>
                </div>
                <span className="text-2xl font-bold text-purple-600">99.9%</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-orange-600" />
                  <span className="font-semibold text-gray-900">Scalability</span>
                </div>
                <span className="text-2xl font-bold text-orange-600">Unlimited</span>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h3>
            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Kafka</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Docker</span>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Vite</span>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Infrastructure</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Docker Compose</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Kubernetes</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Helm Charts</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Terraform</span>
            </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Options */}
            <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-16 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Deploy Anywhere
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              From single server to enterprise clusters, Observo scales with your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-2">Single Server</h4>
                <p className="text-sm opacity-80">Perfect for development and small teams</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-2">Multi-Node</h4>
                <p className="text-sm opacity-80">High availability for production workloads</p>
            </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-2">Enterprise</h4>
                <p className="text-sm opacity-80">Global distribution with advanced features</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};