import { Link } from "react-router-dom";

interface Props {
  title: String;
  blogs: Object[];
}

function BlogList({ title, blogs }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog: any) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Witten by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
