import { Field, ObjectType, ID } from "@nestjs/graphql"

@ObjectType()
export class Ping {
  @Field(() => ID) id: string
  @Field() message: string
  @Field() starred: boolean
  @Field() createdAt: Date
}
