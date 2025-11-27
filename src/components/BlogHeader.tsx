import { Shield } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const BlogHeader = () => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Basics of Linux in Cybersecurity
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                A beginner's guide to Linux fundamentals for cybersecurity engineers
              </p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
