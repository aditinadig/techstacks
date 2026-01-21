import { Args, Mutation, Query, Resolver } from "@nestjs/graphql"
import { Ping } from "./ping.model"
import { PingService } from "./ping.service"

@Resolver(() => Ping)
export class PingResolver {
  constructor(private readonly pingService: PingService) {}

  @Query(() => [Ping])
  pings() {
    return this.pingService.list()
  }

  @Mutation(() => Ping)
  addPing(@Args("message") message: string) {
    return this.pingService.add(message)
  }

  @Mutation(() => Ping)
  toggleStar(@Args("id") id: string) {
    return this.pingService.toggleStar(id)
  }
}
