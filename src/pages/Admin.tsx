import { Seo } from "@/components/seo/Seo";

const Admin = () => {
  return (
    <div>
      <Seo title="Admin — Users, Roles & Permissions" />
      <h1 className="text-2xl font-semibold tracking-tight">Admin — Users, Roles & Permissions</h1>
      <p className="mt-2 text-muted-foreground">Manage accounts, roles, and system settings. Audit logs coming soon.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border bg-card p-4 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-medium">Roles</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            <li>Senior Software Developer</li>
            <li>Team Member</li>
            <li>Project Manager / Stakeholder</li>
            <li>Admin</li>
          </ul>
        </section>
        <section className="rounded-xl border bg-card p-4 shadow-[var(--shadow-soft)]">
          <h2 className="text-lg font-medium">Permissions</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            <li>Role-based access control (RBAC)</li>
            <li>Granular project privileges</li>
            <li>Audit logging</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Admin;
