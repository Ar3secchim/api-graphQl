import "reflect-metadata";

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { CategoriesResolver } from "./resolvers/categories-resolver.js";
import { CursesResolver } from "./resolvers/curses-resolver.js";

async function main() {
  const currentDir = dirname(fileURLToPath(import.meta.url));

  const schema = await buildSchema({
    resolvers: [
      CategoriesResolver,
      CursesResolver
    ],
    emitSchemaFile: resolve(currentDir, "schema.gql"),
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen({ port: 4000 });
  console.log(`Server ready at ${url}`);
}

await main();
