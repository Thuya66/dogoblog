import { useEffect, useState } from "react";

function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Can't connect to db server");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((e) => {
        if (e.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setIsPending(false);
          setError(e);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;
