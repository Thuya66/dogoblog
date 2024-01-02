import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  blogs: Object[];
}

function BlogList({ title, blogs }: Props) {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog: any) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>
              {t('author')} {blog.author}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
