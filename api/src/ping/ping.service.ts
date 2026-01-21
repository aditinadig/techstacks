import { Injectable } from "@nestjs/common"
import { randomUUID } from "crypto"

type PingRow = {
  id: string
  message: string
  starred: boolean
  createdAt: Date
}

@Injectable()
export class PingService {
  private rows: PingRow[] = []

  list() {
    return [...this.rows].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  }

  add(message: string) {
    const row: PingRow = {
      id: randomUUID(),
      message,
      starred: false,
      createdAt: new Date(),
    }
    this.rows.unshift(row)
    return row
  }

  toggleStar(id: string) {
    const row = this.rows.find((r) => r.id === id)
    if (!row) throw new Error("Ping not found")
    row.starred = !row.starred
    return row
  }
}
