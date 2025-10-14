// app/(public)/conseil/[adviceId]/page.tsx
import AdvicePageClient from "@/components/MadeInHand/Client/Page/AdvicePageClient";

export default function AdvicePage({
  params,
}: {
  params: Record<string, string>;
}) {
  return <AdvicePageClient adviceId={params.adviceId} />;
}
