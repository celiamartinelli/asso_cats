// app/(public)/conseil/[adviceId]/page.tsx
import AdvicePageClient from "./AdvicePageClient";

interface AdvicePageProps {
  params: {
    adviceId: string;
  };
}

export default function AdvicePage({ params }: AdvicePageProps) {
  return <AdvicePageClient adviceId={params.adviceId} />;
}
