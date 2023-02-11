export function Input({ type, onChange, value, label, name, onFocus, onBlur }) {
  return (
    <div>
      {label && <label className="text-start w-100">{`${label}:`}</label>}
      <input
        type={type}
        value={value}
        name={name}
        onChange={(event) => handleChange(event, onChange, type)}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-100"
        checked={value ?? false}
      />
    </div>
  );
}

function handleChange(event, onChange, type) {
 type === "checkbox" ? onChange(event.target.checked) : onChange(event.target.value);
}
