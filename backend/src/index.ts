const cors = require("cors");
const express = require("express");
const app = express();
import { Request, Response } from "express";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import { NotesTable } from "./db/schema";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const note: typeof NotesTable.$inferInsert = {
    title: "John Doe",
    content: "Hello, World!",
    dateCreated: new Date(),
    dateModified: new Date(),
  };
  await db.insert(NotesTable).values(note);
  console.log("New user created!");
  const users = await db.select().from(NotesTable);
  console.log("Getting all users from the database: ", users);
  /*
  const users: {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
  */
  await db
    .update(NotesTable)
    .set({
      title: "Jane Doe",
    })
    .where(eq(NotesTable.title, "John Doe"));
  console.log("User info updated!");
  // await db.delete(NotesTable).where(eq(NotesTable.email, user.email));
  // console.log("User deleted!");
}
main();

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.get("/api/sample", (req: Request, res: Response) => {
  res.json({ message: "This is a CORS-enabled response with specific origins." });
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
