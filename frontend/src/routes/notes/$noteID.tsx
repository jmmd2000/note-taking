import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/notes/$noteID")({
  component: RouteComponent,
});

function RouteComponent() {
  const { noteID } = Route.useParams();
  return <div>{noteID && `NoteID: ${noteID}`}</div>;
}
