import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Copy, 
  Check, 
  Download, 
  ExternalLink,
  Clock,
  Users,
  Star,
  AlertCircle,
  CheckCircle,
  Zap,
  Shield,
  Database,
  BarChart3,
  ArrowRight,
  Play,
  Terminal,
  Server,
  Globe,
  Rocket,
  Book
} from "lucide-react";
import { useState } from "react";

export const DocsContent = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeBlocks = {
    quickInstall: "curl -sSL https://raw.githubusercontent.com/daddycoder007/Observo/main/get-observo.sh | bash",
    dockerCompose: `version: '3.8'
services:
  observo-server:
    image: daddycoder007/observo-server:latest
    ports:
      - "3000:3000"
    environment:
      - MONGO_URL=mongodb://mongo:27017/observo
      - KAFKA_BROKERS=kafka:9092

  observo-dashboard:
    image: daddycoder007/observo-dashboard:latest
    ports:
      - "80:80"

  kafka:
    image: confluentinc/cp-kafka:latest
    environment:
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092

  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"`,
    agentConfig: `kafka:
  brokers: localhost:9092
  clientId: my-log-agent

files:
  - path: /var/log/myapp.log
    topic: myapp-logs
    tag: output
  - path: /var/log/error.log
    topic: myapp-logs
    tag: error`,
    apiExample: `// Get logs
const response = await fetch('/api/logs?page=1&limit=50&level=error');
const logs = await response.json();

// Get analytics
const analytics = await fetch('/api/analytics?startDate=2024-01-01');
const data = await analytics.json();`
  };

  const CodeBlock = ({ code, id, title, language = "bash" }: { code: string; id: string; title: string; language?: string }) => (
    <Card className="mb-6 animate-fade-in-up hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">{title}</span>
          <Badge variant="outline" className="text-xs">{language}</Badge>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(code, id)}
          className="h-8 px-3 hover:bg-gray-200"
        >
          {copiedCode === id ? (
            <Check className="w-4 h-4 text-green-600" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
      <div className="code-block">
        <pre className="text-sm overflow-x-auto p-4">
          <code className="text-green-400">{code}</code>
        </pre>
      </div>
    </Card>
  );

  return (
    <div className="max-w-5xl mx-auto p-8 animate-fade-in">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Book className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 animate-slide-in-left">
              Documentation
            </h1>
            <p className="text-lg text-gray-600 animate-slide-in-right">
              Complete guide to deploying and managing Observo
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="p-6 text-center animate-scale-in hover:shadow-lg transition-shadow duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-gray-900">5 min</div>
          <div className="text-sm text-gray-600">Setup Time</div>
        </Card>
        <Card className="p-6 text-center animate-scale-in [animation-delay:100ms] hover:shadow-lg transition-shadow duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-gray-900">10k+</div>
          <div className="text-sm text-gray-600">Deployments</div>
        </Card>
        <Card className="p-6 text-center animate-scale-in [animation-delay:200ms] hover:shadow-lg transition-shadow duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Star className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-gray-900">4.9/5</div>
          <div className="text-sm text-gray-600">User Rating</div>
        </Card>
        <Card className="p-6 text-center animate-scale-in [animation-delay:300ms] hover:shadow-lg transition-shadow duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-gray-900">99.9%</div>
          <div className="text-sm text-gray-600">Uptime</div>
        </Card>
      </div>

      {/* Introduction */}
      <section id="introduction" className="mb-16 animate-fade-in-up">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Introduction</h2>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            Observo is a complete self-hosted log monitoring and analytics platform that provides 
            real-time log aggregation, storage, and visualization. Built with modern technologies 
            and designed for scalability, Observo helps development teams monitor their applications 
            effectively while maintaining full control over their data.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
              <span className="text-xl font-bold text-blue-900">Key Benefits</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Complete self-hosted solution</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Real-time log streaming</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Scalable MongoDB storage</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Beautiful React dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quick-start" className="mb-16 animate-fade-in-up">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
            <Rocket className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Quick Start</h2>
        </div>
        
        <p className="text-gray-600 mb-8 text-lg">
          Get Observo running in under 5 minutes with our one-command installation.
        </p>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full text-sm flex items-center justify-center mr-4 font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-900">Install Observo</h3>
            </div>
            <CodeBlock 
              code={codeBlocks.quickInstall}
              id="quick-install"
              title="One-command installation"
              language="bash"
            />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full text-sm flex items-center justify-center mr-4 font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-900">Start the Platform</h3>
            </div>
            <CodeBlock 
              code="cd observo\n./quick-start.sh"
              id="start-platform"
              title="Start Observo services"
              language="bash"
            />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full text-sm flex items-center justify-center mr-4 font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-900">Access Dashboard</h3>
            </div>
            <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900 mb-1">Dashboard URL</div>
                  <div className="text-gray-600">Your Observo dashboard is ready</div>
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" asChild>
                  <a href="http://localhost:8080" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Dashboard
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Docker Compose */}
      <section id="docker-compose" className="mb-16 animate-fade-in-up">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
            <Server className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Docker Compose Setup</h2>
        </div>
        
        <p className="text-gray-600 mb-8 text-lg">
          For manual deployment or customization, use our Docker Compose configuration.
        </p>

        <CodeBlock 
          code={codeBlocks.dockerCompose}
          id="docker-compose"
          title="docker-compose.yml"
          language="yaml"
        />

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 mb-8">
          <div className="flex items-center mb-4">
            <AlertCircle className="w-6 h-6 text-amber-600 mr-3" />
            <span className="text-lg font-bold text-amber-800">Production Note</span>
          </div>
          <p className="text-amber-700">
            Remember to change default passwords and configure proper security settings for production deployments.
          </p>
        </div>
      </section>

      {/* Log Agent Configuration */}
      <section id="log-agent" className="mb-16 animate-fade-in-up">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <Database className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Log Agent Configuration</h2>
        </div>
        
        <p className="text-gray-600 mb-8 text-lg">
          Configure the Observo log agent to monitor your application logs.
        </p>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Install Agent</h3>
            <CodeBlock 
              code="npm install -g @observo/log-agent"
              id="install-agent"
              title="Install log agent"
              language="bash"
            />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Configuration</h3>
            <CodeBlock 
              code={codeBlocks.agentConfig}
              id="agent-config"
              title="config.yaml"
              language="yaml"
            />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Start Monitoring</h3>
            <CodeBlock 
              code="observo-agent config.yaml"
              id="start-agent"
              title="Start log agent"
              language="bash"
            />
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section id="rest-api" className="mb-16 animate-fade-in-up">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">API Reference</h2>
        </div>
        
        <p className="text-gray-600 mb-8 text-lg">
          Integrate Observo with your applications using our REST API.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Get Logs</h3>
            <CodeBlock 
              code={codeBlocks.apiExample}
              id="api-example"
              title="API Example"
              language="javascript"
            />
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Endpoints</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-sm">GET /api/logs</span>
                <Badge variant="outline">Logs</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-sm">GET /api/analytics</span>
                <Badge variant="outline">Analytics</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-mono text-sm">GET /api/health</span>
                <Badge variant="outline">Health</Badge>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-16 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Deploy Observo in minutes and start monitoring your logs like a pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-105 active:scale-95">
              <Download className="w-5 h-5 mr-2" />
              Deploy Now
            </Button>
            <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 active:scale-95">
              <ExternalLink className="w-5 h-5 mr-2" />
              View GitHub
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};