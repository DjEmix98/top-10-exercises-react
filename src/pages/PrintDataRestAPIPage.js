import axios from "axios";
import { useState } from "react";

export function PrintDataRestAPI() {
  const [response, setResponse] = useState({
    axiosResponse: null,
    fetchResponse: null,
  });
  const [loading, setLoading] = useState({
    isLoadingFetch: false,
    isLoadingAxios: false,
  });
  const apiFetchProps = {
    responseState: response,
    callingFetch: true,
    setLoading,
    setResponse,
    loadingState: loading,
  };
  const apiAxiosProps = {
    responseState: response,
    callingFetch: false,
    setLoading,
    setResponse,
    loadingState: loading,
  };
  return (
    <>
      <h2 className="mt-5">N 3 - Call HTTP api on click </h2>
      <button onClick={() => callApi(apiFetchProps)}>
        Click here to call api using fetch
      </button>
      <PrintDataResult
        response={response.fetchResponse}
        loading={loading.isLoadingFetch}
      ></PrintDataResult>
      <button onClick={() => callApi(apiAxiosProps)}>
        Click here to call api using axios
      </button>
      <PrintDataResult
        response={response.axiosResponse}
        loading={loading.isLoadingAxios}
      ></PrintDataResult>
    </>
  );
}

function PrintDataResult({ response, loading }) {
  return (
    <>
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

const callApi = ({
  responseState,
  callingFetch,
  setLoading,
  setResponse,
  loadingState,
}) =>
  (async () => {
    //funzione anonima che si autoinvoca
    const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
    setLoading({
      isLoadingFetch: callingFetch || loadingState.isLoadingFetch,
      isLoadingAxios: !callingFetch || loadingState.isLoadingAxios,
    });
    const res = callingFetch ? await fetch(apiUrl) : await axios.get(apiUrl);
    const responseData = callingFetch ? await res.json() : res.data;
    setResponse({
      axiosResponse: callingFetch ? responseState.axiosResponse : responseData,
      fetchResponse: callingFetch ? responseData : responseState.fetchResponse,
    });
    setLoading({
      isLoadingFetch: callingFetch ? false : loadingState.isLoadingFetch,
      isLoadingAxios: callingFetch ? loadingState.isLoadingFetch : false,
    });
  })();
