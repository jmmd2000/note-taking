import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import noteRoutes from "./api/routes/noteRoutes";

// import { Request, Response } from "express";
// import "dotenv/config";
// import { drizzle } from "drizzle-orm/node-postgres";
// import { eq } from "drizzle-orm";
// import { NotesTable } from "./db/schema";

// const db = drizzle(process.env.DATABASE_URL!);

// async function main() {
//   const note: typeof NotesTable.$inferInsert = {
//     title: "John Doe",
//     content: "Hello, World!",
//     dateCreated: new Date(),
//     dateModified: new Date(),
//   };
//   await db.insert(NotesTable).values(note);
//   console.log("New user created!");
//   const users = await db.select().from(NotesTable);
//   console.log("Getting all users from the database: ", users);
//   /*
//   const users: {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//   }[]
//   */
//   await db
//     .update(NotesTable)
//     .set({
//       title: "Jane Doe",
//     })
//     .where(eq(NotesTable.title, "John Doe"));
//   console.log("User info updated!");
//   // await db.delete(NotesTable).where(eq(NotesTable.email, user.email));
//   // console.log("User deleted!");
// }
// main();

export const app = express();

dotenv.config(); // ✅ Load environment variables

const corsOptions = {
  // origin: process.env.CLIENT_ORIGIN || "http://localhost:5173", // allow dynamic frontend origin
  origin: ["http://localhost:8080", "http://localhost:5173"], // allow dynamic frontend origin
  credentials: true, // allow cookies and authentication
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/notes", noteRoutes);

app.listen(4000, "0.0.0.0", () => {
  console.log("Server is running on port 4000");
});
