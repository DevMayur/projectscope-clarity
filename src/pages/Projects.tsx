import { Seo } from "@/components/seo/Seo";

const Projects = () => {
  return (
    <div>
      <Seo title="Projects — Manage Projects & Templates" />
      <h1 className="text-2xl font-semibold tracking-tight">Projects — Manage Projects & Templates</h1>
      <p className="mt-2 text-muted-foreground">Create, edit, and organize projects. Use templates for recurring work.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {["Aurora Website", "Mobile App", "Billing Revamp"].map((p) => (
          <article key={p} className="rounded-xl border bg-card p-4 shadow-[var(--shadow-soft)]">
            <h2 className="font-medium">{p}</h2>
            <p className="mt-1 text-sm text-muted-foreground">12 tasks • 2 blockers • Sprint 5</p>
            <a className="mt-3 inline-flex text-sm text-primary underline-offset-4 hover:underline" href="#">Open</a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
