import { useParams } from "react-router-dom";
import useFetch from "../fetch/useFetch";
import BlogCard from "../components/BlogCard";

function BlogDetails() {
  const { id } = useParams();
  const url: string = `http://localhost:3000/blogs/${id}`;
  const { data: blog, isPending, error } = useFetch(url);

  return (
    <div className="blog-details">
      {error && <h2>Error</h2>}
      {isPending && <h2>Loading</h2>}
      {blog && <BlogCard blog={blog} />}
    </div>
  );
}

export default BlogDetails;
