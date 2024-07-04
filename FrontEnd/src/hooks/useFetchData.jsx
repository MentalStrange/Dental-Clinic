/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import { authContext } from "../context/authContext";

function useFetchData(initialUrl) {
  const { token } = useContext(authContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { authorization: `Bearer ${token}` },
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
      setData(result.data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url, token]);

  return {
    data,
    loading,
    error,
    fetchData: (newUrl) => setUrl(newUrl),
  };
}

export default useFetchData;
