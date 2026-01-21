import { RootRoute, Route } from "@tanstack/react-router"
import { RootLayout } from "../layout/RootLayout"
import { HomePage } from "../../pages/home/HomePage"
import { AboutPage } from "../../pages/about/AboutPage"

export const rootRoute = new RootRoute({
  component: RootLayout,
})

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
})

export const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
})

export const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])
