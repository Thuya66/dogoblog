import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Net.Ninja');
  const [isPending, setIsPending] = useState(false);
  const nevigate = useNavigate();

  function handleSubmit(e: any) {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, body, author };

    fetch('http://192.168.1.20:3000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      nevigate('/');
    });
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <label>Blog body:</label>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          required
        />
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Net.Ninja">Net.Ninja</option>
          <option value="EiMaung">EiMaung</option>
        </select>
        {isPending || <button>Add Blog</button>}
        {isPending && <button>Adding...</button>}
      </form>
    </div>
  );
}

export default CreateBlog;
