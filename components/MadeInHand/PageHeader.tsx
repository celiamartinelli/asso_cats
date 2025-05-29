// components/ui/PageHeader.tsx
import React from "react";
import headers from "@/utils/pageHeaders.json";

interface PageHeaderProps {
  pageKey?: keyof typeof headers;
  emoji?: string;
  title?: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  pageKey,
  emoji,
  title,
  subtitle,
}) => {
  const content = pageKey ? headers[pageKey] : null;

  return (
    <div className="text-center space-y-4 mb-10 animate-fade-in">
      <h1 className="text-4xl font-bold">
        {emoji || content?.emoji ? (
          <span className="mr-2">{emoji || content?.emoji}</span>
        ) : null}
        {title || content?.title}
      </h1>
      <p className="text-lg text-muted-foreground">
        {subtitle || content?.subtitle}
      </p>
    </div>
  );
};

export default PageHeader;
