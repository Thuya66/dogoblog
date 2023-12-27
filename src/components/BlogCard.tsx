import { useNavigate } from "react-router-dom";

interface Props {
  blog: any;
}

function BlogCard({ blog }: Props) {
  const nevigate = useNavigate();
  function deleteHandle() {
    fetch("http://localhost:3000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      nevigate("/");
    });
  }
  return (
    <article>
      <h2>{blog.title}</h2>
      <p>Written by {blog.author}</p>
      <div>{blog.body}</div>
      <button onClick={deleteHandle}>Delete</button>
    </article>
  );
}

export default BlogCard;
