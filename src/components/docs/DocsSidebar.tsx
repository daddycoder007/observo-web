import { useState } from "react";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { 
  Book, 
  Rocket, 
  Settings, 
  Database, 
  AlertTriangle, 
  Users, 
  Code,
  Search,
  ChevronDown,
  ChevronRight,
  Zap,
  Shield,
  BarChart3,
  Globe,
  Cpu,
  GitBranch
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const docSections = [
  {
    title: "Getting Started",
    icon: Rocket,
    color: "from-blue-500 to-blue-600",
    items: [
      { title: "Introduction", href: "#introduction", active: true },
      { title: "Quick Start", href: "#quick-start" },
      { title: "Installation", href: "#installation" },
      { title: "First Steps", href: "#first-steps" }
    ]
  },
  {
    title: "Deployment",
    icon: Settings,
    color: "from-green-500 to-green-600",
    items: [
      { title: "Docker Compose", href: "#docker-compose" },
      { title: "Kubernetes", href: "#kubernetes" },
      { title: "Manual Setup", href: "#manual-setup" },
      { title: "Production", href: "#production" }
    ]
  },
  {
    title: "Configuration",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
    items: [
      { title: "Log Agent", href: "#log-agent" },
      { title: "Server Config", href: "#server-config" },
      { title: "Environment Variables", href: "#environment" },
      { title: "Security", href: "#security" }
    ]
  },
  {
    title: "Architecture",
    icon: Database,
    color: "from-purple-500 to-purple-600",
    items: [
      { title: "Overview", href: "#architecture-overview" },
      { title: "Components", href: "#components" },
      { title: "Data Flow", href: "#data-flow" },
      { title: "Scaling", href: "#scaling" }
    ]
  },
  {
    title: "API Reference",
    icon: Code,
    color: "from-indigo-500 to-indigo-600",
    items: [
      { title: "REST API", href: "#rest-api" },
      { title: "WebSocket", href: "#websocket" },
      { title: "SDK", href: "#sdk" },
      { title: "Authentication", href: "#auth" }
    ]
  },
  {
    title: "Monitoring",
    icon: BarChart3,
    color: "from-red-500 to-red-600",
    items: [
      { title: "Dashboard", href: "#dashboard" },
      { title: "Alerts", href: "#alerts" },
      { title: "Analytics", href: "#analytics" },
      { title: "Reports", href: "#reports" }
    ]
  },
  {
    title: "Troubleshooting",
    icon: AlertTriangle,
    color: "from-gray-500 to-gray-600",
    items: [
      { title: "Common Issues", href: "#common-issues" },
      { title: "Performance", href: "#performance" },
      { title: "Debugging", href: "#debugging" },
      { title: "Support", href: "#support" }
    ]
  },
  {
    title: "Contributing",
    icon: Users,
    color: "from-teal-500 to-teal-600",
    items: [
      { title: "Development", href: "#development" },
      { title: "Pull Requests", href: "#pull-requests" },
      { title: "Code Style", href: "#code-style" },
      { title: "Community", href: "#community" }
    ]
  }
];

export const DocsSidebar = () => {
  const [expandedSections, setExpandedSections] = useState(new Set(["Getting Started"]));
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSection = (sectionTitle: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionTitle)) {
      newExpanded.delete(sectionTitle);
    } else {
      newExpanded.add(sectionTitle);
    }
    setExpandedSections(newExpanded);
  };

  const filteredSections = docSections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.items.some(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Sidebar className="w-80 border-r border-gray-200 bg-white shadow-lg">
      <SidebarContent className="p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Book className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Documentation</span>
          </div>
          <Badge variant="secondary" className="mb-2 bg-blue-100 text-blue-800 hover:bg-blue-200">
            v1.0.0
          </Badge>
          <p className="text-sm text-gray-600">
            Latest stable release
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="Search documentation..." 
              className="pl-10 bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Separator className="mb-6" />

        {/* Navigation */}
        <div className="space-y-2">
          {filteredSections.map((section) => (
            <div key={section.title} className="animate-fade-in">
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full p-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200 group"
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 bg-gradient-to-br ${section.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200`}>
                        <section.icon className="w-4 h-4 text-white" />
                      </div>
                      {section.title}
                    </div>
                    {expandedSections.has(section.title) ? (
                      <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    )}
                  </button>
                </SidebarGroupLabel>
                
                {expandedSections.has(section.title) && (
                  <SidebarGroupContent className="ml-11 animate-fade-in">
                    <SidebarMenu>
                      {section.items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton 
                            asChild
                            className={item.active ? "bg-blue-50 text-blue-700 border-l-2 border-blue-500" : "hover:bg-gray-50"}
                          >
                            <a 
                              href={item.href} 
                              className="text-sm py-2 px-3 rounded-lg transition-all duration-200 hover:bg-gray-50 block"
                            >
                              {item.title}
                            </a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                )}
              </SidebarGroup>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Quick Links</h4>
          <div className="space-y-2">
            <a 
              href="https://github.com/daddycoder007/Observo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <GitBranch className="w-4 h-4 mr-2" />
              GitHub Repository
            </a>
            <a 
              href="https://github.com/daddycoder007/Observo/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              Report Issues
            </a>
            <a 
              href="https://github.com/daddycoder007/Observo/discussions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <Users className="w-4 h-4 mr-2" />
              Community
            </a>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};