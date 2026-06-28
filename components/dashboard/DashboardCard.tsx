import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type DashboardCardProps = {
  title: string;
  value: string | number;
  description: string;
  icon: ReactNode;
};

export default function DashboardCard({
  title,
  value,
  description,
  icon,
}: DashboardCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="rounded-xl bg-primary/10 p-3 text-primary">
          {icon}
        </div>

        <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
      </div>

      <div className="mt-6">
        <p className="text-sm text-muted-foreground">
          {title}
        </p>

        <h3 className="mt-2 text-3xl font-bold">
          {value}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}