import { ReactNode } from "react";

interface CodeBlockProps {
  children: ReactNode;
  language?: string;
}

const CodeBlock = ({ children, language = "bash" }: CodeBlockProps) => {
  return (
    <div className="my-4">
      {language && (
        <div className="bg-muted px-4 py-1 text-xs text-muted-foreground font-mono border-b border-border rounded-t-md">
          {language}
        </div>
      )}
      <pre className="bg-muted p-4 rounded-b-md overflow-x-auto border border-border">
        <code className="text-sm font-mono text-foreground">{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
