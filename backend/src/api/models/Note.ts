import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import { NotesTable } from "../../db/schema";
import "dotenv/config";
import { INote } from "../../../types";

const db = drizzle(process.env.DATABASE_URL!);

export class Note {
  static async getNotes() {
    const notes: INote[] = await db.select().from(NotesTable);
    console.log({ notes });
    return notes;
  }

  static async getNoteByID(id: number) {
    const note: INote | undefined = await db
      .select()
      .from(NotesTable)
      .where(eq(NotesTable.id, id))
      .then((results) => results[0]);
    console.log({ note });
    return note;
  }

  static async createNote(note: INote) {
    console.log("Received POST request model:", note);
    const newNote: INote = (
      await db
        .insert(NotesTable)
        .values({
          title: note.title,
          content: note.content,
          dateCreated: new Date(note.dateCreated),
          dateModified: new Date(note.dateModified),
        })
        .returning()
    )[0];
    console.log({ newNote });
    console.log("New note created!");
    return newNote;
  }
}
