import { useQuery } from "@tanstack/react-query"
import { fetchRandomNumber } from "./api"

export function HomePage() {
  const randomQuery = useQuery({
    queryKey: ["random-number"],
    queryFn: fetchRandomNumber,
  })

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <h1 className="text-xl font-semibold">Home</h1>

      <div className="mt-4 rounded-xl border p-4">
        <div className="text-sm text-zinc-500">Server value (cached)</div>

        <div className="mt-1 text-lg font-medium">
          {randomQuery.isLoading ? "Loading..." : randomQuery.data}
        </div>

        <button
          className="mt-3 rounded-xl border px-4 py-2 hover:bg-zinc-100"
          onClick={() => randomQuery.refetch()}
        >
          Refetch
        </button>
      </div>
    </div>
  )
}
