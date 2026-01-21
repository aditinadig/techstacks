import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { AppResolver } from "./app.resolver"; // Ensure the file exists and is correctly named
import { ConfigModule } from "@nestjs/config"
import { PingModule } from "./ping/ping.module"


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      playground: true,
    }),
    PingModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}

