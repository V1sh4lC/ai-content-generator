import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import * as schema from './schema'

// const sql = ;
// console.log(typeof(sql))
export const db = drizzle(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!, { schema });