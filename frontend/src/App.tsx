// src/index.js or src/App.js
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface Sample {
  message: string;
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>React Query Example</h1>
          <SampleComponent />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;

// src/hooks/useAlbums.js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSample = async (): Promise<Sample> => {
  const { data } = await axios.get<Sample>("http://localhost:4000/api/sample");
  return data;
};

function useSample() {
  return useQuery<Sample, Error>({ queryKey: ["sample"], queryFn: fetchSample });
}

// src/components/AlbumList.js

function SampleComponent() {
  const { data, error, isLoading } = useSample();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <p>Received message: {data?.message}</p>
    </div>
  );
}
