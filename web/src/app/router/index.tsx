import { Router, RouterProvider } from "@tanstack/react-router"
import { routeTree } from "./routes"

export const router = new Router({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

export function AppRouter() {
  return <RouterProvider router={router} />
}
