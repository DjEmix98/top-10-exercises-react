import { dictionary } from "../data/dictionaryToFilterSearch";
import { Autocomplete } from "../components/Autocomplete";
import { useState } from "react";
export function FilterSearch() {
  const [state, setState] = useState({
    result: "",
    autocompleteText: "",
  });
  const testOutputAutocomplete = (item) =>
    setState({ result: item.value, autocompleteText: item.value });
  const valueChange = (valChange) =>
    setState({ ...state, autocompleteText: valChange });
  return (
    <section>
      <h2 className="mt-4 mb-4">N 10 - Filter search</h2>
      <p>Re-built it creating autocomplete component</p>
      <Autocomplete
        label={"label"}
        items={dictionary}
        value={state.autocompleteText}
        onChange={valueChange}
        clickItem={testOutputAutocomplete}
      ></Autocomplete>
    </section>
  );
}
