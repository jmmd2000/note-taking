import { INote } from "../../../types";
import { Note } from "../models/Note";

export class NoteService {
  static async getNotes() {
    return await Note.getNotes();
  }

  static async getNoteByID(id: number) {
    return await Note.getNoteByID(id);
  }

  static async createNote(note: INote) {
    console.log("Received POST request service:", note);
    return await Note.createNote(note);
  }
}
