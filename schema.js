import path from "path";
import { fileURLToPath } from "url";
import { loadFiles } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resolverList = await loadFiles(
  path.join(__dirname, "/**/*.resolvers.js")
);
const typeDefList = await loadFiles(path.join(__dirname, "/**/*.typeDefs.js"));

export const resolvers = mergeResolvers(resolverList);
export const typeDefs = mergeTypeDefs(typeDefList);
