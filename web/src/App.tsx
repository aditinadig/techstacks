import { ReactQueryProvider } from "./app/providers/react-query"
import { AppRouter } from "./app/router"

export default function App() {
  return (
    <ReactQueryProvider>
      <AppRouter />
    </ReactQueryProvider>
  )
}
