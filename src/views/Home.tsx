import useFetch from '../fetch/useFetch';
import BlogList from '../components/BlogList';
import { t } from 'i18next';

function Home() {
  const url: string = 'http://192.168.1.20:3000/blogs';
  const { data: blogs, isPending, error } = useFetch(url);

  return (
    <div className="home">
      {error && <h2>Error</h2>}
      {isPending && <h2>Loading</h2>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}

export default Home;
