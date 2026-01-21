import { Outlet, Link } from "@tanstack/react-router"

export function RootLayout() {
  return (
    <div className="min-h-screen bg-zinc-50 p-8 text-zinc-900">
      <div className="mx-auto max-w-md">
        <nav className="flex gap-4 text-sm">
          <Link
            to="/"
            className="rounded-lg border px-3 py-1 hover:bg-zinc-100"
            activeProps={{ className: "bg-white font-medium" }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="rounded-lg border px-3 py-1 hover:bg-zinc-100"
            activeProps={{ className: "bg-white font-medium" }}
          >
            About
          </Link>
        </nav>

        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
