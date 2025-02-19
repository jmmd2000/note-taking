import { INote } from "@backend/types";
import "./NoteCard.css";

interface NoteCardProps {
  note: INote;
}

const NoteCard = (props: NoteCardProps) => {
  const { note } = props;
  return (
    <div className="note-card">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteCard;
