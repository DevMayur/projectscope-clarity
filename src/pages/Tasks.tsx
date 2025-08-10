import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Seo } from "@/components/seo/Seo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Demo data (to be replaced by Supabase later)
const projects = [
  { id: "aurora-website", name: "Aurora Website" },
  { id: "mobile-app", name: "Mobile App" },
  { id: "billing-revamp", name: "Billing Revamp" },
];

const allTasks = [
  { title: "Auth Refactor", status: "In Progress", projectId: "aurora-website" },
  { title: "Migrate Payments", status: "Blocked", projectId: "billing-revamp" },
  { title: "QA Sprint", status: "Not Started", projectId: "mobile-app" },
  { title: "Landing Polish", status: "In Progress", projectId: "aurora-website" },
  { title: "Webhook Retries", status: "Not Started", projectId: "billing-revamp" },
];

const Tasks = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramProject = searchParams.get("project") || "all";
  const [selectedProject, setSelectedProject] = useState<string>(paramProject);

  useEffect(() => {
    // keep URL in sync when select changes
    if (selectedProject === "all") {
      searchParams.delete("project");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ project: selectedProject }, { replace: true });
    }
  }, [selectedProject]);

  const filteredTasks = useMemo(() => {
    if (selectedProject === "all") return allTasks;
    return allTasks.filter((t) => t.projectId === selectedProject);
  }, [selectedProject]);

  const selectedLabel =
    selectedProject === "all"
      ? "All projects"
      : projects.find((p) => p.id === selectedProject)?.name ?? "All projects";

  return (
    <div>
      <Seo title="Tasks — Assignments, Status & Deadlines" />
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Tasks — Assignments, Status & Deadlines</h1>
          <p className="mt-2 text-muted-foreground">Filter by project to focus work. Statuses: Not Started, In Progress, Blocked, Completed.</p>
        </div>
        <div className="w-full md:w-64">
          <Select value={selectedProject} onValueChange={(v) => setSelectedProject(v)}>
            <SelectTrigger aria-label="Filter by project">
              <SelectValue placeholder="All projects" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All projects</SelectItem>
              {projects.map((p) => (
                <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="mt-1 text-xs text-muted-foreground">Currently showing: {selectedLabel}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        {filteredTasks.length === 0 ? (
          <div className="rounded-lg border bg-card p-6 text-center text-sm text-muted-foreground">
            No tasks found for this project.
          </div>
        ) : (
          filteredTasks.map((t) => (
            <div key={t.title} className="rounded-lg border bg-card p-3 flex items-center justify-between shadow-[var(--shadow-soft)]">
              <span>{t.title}</span>
              <span className="text-xs text-muted-foreground">{t.status}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Tasks;
