import Contact from "@/components/view/contact";
import Profile from "@/components/view/profile";
import ProjectComponent from "@/components/view/project_components";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
    {/* Header */}
    <header className="border-b">
      <Profile />
    </header>

    {/* Projects Section */}
    <main className="container mx-auto px-4 py-12">
      <ProjectComponent />
      {/* Contact Section */}
      <Contact />
    </main>
  </div>
  );
}
