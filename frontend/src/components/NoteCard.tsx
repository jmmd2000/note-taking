import { INote } from "@backend/types";
import "./NoteCard.css";
import { Link } from "@tanstack/react-router";

interface NoteCardProps {
  note: INote;
}

const NoteCard = (props: NoteCardProps) => {
  const { note } = props;
  const urlPath = `/notes/${note.id.toString()}`;
  return (
    <Link to={urlPath} data-testid="note-card">
      <div className="note-card">
        <h3>{note.title}</h3>
        <p>{note.content}</p>
      </div>
    </Link>
  );
};

export default NoteCard;
