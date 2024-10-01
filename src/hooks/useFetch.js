import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Bad Request!");
        }

        const data = await response.json();
        setItems(data.recipes);
        setTotal(data.total);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { items, total, isLoading, error };
};

export default useFetch;
