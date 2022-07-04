import { useState, useEffect } from "react";

export const useAsync = (someFunction, dependency = []) => {
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    someFunction()
      .then((resp) => {
        setData(resp);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, dependency);

  return { error, data, loading };
};
