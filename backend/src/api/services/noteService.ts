import { Note } from "../models/Note";

export class NoteService {
  static async getNotes() {
    return await Note.getNotes();
  }

  static async getNoteByID(id: number) {
    return await Note.getNoteByID(id);
  }
}
