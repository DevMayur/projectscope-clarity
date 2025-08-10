import { Seo } from "@/components/seo/Seo";

const Tasks = () => {
  return (
    <div>
      <Seo title="Tasks — Assignments, Status & Deadlines" />
      <h1 className="text-2xl font-semibold tracking-tight">Tasks — Assignments, Status & Deadlines</h1>
      <p className="mt-2 text-muted-foreground">Track work across statuses: Not Started, In Progress, Blocked, Completed.</p>

      <div className="mt-6 grid gap-3">
        {[{title: 'Auth Refactor', status: 'In Progress'}, {title: 'Migrate Payments', status: 'Blocked'}, {title: 'QA Sprint', status: 'Not Started'}].map((t) => (
          <div key={t.title} className="rounded-lg border bg-card p-3 flex items-center justify-between">
            <span>{t.title}</span>
            <span className="text-xs text-muted-foreground">{t.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
