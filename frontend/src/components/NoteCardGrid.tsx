import { INote } from "@backend/types";
import NoteCard from "@components/NoteCard";
import "./NoteCardGrid.css";

interface NoteCardGridProps {
  notes: INote[];
}

const NoteCardGrid = (props: NoteCardGridProps) => {
  const { notes } = props;
  return (
    <div className="note-card-grid" data-testid="note-card-grid">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteCardGrid;
