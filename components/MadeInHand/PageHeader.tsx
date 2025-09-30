// components/ui/PageHeader.tsx
import React from "react";
import headers from "@/utils/pageHeaders.json";

interface PageHeaderProps {
  pageKey?: keyof typeof headers;
  emoji?: string;
  title?: string;
  subtitle?: string;
  textColorClass?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  pageKey,
  emoji,
  title,
  subtitle,
  textColorClass,
}) => {
  const content = pageKey ? headers[pageKey] : null;

  return (
    <div className="my-12 text-center space-y-4 animate-fade-in">
      <h1 className={`text-3xl md:text-4xl font-bold ${textColorClass ?? ""}`}>
        {emoji || content?.emoji ? (
          <span className="mr-2">{emoji || content?.emoji} </span>
        ) : null}
        {title || content?.title}
      </h1>
      <p className="text-base md:text-lg text-muted-foreground">
        {subtitle || content?.subtitle}
      </p>
    </div>
  );
};

export default PageHeader;
