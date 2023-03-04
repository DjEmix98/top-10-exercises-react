import { useState } from "react";

export function PrintDataRestAPI() {
  const [response, setResponse] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const callApi = () =>
    (async () => {
      //funzione anonima che si autoinvoca
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      setResponse(await res.json());
      setLoading(false);
    })();
  return (
    <>
      <h2 className="mt-5">N 3 - Call HTTP api on click </h2>
      <button onClick={() => callApi()}>Click here to call api</button>
      <p>Values taken from API:</p>
      {loading ? (
        <p>Loading data from api...</p>
      ) : (
        response &&
        Object.keys(response).map((key) => (
          <p key={key}>{`${key}: ${String(response[key])}`}</p>
        ))
      )}
    </>
  );
}
