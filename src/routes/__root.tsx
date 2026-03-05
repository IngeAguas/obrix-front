import { Outlet, createRootRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ProtectedRoute } from '../components/ProtectedRoute'

export const queryClient = new QueryClient()

function RootComponent() {


    return (
        <QueryClientProvider client={queryClient} >
            <ProtectedRoute>
                <main >
                    <Outlet />
                </main>
            </ProtectedRoute>
        </QueryClientProvider>
    )
}

export const Route = createRootRoute({
    component: RootComponent,
})