import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
const blog = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  body: z.string(),
});
export type Blog = z.infer<typeof blog>;
interface Props {
  blog: Blog;
}

function BlogCard({ blog }: Props) {
  const { t } = useTranslation();
  const nevigate = useNavigate();
  function deleteHandle() {
    fetch('http://192.168.1.20:3000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      nevigate('/');
    });
  }
  return (
    <article>
      <h2>{blog.title}</h2>
      <p>
        {t('author')} {blog.author}
      </p>
      <div>{blog.body}</div>
      <button onClick={deleteHandle}>Delete</button>
    </article>
  );
}

export default BlogCard;
