import { useState } from "react";
import BlogHeader from "@/components/BlogHeader";
import BlogNavigation from "@/components/BlogNavigation";
import ArticleSection from "@/components/ArticleSection";
import CodeBlock from "@/components/CodeBlock";
import Screenshot from "@/components/Screenshot";

import ipAddrImg from "@/assets/screenshots/ip-addr-command.png";
import ipLinkImg from "@/assets/screenshots/ip-link-command.png";
import unameImg from "@/assets/screenshots/uname-command.png";
import fingerImg from "@/assets/screenshots/finger-command.png";
import pingImg from "@/assets/screenshots/ping-network.png";
import nmapImg from "@/assets/screenshots/nmap-scan.png";
import iptablesListImg from "@/assets/screenshots/iptables-list.png";
import iptablesRulesImg from "@/assets/screenshots/iptables-rules.png";
import bashScriptImg from "@/assets/screenshots/bash-script.png";
import lnCommandImg from "@/assets/screenshots/ln-command.png";

const Index = () => {
  const [activeSection, setActiveSection] = useState("linux-commands");

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <div className="flex">
        <BlogNavigation onNavigate={handleNavigate} activeSection={activeSection} />
        <main className="flex-1 p-8 max-w-4xl mx-auto">
          {/* Linux Commands Section */}
          <ArticleSection id="linux-commands" title="Basic Linux Commands">
            <p className="text-foreground leading-relaxed">
              Linux commands are the foundation of system administration and cybersecurity operations. 
              Understanding these commands is essential for navigating the Linux environment, managing 
              system resources, and performing security analysis.
            </p>
          </ArticleSection>

          <ArticleSection id="system-info" title="System Information Commands">
            <p className="text-foreground leading-relaxed mb-4">
              The <code className="bg-muted px-2 py-1 rounded text-sm">uname</code> command provides essential 
              information about your system's kernel, architecture, and operating system version.
            </p>
            
            <CodeBlock>
{`$ uname -a
Linux Debian 6.1.0-28-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.119-1 (2024-11-22) x86_64 GNU/Linux`}
            </CodeBlock>

            <Screenshot 
              src={unameImg} 
              alt="uname command output showing system information"
              caption="The uname command displays kernel version, architecture, and system details"
            />

            <div className="bg-accent p-4 rounded-lg my-4">
              <h4 className="font-semibold text-foreground mb-2">Key Information:</h4>
              <ul className="list-disc list-inside text-foreground space-y-1">
                <li><strong>SMP (Symmetric Multiprocessing):</strong> Kernel structure allowing multiple processors or cores to work simultaneously</li>
                <li><strong>PREEMPT_DYNAMIC:</strong> Allows interrupting code execution for system calls with dynamic control</li>
                <li><strong>x86_64:</strong> 64-bit architecture type</li>
              </ul>
            </div>
          </ArticleSection>

          <ArticleSection id="user-info" title="User Information">
            <p className="text-foreground leading-relaxed mb-4">
              The <code className="bg-muted px-2 py-1 rounded text-sm">finger</code> command displays 
              detailed information about users currently logged into the system.
            </p>

            <CodeBlock>
{`$ finger jsagittary
Login: jsagittary                     Name: jsagittary
Directory: /home/jsagittary           Shell: /bin/bash
On since Fri Jan 10 22:47 (CET) on tty7 from :0
1 hour 18 minutes idle
No mail`}
            </CodeBlock>

            <Screenshot 
              src={fingerImg} 
              alt="finger command showing user information"
              caption="User information including login name, home directory, and session details"
            />

            <h4 className="font-semibold text-foreground mt-6 mb-3">Other User Commands:</h4>
            <ul className="space-y-2 text-foreground">
              <li><code className="bg-muted px-2 py-1 rounded text-sm">w</code> - Shows currently logged in users and their active processes</li>
              <li><code className="bg-muted px-2 py-1 rounded text-sm">who</code> - Displays who is logged in with timestamps</li>
              <li><code className="bg-muted px-2 py-1 rounded text-sm">whoami</code> - Prints your current username</li>
            </ul>
          </ArticleSection>

          <ArticleSection id="file-operations" title="File Operations">
            <p className="text-foreground leading-relaxed mb-4">
              Essential commands for navigating and manipulating the filesystem are crucial for any Linux user.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Core File Commands:</h4>
                <ul className="space-y-3 text-foreground">
                  <li>
                    <code className="bg-muted px-2 py-1 rounded text-sm font-bold">ls</code> - List directory contents
                    <CodeBlock>$ ls -l    # Long format with details</CodeBlock>
                  </li>
                  <li>
                    <code className="bg-muted px-2 py-1 rounded text-sm font-bold">cat</code> - Display file contents
                    <CodeBlock>$ cat /etc/passwd | less    # View with pagination</CodeBlock>
                  </li>
                  <li>
                    <code className="bg-muted px-2 py-1 rounded text-sm font-bold">cp</code> - Copy files and directories
                    <CodeBlock>$ cp source.txt destination.txt</CodeBlock>
                  </li>
                  <li>
                    <code className="bg-muted px-2 py-1 rounded text-sm font-bold">mv</code> - Move or rename files
                    <CodeBlock>$ mv oldname.txt newname.txt</CodeBlock>
                  </li>
                  <li>
                    <code className="bg-muted px-2 py-1 rounded text-sm font-bold">rm</code> - Remove files
                    <CodeBlock>$ rm file.txt    # Delete with caution!</CodeBlock>
                  </li>
                  <li>
                    <code className="bg-muted px-2 py-1 rounded text-sm font-bold">mkdir</code> - Create directories
                    <CodeBlock>$ mkdir -p Praca/Arkusze/Archiwum    # Create nested dirs</CodeBlock>
                  </li>
                  <li>
                    <code className="bg-muted px-2 py-1 rounded text-sm font-bold">touch</code> - Create empty files or update timestamps
                    <CodeBlock>$ touch newfile.txt</CodeBlock>
                  </li>
                </ul>
              </div>
            </div>
          </ArticleSection>

          <ArticleSection id="permissions" title="File Permissions">
            <p className="text-foreground leading-relaxed mb-4">
              Linux file permissions control who can read, write, or execute files. Understanding permissions 
              is critical for system security.
            </p>

            <div className="bg-accent p-4 rounded-lg my-4">
              <h4 className="font-semibold text-foreground mb-2">Permission Structure:</h4>
              <ul className="list-disc list-inside text-foreground space-y-1">
                <li><strong>r (read):</strong> Permission to read file contents or list directory contents</li>
                <li><strong>w (write):</strong> Permission to modify files or directory contents</li>
                <li><strong>x (execute):</strong> Permission to run files as programs or access directories</li>
              </ul>
            </div>

            <CodeBlock>
{`# Set specific permissions
$ chmod 700 script.sh    # Owner: rwx, Group: ---, Others: ---
$ chmod 754 file.txt     # Owner: rwx, Group: r-x, Others: r--

# Change file ownership
$ chown user:group file.txt
$ chgrp groupname file.txt`}
            </CodeBlock>

            <p className="text-foreground leading-relaxed mt-4">
              The numeric notation (e.g., 700, 754) represents permissions where each digit is the sum of:
              4 (read) + 2 (write) + 1 (execute).
            </p>
          </ArticleSection>

          {/* Bash Scripting Section */}
          <ArticleSection id="bash-scripting" title="Bash Scripting Basics">
            <p className="text-foreground leading-relaxed">
              Bash scripting allows you to automate repetitive tasks, create complex workflows, and build 
              powerful system administration tools. It's an essential skill for cybersecurity professionals.
            </p>
          </ArticleSection>

          <ArticleSection id="first-script" title="Your First Bash Script">
            <p className="text-foreground leading-relaxed mb-4">
              Creating your first bash script is straightforward. Let's start with a simple example:
            </p>

            <CodeBlock>
{`#!/bin/bash
# My first script
# Author: John Sagittary

echo "Systemy operacyjne"
cat ~/.bashrc`}
            </CodeBlock>

            <Screenshot 
              src={bashScriptImg} 
              alt="Bash script execution in terminal"
              caption="Creating and executing a bash script"
            />

            <div className="bg-accent p-4 rounded-lg my-4">
              <h4 className="font-semibold text-foreground mb-2">Script Breakdown:</h4>
              <ul className="list-disc list-inside text-foreground space-y-1">
                <li><strong>#!/bin/bash:</strong> Shebang line specifying the bash interpreter</li>
                <li><strong># comments:</strong> Lines starting with # are comments</li>
                <li><strong>echo:</strong> Prints text to the terminal</li>
                <li><strong>cat ~/.bashrc:</strong> Displays the contents of the bashrc configuration file</li>
              </ul>
            </div>

            <CodeBlock>
{`# Make script executable
$ chmod 700 pierwszy.sh

# Run the script
$ ./pierwszy.sh`}
            </CodeBlock>
          </ArticleSection>

          <ArticleSection id="links" title="Symbolic and Hard Links">
            <p className="text-foreground leading-relaxed mb-4">
              Linux provides two types of file links: symbolic (soft) links and hard links.
            </p>

            <CodeBlock>
{`# Create symbolic link
$ ln -s pierwszy.sh pierwszy_symboliczne.sh

# Create hard link
$ ln pierwszy.sh pierwszy_twarde.sh

# View the links
$ ls -l`}
            </CodeBlock>

            <Screenshot 
              src={lnCommandImg} 
              alt="Creating symbolic and hard links"
              caption="Symbolic link (lrwxrwxrwx) vs hard link showing link count"
            />

            <div className="bg-accent p-4 rounded-lg my-4">
              <h4 className="font-semibold text-foreground mb-2">Key Differences:</h4>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li><strong>Symbolic Link:</strong> Points to the file path (like a shortcut). If the original file is deleted, the link breaks.</li>
                <li><strong>Hard Link:</strong> Points directly to the inode (disk location). Even if the original file is deleted, the hard link still accesses the data.</li>
              </ul>
            </div>
          </ArticleSection>

          <ArticleSection id="variables" title="Environment Variables">
            <p className="text-foreground leading-relaxed mb-4">
              Environment variables store system configuration and user information accessible to all processes.
            </p>

            <CodeBlock>
{`#!/bin/bash
# Display user information using environment variables

echo "Moj login to: $USER, katalog domowy lokowany w: $HOME"

# View all environment variables
$ printenv | more`}
            </CodeBlock>

            <p className="text-foreground leading-relaxed mt-4">
              Common environment variables include <code className="bg-muted px-2 py-1 rounded text-sm">$USER</code> (username), 
              <code className="bg-muted px-2 py-1 rounded text-sm">$HOME</code> (home directory), 
              <code className="bg-muted px-2 py-1 rounded text-sm">$PATH</code> (executable search paths), and 
              <code className="bg-muted px-2 py-1 rounded text-sm">$SHELL</code> (current shell).
            </p>
          </ArticleSection>

          {/* Networking Section */}
          <ArticleSection id="networking" title="IP Knowledge & Networking">
            <p className="text-foreground leading-relaxed">
              Understanding IP addressing and network configuration is fundamental for cybersecurity work. 
              Linux provides powerful command-line tools for network management and analysis.
            </p>
          </ArticleSection>

          <ArticleSection id="ip-commands" title="IP Address Management">
            <p className="text-foreground leading-relaxed mb-4">
              The <code className="bg-muted px-2 py-1 rounded text-sm">ip addr</code> command displays and manages 
              network interfaces and IP addresses on your system.
            </p>

            <CodeBlock>
{`$ ip addr

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
    
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP
    link/ether 08:00:27:6a:6d:dc brd ff:ff:ff:ff:ff:ff
    inet 10.0.2.15/24 brd 10.0.2.255 scope global dynamic eth0`}
            </CodeBlock>

            <Screenshot 
              src={ipAddrImg} 
              alt="ip addr command output"
              caption="Network interface configuration showing loopback and eth0 interfaces"
            />

            <div className="bg-accent p-4 rounded-lg my-4">
              <h4 className="font-semibold text-foreground mb-2">Interface Breakdown:</h4>
              <ul className="list-disc list-inside text-foreground space-y-2">
                <li><strong>lo (loopback):</strong> Local interface (127.0.0.1) used for internal communication</li>
                <li><strong>eth0:</strong> Primary network interface with IP 10.0.2.15/24</li>
                <li><strong>MTU:</strong> Maximum Transmission Unit - largest packet size</li>
                <li><strong>MAC address:</strong> Hardware address (08:00:27:6a:6d:dc)</li>
              </ul>
            </div>
          </ArticleSection>

          <ArticleSection id="network-interfaces" title="Network Interface Control">
            <p className="text-foreground leading-relaxed mb-4">
              You can enable or disable network interfaces using the <code className="bg-muted px-2 py-1 rounded text-sm">ip link</code> command.
            </p>

            <CodeBlock>
{`# Bring interface down
$ sudo ip link set dev eth0 down

# Bring interface up
$ sudo ip link set dev eth0 up

# Verify status
$ ip addr show eth0`}
            </CodeBlock>

            <Screenshot 
              src={ipLinkImg} 
              alt="ip link command toggling network interface"
              caption="Disabling and enabling the eth0 network interface"
            />

            <p className="text-foreground leading-relaxed mt-4">
              When an interface is down, it shows <code className="bg-muted px-2 py-1 rounded text-sm">state DOWN</code> and 
              loses its IP address assignment until brought back up.
            </p>
          </ArticleSection>

          <ArticleSection id="routing" title="Routing and ARP">
            <p className="text-foreground leading-relaxed mb-4">
              Routing tables determine how packets are forwarded across networks.
            </p>

            <CodeBlock>
{`# View routing table
$ ip route
default via 10.0.2.2 dev eth0 proto dhcp src 10.0.2.15 metric 100
10.0.2.0/24 dev eth0 proto kernel scope link src 10.0.2.15 metric 100

# View ARP table (IP to MAC mapping)
$ ip neigh
10.0.2.2 dev eth0 lladdr 52:54:00:12:35:02 STALE`}
            </CodeBlock>

            <div className="bg-accent p-4 rounded-lg my-4">
              <h4 className="font-semibold text-foreground mb-2">Understanding Routing:</h4>
              <ul className="list-disc list-inside text-foreground space-y-1">
                <li><strong>Default gateway:</strong> 10.0.2.2 - where packets go when destination is not local</li>
                <li><strong>ARP (Address Resolution Protocol):</strong> Maps IP addresses to MAC addresses</li>
                <li><strong>STALE:</strong> Entry hasn't been used recently but is still valid</li>
              </ul>
            </div>

            <Screenshot 
              src={pingImg} 
              alt="Network connectivity testing with ping"
              caption="Testing network connectivity between interfaces"
            />
          </ArticleSection>

          {/* Nmap Section */}
          <ArticleSection id="nmap" title="Network Scanning with Nmap">
            <p className="text-foreground leading-relaxed">
              Nmap (Network Mapper) is one of the most powerful and essential tools in a cybersecurity 
              professional's arsenal. It's used for network discovery, security auditing, and vulnerability assessment.
            </p>
          </ArticleSection>

          <ArticleSection id="nmap-basics" title="Nmap Fundamentals">
            <p className="text-foreground leading-relaxed mb-4">
              Nmap can discover hosts, identify open ports, detect services and operating systems, and find security vulnerabilities.
            </p>

            <CodeBlock>
{`# Basic scan
$ nmap 192.168.1.1

# Scan entire subnet
$ nmap 192.168.1.0/24

# Scan specific ports
$ nmap -p 80,443 192.168.1.1

# Scan all ports
$ nmap -p- 192.168.1.1`}
            </CodeBlock>
          </ArticleSection>

          <ArticleSection id="host-discovery" title="Host Discovery">
            <p className="text-foreground leading-relaxed mb-4">
              The <code className="bg-muted px-2 py-1 rounded text-sm">-sn</code> parameter performs a ping scan 
              to discover active hosts without scanning ports.
            </p>

            <CodeBlock>
{`# Discover active hosts (no port scan)
$ nmap -sn 192.168.1.0/24

Starting Nmap 7.94SVN at 2025-01-19 22:43 CET
Nmap scan report for 192.168.1.0
Host is up (0.0019s latency).
Nmap done: 1 IP address (1 host up) scanned in 0.12 seconds`}
            </CodeBlock>

            <div className="bg-accent p-4 rounded-lg my-4">
              <h4 className="font-semibold text-foreground mb-2">What does -sn do?</h4>
              <p className="text-foreground">
                The <code className="bg-muted px-2 py-1 rounded text-sm">-sn</code> flag (previously <code className="bg-muted px-2 py-1 rounded text-sm">-sP</code>) 
                performs host discovery only. It sends ICMP echo requests, TCP SYN to port 443, TCP ACK to port 80, 
                and ICMP timestamp requests to determine if hosts are online without the overhead of port scanning.
              </p>
            </div>
          </ArticleSection>

          <ArticleSection id="port-scanning" title="Port Scanning">
            <p className="text-foreground leading-relaxed mb-4">
              Port scanning identifies which network services are running on target systems.
            </p>

            <CodeBlock>
{`$ nmap -p- 192.168.30.1

Starting Nmap 7.94SVN at 2025-01-19 22:54 CET
Nmap scan report for 192.168.30.1
Host is up (0.000064s latency).
Not shown: 65531 filtered tcp ports (no-response)

PORT      STATE   SERVICE
80/tcp    open    http
443/tcp   closed  https
64536/tcp closed  unknown
64540/tcp closed  unknown

Nmap done: 1 IP address (1 host up) scanned in 228.10 seconds`}
            </CodeBlock>

            <Screenshot 
              src={nmapImg} 
              alt="Nmap port scan results"
              caption="Port scan showing open, closed, and filtered ports"
            />

            <div className="bg-accent p-4 rounded-lg my-4">
              <h4 className="font-semibold text-foreground mb-2">Port States:</h4>
              <ul className="list-disc list-inside text-foreground space-y-1">
                <li><strong>open:</strong> Application is actively accepting connections</li>
                <li><strong>closed:</strong> Port is accessible but no application is listening</li>
                <li><strong>filtered:</strong> Firewall or filter is blocking probe packets</li>
              </ul>
            </div>
          </ArticleSection>

          {/* IPTables/Firewall Section */}
          <ArticleSection id="firewall" title="Firewall with IPTables">
            <p className="text-foreground leading-relaxed">
              IPTables is the standard firewall utility for Linux systems. It provides powerful packet filtering 
              and NAT (Network Address Translation) capabilities to secure your network infrastructure.
            </p>
          </ArticleSection>

          <ArticleSection id="iptables-intro" title="IPTables Introduction">
            <p className="text-foreground leading-relaxed mb-4">
              IPTables works with chains (INPUT, OUTPUT, FORWARD) and rules that determine what happens to network packets.
            </p>

            <CodeBlock>
{`# View current firewall rules
$ sudo iptables -L

Chain INPUT (policy DROP)
target     prot opt source               destination

Chain FORWARD (policy DROP)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination`}
            </CodeBlock>

            <Screenshot 
              src={iptablesListImg} 
              alt="IPTables rules listing"
              caption="Default iptables configuration showing empty chains"
            />

            <div className="bg-accent p-4 rounded-lg my-4">
              <h4 className="font-semibold text-foreground mb-2">Chain Types:</h4>
              <ul className="list-disc list-inside text-foreground space-y-1">
                <li><strong>INPUT:</strong> Controls incoming connections to your system</li>
                <li><strong>OUTPUT:</strong> Controls outgoing connections from your system</li>
                <li><strong>FORWARD:</strong> Controls routing through your system (for routers/gateways)</li>
              </ul>
            </div>
          </ArticleSection>

          <ArticleSection id="firewall-rules" title="Creating Firewall Rules">
            <p className="text-foreground leading-relaxed mb-4">
              Let's build a basic firewall that allows HTTP/HTTPS traffic while blocking everything else.
            </p>

            <CodeBlock>
{`# Allow established connections
$ sudo iptables -A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT

# Allow HTTP traffic (port 80)
$ sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT

# Allow HTTPS traffic (port 443)
$ sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Set default policy to DROP
$ sudo iptables -P INPUT DROP

# View the rules
$ sudo iptables -L`}
            </CodeBlock>

            <Screenshot 
              src={iptablesRulesImg} 
              alt="IPTables rules for HTTP and HTTPS"
              caption="Firewall configured to allow HTTP/HTTPS while blocking other traffic"
            />

            <p className="text-foreground leading-relaxed mt-4">
              This configuration creates a restrictive firewall that only allows established connections and 
              incoming traffic on ports 80 and 443, blocking all other inbound connections.
            </p>
          </ArticleSection>

          <ArticleSection id="port-forwarding" title="Port Management & Blocking">
            <p className="text-foreground leading-relaxed mb-4">
              You can block specific websites or services using the FORWARD chain.
            </p>

            <CodeBlock>
{`# Block access to a specific IP (e.g., facebook.com)
$ dig +short www.facebook.com
157.240.27.35

$ sudo iptables -A FORWARD -d 157.240.27.35 -j REJECT

# Enable IP forwarding for NAT
$ echo "1" > /proc/sys/net/ipv4/ip_forward

# Set up NAT masquerading
$ sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE`}
            </CodeBlock>

            <div className="bg-accent p-4 rounded-lg my-4">
              <h4 className="font-semibold text-foreground mb-2">NAT Configuration:</h4>
              <ul className="list-disc list-inside text-foreground space-y-1">
                <li><strong>IP Forwarding:</strong> Allows the system to route packets between interfaces</li>
                <li><strong>MASQUERADE:</strong> Dynamically translates internal IPs to the external interface IP</li>
                <li><strong>REJECT vs DROP:</strong> REJECT sends a response back; DROP silently discards packets</li>
              </ul>
            </div>
          </ArticleSection>

          {/* Conclusion */}
          <section className="mt-16 p-6 bg-accent rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Conclusion</h2>
            <p className="text-foreground leading-relaxed mb-4">
              These fundamentals form the foundation of Linux system administration and cybersecurity operations. 
              Mastering these commands and concepts will enable you to:
            </p>
            <ul className="list-disc list-inside text-foreground space-y-2">
              <li>Navigate and manage Linux systems efficiently</li>
              <li>Automate tasks with bash scripting</li>
              <li>Understand and configure network settings</li>
              <li>Perform security audits with nmap</li>
              <li>Secure systems with firewall rules</li>
            </ul>
            <p className="text-foreground leading-relaxed mt-4">
              Continue practicing these skills in lab environments and explore more advanced topics as you 
              progress in your cybersecurity journey.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
