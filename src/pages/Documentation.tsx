import { SidebarProvider } from "@/components/ui/sidebar";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { DocsContent } from "@/components/docs/DocsContent";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <DocsSidebar />
          <main className="flex-1 overflow-auto">
            <DocsContent />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Documentation;