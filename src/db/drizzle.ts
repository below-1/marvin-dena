import { config } from "dotenv";
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from "./schema";

config({ path: ".env" }); // or .env.local

console.log(process.env.DATABASE_URL)
console.log('process.env.DATABASE_URL')

export const db = drizzle(process.env.DATABASE_URL!, {
  schema
});
