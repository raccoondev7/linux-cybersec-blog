import { ReactNode } from "react";

interface ArticleSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const ArticleSection = ({ id, title, children }: ArticleSectionProps) => {
  return (
    <section id={id} className="mb-12 scroll-mt-6">
      <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
        {title}
      </h2>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        {children}
      </div>
    </section>
  );
};

export default ArticleSection;
