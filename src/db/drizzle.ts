import { config } from "dotenv";
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from "./schema";

config({ path: ".env" }); // or .env.local

console.log(process.env.DATABASE_URL)
console.log('process.env.DATABASE_URL')

export const db = drizzle({ connection: {
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_TOKEN!,
}});
