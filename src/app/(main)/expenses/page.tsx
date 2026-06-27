import { Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { MainLayout } from "@/components/layout";
import { Plus, ListFilter as Filter, Download, Receipt } from "lucide-react";

export default function ExpensesPage() {
  return (
    <MainLayout title="Expenses">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Expense Tracker</h2>
            <p className="text-foreground-muted mt-1">
              Manage and track your farming expenses
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" leftIcon={<Filter className="w-4 h-4" />}>
              Filter
            </Button>
            <Button variant="outline" leftIcon={<Download className="w-4 h-4" />}>
              Export
            </Button>
            <Button leftIcon={<Plus className="w-4 h-4" />}>Add Expense</Button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-foreground-muted">This Month</p>
              <p className="text-2xl font-bold text-foreground mt-1">₹12,450</p>
              <p className="text-xs text-success mt-1">-8% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-foreground-muted">Seeds & Fertilizers</p>
              <p className="text-2xl font-bold text-foreground mt-1">₹5,200</p>
              <p className="text-xs text-foreground-muted mt-1">42% of total</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-foreground-muted">Labor Costs</p>
              <p className="text-2xl font-bold text-foreground mt-1">₹4,100</p>
              <p className="text-xs text-foreground-muted mt-1">33% of total</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-foreground-muted">Equipment</p>
              <p className="text-2xl font-bold text-foreground mt-1">₹3,150</p>
              <p className="text-xs text-foreground-muted mt-1">25% of total</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border bg-background-elevated"
                >
                  <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                    <Receipt className="w-5 h-5 text-success" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">
                      Sample Expense {i}
                    </p>
                    <p className="text-sm text-foreground-muted">Category here</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">₹{1000 * i}</p>
                    <p className="text-xs text-foreground-muted">Jun {10 + i}, 2024</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
