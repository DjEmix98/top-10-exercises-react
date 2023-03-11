import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Input } from "../components/Input";

export function RouterWithParams() {
  const { param } = useParams();
  const [link, setLink] = useState("");
  const noParamFound = "No param found";
  const label = "Insert your param";
  const inputChange = (valueChanged) => setLink(`${valueChanged}`);
  return (
    <>
      <h2>N 2 - Page with optional param</h2>
      <h3>Put here your optional param (special characters not allowed)</h3>
      <Input label={label} onChange={inputChange} />
      <p>your param is: {param || noParamFound}</p>
      <Link to={`/page-with-param/${link}`}>Navigate putting your param</Link>
    </>
  );
}
