import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config(); // ✅ Load environment variables

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // ✅ Always use DATABASE_URL (no test DB swap)
});

export const query = (text: string, params?: any[]) => pool.query(text, params);

export default pool;
