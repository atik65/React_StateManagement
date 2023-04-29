import { useQuery } from "react-query";
import "./App.css";
import axios from "axios";

function App5() {
  const { data, isLoading, error, isError } = useQuery(
    "posts",
    async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      return res.data;
    },
    {
      // refetchOnWindowFocus: false,
      staleTime: 5000,
      cacheTime: 5000,
      retry: 3,
      retryDelay: 1000,
      onError: (err) => {
        console.log(err);
      },
      onSuccess: (data) => {
        // console.log(data);
      },
      onSettled: (data, err) => {
        console.log(data, err);
      },
    }
  );

  console.log(data);
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1> {error.message} </h1>;
  return (
    <>
      <h1>Vite + React (React Query)</h1>
      <div className="card">
        <ul>
          {data?.map((post) => {
            return <li key={post.id}> {post.title} </li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App5;
