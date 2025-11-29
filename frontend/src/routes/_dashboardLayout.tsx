import { Outlet, createFileRoute } from '@tanstack/react-router'
// import { requireAuth } from '@/utils'

export const Route = createFileRoute('/_dashboardLayout')({
    // beforeLoad: async () => {
    //     try {
    //         await requireAuth();
    //     } catch {
    //         throw redirect({
    //             to: '/',
    //             search: {},
    //         });
    //     }
    // },
    component: DashboardLayout,
})

function DashboardLayout() {
    return (
        <div className="min-h-screen">
            <div>
                <Outlet />
            </div>
        </div>
    )
} 