import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import { NotesTable } from "../../db/schema";
import "dotenv/config";
import { INote } from "../../../types";

const db = drizzle(process.env.DATABASE_URL!);

export class Note {
  static async getNotes() {
    const notes: INote[] = await db.select().from(NotesTable).execute();
    console.log({ notes });
    return notes;
  }

  static async getNoteByID(id: number) {
    const note: INote | undefined = await db
      .select()
      .from(NotesTable)
      .where(eq(NotesTable.id, id))
      .execute()
      .then((results) => results[0]);
    console.log({ note });
    return note;
  }
}
