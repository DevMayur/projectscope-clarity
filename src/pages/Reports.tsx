import { Seo } from "@/components/seo/Seo";
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, Area } from "recharts";

const data = [
  { name: "Mon", tasks: 12 },
  { name: "Tue", tasks: 18 },
  { name: "Wed", tasks: 22 },
  { name: "Thu", tasks: 17 },
  { name: "Fri", tasks: 26 },
  { name: "Sat", tasks: 14 },
  { name: "Sun", tasks: 9 },
];

const Reports = () => {
  return (
    <div>
      <Seo title="Reports — Progress, Risk & Productivity" />
      <h1 className="text-2xl font-semibold tracking-tight">Reports — Progress, Risk & Productivity</h1>
      <p className="mt-2 text-muted-foreground">Visualize progress with burndown charts, velocity, and risk indicators.</p>

      <div className="mt-6 rounded-xl border bg-card p-4 shadow-[var(--shadow-soft)]">
        <h2 className="text-lg font-medium">Weekly Task Completions</h2>
        <div className="mt-3 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ left: 0, right: 0 }}>
              <defs>
                <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--brand))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--brand))" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis width={24} tickLine={false} axisLine={false} />
              <Tooltip cursor={{ stroke: 'hsl(var(--muted-foreground))', strokeDasharray: 4 }} contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 12 }} />
              <Area type="monotone" dataKey="tasks" stroke="hsl(var(--brand))" fillOpacity={1} fill="url(#colorTasks)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Reports;
