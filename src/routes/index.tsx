import { createFileRoute } from "@tanstack/react-router";
import { PackagesSection } from "@/components/PackagesSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <PackagesSection />
    </main>
  );
}
