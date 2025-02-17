import { queryOptions, useQuery, useQueryErrorResetBoundary } from "@tanstack/react-query";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { queryClient } from "../../main";
import { ErrorComponentProps } from "@tanstack/react-router";
import { useEffect } from "react";
const API_BASE_URL = import.meta.env.VITE_API_URL;
import type { INote } from "@backend-types";

async function fetchNotes(): Promise<INote[]> {
  const response = await fetch(`${API_BASE_URL}/api/notes`);
  console.log({ response });
  return await response.json();
}

const notesQueryOptions = queryOptions({
  queryKey: ["notes"],
  queryFn: fetchNotes,
});

const ErrorComponent = ({ error }: ErrorComponentProps) => {
  const router = useRouter();
  const queryErrorResetBoundary = useQueryErrorResetBoundary();

  useEffect(() => {
    // Reset the query error boundary
    queryErrorResetBoundary.reset();
  }, [queryErrorResetBoundary]);

  return (
    <div>
      {error.message}
      <button
        onClick={() => {
          // Invalidate the route to reload the loader, and reset any router error boundaries
          router.invalidate();
        }}
      >
        retry
      </button>
    </div>
  );
};

export const Route = createFileRoute("/notes/")({
  loader: () => queryClient.ensureQueryData(notesQueryOptions),
  component: RouteComponent,
  errorComponent: ErrorComponent,
});

function RouteComponent() {
  const { data, error, isLoading } = useQuery({ queryKey: ["notes"], queryFn: fetchNotes });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  console.log(data);

  return (
    <div>
      {data.map((note: INote) => (
        <div key={note.id}>{note.title}</div>
      ))}
    </div>
  );
}
