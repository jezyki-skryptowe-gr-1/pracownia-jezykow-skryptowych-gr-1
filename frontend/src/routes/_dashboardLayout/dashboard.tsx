import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, CreditCard, DollarSign, PieChart as PieChartIcon } from 'lucide-react'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'

const pieData = [
    { name: 'Food', value: 35 },
    { name: 'Transport', value: 23 },
    { name: 'Utilities', value: 19 },
    { name: 'Other', value: 23 },
]

const COLORS = ['#4CAF50', '#FF9800', '#2196F3', '#9C27B0']

export const Route = createFileRoute('/_dashboardLayout/dashboard')({
    component: DashboardIndex,
})

function StatCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
    return (
        <Card className="rounded-2xl shadow-md min-h-[120px]">
            <CardContent className="p-4 flex items-center justify-between">
                <div>
                    <div className="text-sm text-muted-foreground">{title}</div>
                    <div className="text-2xl font-semibold">{value}</div>
                </div>
                <div className="text-primary">{icon}</div>
            </CardContent>
        </Card>
    )
}

function DashboardIndex() {
    return (
        <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
            <main className="flex-1 p-6">
                <header className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                    <div className="flex items-center gap-3">
                        <select className="border rounded px-3 py-1 text-sm">
                            <option>This Month</option>
                            <option>Last Month</option>
                            <option>This Year</option>
                        </select>
                        <Button variant="outline" size="icon">
                            <LayoutDashboard className="h-4 w-4" />
                        </Button>
                    </div>
                </header>

                {/* Top stats */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <StatCard title="Total Balance" value="$12,430" icon={<CreditCard className="h-6 w-6" />} />
                    <StatCard title="Monthly Spend" value="$1,230" icon={<DollarSign className="h-6 w-6" />} />
                    <StatCard title="Reports" value="4" icon={<PieChartIcon className="h-6 w-6" />} />
                </section>

                {/* Middle content */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="lg:col-span-2">
                        <Card className="rounded-2xl shadow-md min-h-[260px]">
                            <CardHeader className="px-4 py-4">
                                <CardTitle>Spending by Category</CardTitle>
                                <CardDescription>Overview of expenses</CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                                <div className="h-60">
                                                    <ResponsiveContainer width="100%" height="100%">
                                                        <PieChart>
                                                            <Pie
                                                                data={pieData}
                                                                dataKey="value"
                                                                nameKey="name"
                                                                cx="50%"
                                                                cy="50%"
                                                                innerRadius={40}
                                                                outerRadius={80}
                                                                paddingAngle={4}
                                                            >
                                                                {pieData.map((_, idx) => (
                                                                    <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                                                                ))}
                                                            </Pie>
                                                            <Tooltip formatter={(value: number) => `$${value}`} />
                                                        </PieChart>
                                                    </ResponsiveContainer>
                                                </div>
                            </CardContent>
                            <CardFooter className="px-4 py-3">
                                <Button variant="ghost">View full report</Button>
                            </CardFooter>
                        </Card>
                    </div>

                    <div>
                        <Card className="rounded-2xl shadow-md min-h-[260px]">
                            <CardHeader className="px-4 py-4">
                                <CardTitle>Upcoming Bills</CardTitle>
                                <CardDescription>Next due dates</CardDescription>
                            </CardHeader>
                            <CardContent className="p-4">
                                <ul className="space-y-3 text-sm">
                                    <li className="flex justify-between">
                                        <span>Electricity</span>
                                        <span className="text-muted-foreground">Nov 20</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Internet</span>
                                        <span className="text-muted-foreground">Nov 25</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Credit Card</span>
                                        <span className="text-muted-foreground">Dec 1</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Recent activity */}
                <section>
                    <Card className="rounded-2xl shadow-md">
                        <CardHeader className="px-4 py-4">
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                            <div className="text-sm text-muted-foreground">No recent transactions — integrate table component here.</div>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </div>
    )
}