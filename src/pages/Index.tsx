import { Seo } from "@/components/seo/Seo";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Seo title="Dashboard — Project Management & Reporting" />
      <section className="relative overflow-hidden rounded-xl border bg-card p-6 md:p-8 shadow-[var(--shadow-soft)]">
        <AuroraBackground />
        <div className="relative">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Dashboard — Project Management & Reporting</h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">Track progress, spot blockers, and get a snapshot of your sprints, milestones, and team productivity at a glance.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button variant="hero">Create Project</Button>
            <Button variant="outline">New Task</Button>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-card p-4 shadow-[var(--shadow-soft)]">
          <p className="text-sm text-muted-foreground">Open Tasks</p>
          <p className="mt-1 text-3xl font-semibold">32</p>
          <p className="text-xs text-muted-foreground mt-1">+8 this week</p>
        </div>
        <div className="rounded-xl border bg-card p-4 shadow-[var(--shadow-soft)]">
          <p className="text-sm text-muted-foreground">At Risk</p>
          <p className="mt-1 text-3xl font-semibold">5</p>
          <p className="text-xs text-muted-foreground mt-1">Across 3 projects</p>
        </div>
        <div className="rounded-xl border bg-card p-4 shadow-[var(--shadow-soft)]">
          <p className="text-sm text-muted-foreground">Sprint Velocity</p>
          <p className="mt-1 text-3xl font-semibold">41 pts</p>
          <p className="text-xs text-muted-foreground mt-1">Avg last 3 sprints</p>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-4 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-medium">Upcoming Deadlines</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex justify-between"><span>API Revamp (Backend)</span><span className="text-muted-foreground">Aug 20</span></li>
            <li className="flex justify-between"><span>Onboarding Flow (Frontend)</span><span className="text-muted-foreground">Aug 22</span></li>
            <li className="flex justify-between"><span>Q3 Report Draft</span><span className="text-muted-foreground">Aug 25</span></li>
          </ul>
        </div>
        <div className="rounded-xl border bg-card p-4 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-medium">Recent Activity</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li><span className="font-medium">You</span> moved "Auth Refactor" to In Progress</li>
            <li><span className="font-medium">Ava</span> commented on "Payments Migration"</li>
            <li><span className="font-medium">Liam</span> closed task "Fix 500 errors"</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Index;
