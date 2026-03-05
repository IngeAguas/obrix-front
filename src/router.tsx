import { queryClient } from './routes/__root';
import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export const router = createRouter({
    routeTree,
    context: {
        queryClient,
    },
})

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}