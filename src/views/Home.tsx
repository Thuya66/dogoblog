import useFetch from "../fetch/useFetch";
import BlogList from "../components/BlogList";

function Home() {
  const url: string = "http://localhost:3000/blogs";
  const { data: blogs, isPending, error } = useFetch(url);

  return (
    <div className="home">
      {error && <h2>Error</h2>}
      {isPending && <h2>Loading</h2>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
}

export default Home;
