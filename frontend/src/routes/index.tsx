import LoginForm from '@/features/auth/components/loginForm'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: App,
})

function App() {
    return (
        <div className="text-center flex items-center justify-center w-full min-h-screen">
            <LoginForm />
        </div>
    )
}
