import { Request, Response } from "express";
import { NoteService } from "../services/noteService";

export const getNotes = async (_req: Request, res: Response) => {
  try {
    const notes = await NoteService.getNotes();
    res.status(200).json(notes);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const getNoteByID = async (req: Request, res: Response) => {
  try {
    const note = await NoteService.getNoteByID(parseInt(req.params.noteID));
    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export const createNote = async (req: Request, res: Response) => {
  console.log("Received POST request!!!:", req.body);
  try {
    const note = await NoteService.createNote(req.body);
    res.status(201).json(note);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
      console.error(error);
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
      console.error(error);
    }
  }
};
