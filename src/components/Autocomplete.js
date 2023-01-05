import { useState } from "react";
import "../assets/styles/Autocomplete.css";
import { useDetectClickOutside } from "../hooks/useDetectClickOutside";
import { Input } from "./Input";
/**
 * 
 * @param value for prevalorization input
 * @param label for label input
 * @param name for name attribute input
 * @param items items autocomplete
 * @callback clickItem to handle item selected
 * @example <Autocomplete value={value} label={label} name={name} clickItems={doSomething}></Autocomplete>
 * @returns return jsx Autocomplete element
 */
export function Autocomplete(props) {
  const { value, label, name, items, clickItem } = props;
  const [autocompleteState, setAutocompleteState] = useState({
    elements: items.slice(),
    showContent: false,
    valueInput: "",
  });
  const ui = renderUI({
    value,
    label,
    name,
    clickItem,
    items,
    autocompleteState,
    setAutocompleteState,
  });
  const detectClick = useDetectClickOutside({
    children: ui,
    handleOutside: () => handleOnClickOutside(autocompleteState, setAutocompleteState),
  });
  return detectClick;
}

function renderUI(props) {
  return (
    <div className="autocomplete__container">
      <Input
        type={"text"}
        value={props.value}
        label={props.label}
        name={props.name}
        onChange={(valueChange) =>
          handleOnChange(valueChange, props.items, props.setAutocompleteState)
        }
        onFocus={() =>
          handleOnFocus(
            props.autocompleteState,
            props.items,
            props.setAutocompleteState
          )
        }
      ></Input>
      {props.autocompleteState.elements && props.autocompleteState.showContent && (
        <ul className="autocomplete__content w-100">
          {props.autocompleteState.elements.map((element) => (
            <li
              className="autocomplete__list text-start"
              key={element.key}
              onClick={() =>
                handleClickListItem({
                  element,
                  state: props.autocompleteState,
                  setAutocompleteState: props.setAutocompleteState,
                  clickItem: props.clickItem,
                })
              }
            >
              {element.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function handleClickListItem(props) {
  props.clickItem(props.element);
  props.setAutocompleteState({ ...props.state, showContent: false });
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

function handleOnClickOutside(state, setAutocompleteState) {
  setAutocompleteState({ ...state, showContent: false });
}
