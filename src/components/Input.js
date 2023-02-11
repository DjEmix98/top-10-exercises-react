export function Input({ type, onChange, value, label, name, onFocus, onBlur }) {
  return (
    <div>
      {label && (
        <label
          className={type !== "checkbox" ? "w-100 text-start" : "text-start"}
        >{`${label}:`}</label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        onChange={(event) => handleChange(event, onChange, type)}
        onFocus={onFocus}
        onBlur={onBlur}
        className={type !== "checkbox" ? "w-100" : ""}
        checked={value ?? false}
      />
    </div>
  );
}

function handleChange(event, onChange, type) {
  type === "checkbox"
    ? onChange(event.target.checked)
    : onChange(event.target.value);
}
