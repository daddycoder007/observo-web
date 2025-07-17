import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, Check, Download, Play, Zap, Shield, Database, BarChart3 } from "lucide-react";
import { useState } from "react";

export const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const installCommand = "curl -sSL https://raw.githubusercontent.com/daddycoder007/Observo/main/get-observo.sh | bash";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex pt-10 items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-green-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="section-container relative z-10 pt-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Hero Text */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up">
              <span className="text-gradient">Self-Hosted</span>
              <span className="block text-gray-900 mt-2">Log Monitoring</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-blue-600 mt-4 animate-bounce-subtle">
                in 5 Minutes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:200ms]">
              Complete self-hosted log monitoring and analytics platform with real-time aggregation, 
              storage, and visualization. Deploy anywhere, own your data.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up [animation-delay:400ms]">
            <Button className="btn-primary text-lg px-10 py-6">
              <Download className="w-5 h-5 mr-3" />
              Get Started Free
            </Button>
            <Button className="btn-secondary text-lg px-10 py-6">
              <Play className="w-5 h-5 mr-3" />
              View Demo
            </Button>
          </div>

          {/* Code Example */}
          <Card className="max-w-4xl mx-auto text-left animate-scale-in [animation-delay:600ms] hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <div className="code-block">
              <div className="code-block-header">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-400 ml-4">Quick Installation</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyToClipboard}
                  className="text-gray-400 hover:text-white h-8 px-3 hover:scale-110 transition-transform duration-200"
                >
                  {copied ? (
                    <Check className="w-4 h-4 animate-scale-in" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <div className="space-y-2">
                <code className="text-sm md:text-base text-green-400">
                  $ {installCommand}
                </code>
                <code className="text-sm md:text-base text-blue-400 block">
                  $ cd observo
                </code>
                <code className="text-sm md:text-base text-blue-400 block">
                  $ ./quick-start.sh
                </code>
              </div>
            </div>
          </Card>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto mb-10">
            <div className="text-center animate-fade-in-up [animation-delay:800ms] hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">5min</div>
              <div className="text-sm text-gray-600">Setup Time</div>
            </div>
            
            <div className="text-center animate-fade-in-up [animation-delay:900ms] hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Self-Hosted</div>
            </div>
            
            <div className="text-center animate-fade-in-up [animation-delay:1000ms] hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">0$</div>
              <div className="text-sm text-gray-600">License Cost</div>
            </div>
            
            <div className="text-center animate-fade-in-up [animation-delay:1100ms] hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">Real-time</div>
              <div className="text-sm text-gray-600">Monitoring</div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};