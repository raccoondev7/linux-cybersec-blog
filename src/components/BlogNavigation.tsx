import { useState } from "react";
import { ChevronDown, ChevronRight, Terminal, Code, Network, Shield as ShieldIcon, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  subsections?: { id: string; title: string }[];
}

const navItems: NavItem[] = [
  {
    id: "linux-commands",
    title: "Basic Linux Commands",
    icon: <Terminal className="h-4 w-4" />,
    subsections: [
      { id: "system-info", title: "System Information" },
      { id: "user-info", title: "User Information" },
      { id: "file-operations", title: "File Operations" },
      { id: "permissions", title: "File Permissions" },
    ],
  },
  {
    id: "bash-scripting",
    title: "Bash Scripting Basics",
    icon: <Code className="h-4 w-4" />,
    subsections: [
      { id: "first-script", title: "Your First Script" },
      { id: "links", title: "Symbolic & Hard Links" },
      { id: "variables", title: "Environment Variables" },
    ],
  },
  {
    id: "networking",
    title: "IP Knowledge & Networking",
    icon: <Network className="h-4 w-4" />,
    subsections: [
      { id: "ip-commands", title: "IP Address Management" },
      { id: "network-interfaces", title: "Network Interfaces" },
      { id: "routing", title: "Routing & ARP" },
    ],
  },
  {
    id: "nmap",
    title: "Network Scanning with Nmap",
    icon: <Activity className="h-4 w-4" />,
    subsections: [
      { id: "nmap-basics", title: "Nmap Fundamentals" },
      { id: "host-discovery", title: "Host Discovery" },
      { id: "port-scanning", title: "Port Scanning" },
    ],
  },
  {
    id: "firewall",
    title: "Firewall with IPTables",
    icon: <ShieldIcon className="h-4 w-4" />,
    subsections: [
      { id: "iptables-intro", title: "IPTables Introduction" },
      { id: "firewall-rules", title: "Creating Firewall Rules" },
      { id: "port-forwarding", title: "Port Management" },
    ],
  },
];

interface BlogNavigationProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

const BlogNavigation = ({ onNavigate, activeSection }: BlogNavigationProps) => {
  const [expandedSections, setExpandedSections] = useState<string[]>(["linux-commands"]);

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <nav className="w-64 border-r border-border bg-card p-4 sticky top-0 h-screen overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4 text-foreground">Contents</h2>
      <ul className="space-y-2">
        {navItems.map((item) => {
          const isExpanded = expandedSections.includes(item.id);
          return (
            <li key={item.id}>
              <button
                onClick={() => {
                  toggleSection(item.id);
                  onNavigate(item.id);
                }}
                className={cn(
                  "flex items-center gap-2 w-full text-left px-3 py-2 rounded-md transition-colors",
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent text-foreground"
                )}
              >
                {item.icon}
                <span className="flex-1 text-sm font-medium">{item.title}</span>
                {item.subsections && (
                  <span className="text-muted-foreground">
                    {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </span>
                )}
              </button>
              {item.subsections && isExpanded && (
                <ul className="ml-6 mt-1 space-y-1">
                  {item.subsections.map((sub) => (
                    <li key={sub.id}>
                      <button
                        onClick={() => onNavigate(sub.id)}
                        className={cn(
                          "w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors",
                          activeSection === sub.id
                            ? "bg-secondary text-secondary-foreground"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        )}
                      >
                        {sub.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BlogNavigation;
