import type { APIGatewayEvent, Context as LambdaContext } from "aws-lambda"
import { ApolloServer } from "apollo-server-lambda"
import { models } from "./models"
import { schema } from "./schema"
import { dataSources } from "./sources"
import { playground } from "./playground"

export type Context = {
  headers: APIGatewayEvent["headers"]
  functionName: LambdaContext["functionName"]
  event: APIGatewayEvent
  context: LambdaContext
  language?: string
  models: typeof models
  v4apiKey?: string
  v3apiKey?: string
}

export const server = new ApolloServer({
  schema,
  context: ({
    event,
    context
  }: {
    event: APIGatewayEvent
    context: LambdaContext
  }): Context => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
    models
  }),
  dataSources,
  formatError: (err: Error) => {
    // eslint-disable-next-line no-console
    console.error(err)
    return err
  },
  introspection: true,
  tracing: true,
  cacheControl: true,
  apollo: {
    graphVariant: process.env.APOLLO_GRAPH_VARIANT
  },
  plugins: [],
  playground
})
