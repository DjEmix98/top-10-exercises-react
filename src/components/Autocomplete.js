import { useState } from "react";
import "../assets/styles/Autocomplete.css";
import { Input } from "./Input";

export function Autocomplete(props) {
  const { value, label, name, items, clickItem } = props;
  const [autocompleteState, setAutocompleteState] = useState({
    elements: items.slice(),
    showContent: false,
    valueInput: "",
  });
  return (
    <div className="autocomplete__container">
      <Input
        type={"text"}
        value={value}
        label={label}
        name={name}
        onChange={(valueChange) =>
          handleOnChange(valueChange, items, setAutocompleteState)
        }
        onFocus={() =>
          handleOnFocus(autocompleteState, items, setAutocompleteState)
        }
        onBlur={() => handleOnBlur(autocompleteState, setAutocompleteState)}
      ></Input>
      {autocompleteState.elements && autocompleteState.showContent && (
        <ul className="autocomplete__content w-100">
          {autocompleteState.elements.map((element) => (
            <li
              className="autocomplete__list text-start"
              key={element.key}
              onClick={() => clickItem(element)}
            >
              {element.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function handleOnChange(valueChange, items, setAutocompleteState) {
  const newItems = items.filter((item) =>
    item.value.toLowerCase().includes(valueChange.toLowerCase())
  );
  setAutocompleteState({
    elements: newItems,
    showContent: newItems.length > 0,
    valueInput: valueChange,
  });
}

function handleOnFocus(state, items, setAutocompleteState) {
  const elements =
    state.valueInput.length === 0 ? items.slice() : state.elements.slice();
  setAutocompleteState({
    ...state,
    elements,
    showContent:
      state.valueInput.length === 0 ||
      (state.valueInput.length > 0 && elements.length > 0),
  });
}

function handleOnBlur(state, setAutocompleteState) {
  setAutocompleteState({ ...state, showContent: false });
}
