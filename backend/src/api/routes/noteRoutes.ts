import express from "express";
import * as noteController from "../controllers/noteController";

const router = express.Router();

router.get("/", noteController.getNotes);
router.post("/", noteController.createNote);
router.get("/:noteID", noteController.getNoteByID);

export default router;
