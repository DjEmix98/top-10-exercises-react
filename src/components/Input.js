export function Input(props) {
  const { type, onChange, value, label, name, onFocus, onBlur } = props;
  return (
    <div>
      {label && <label className="text-start w-100">{`${label}:`}</label>}
      <input
        type={type}
        value={value}
        name={name}
        onChange={(event) => handleChange(event, onChange)}
        onFocus={onFocus}
        onBlur={onBlur}
        className="w-100"
      />
    </div>
  );
}

function handleChange(event, onChange) {
  onChange(event.target.value);
}
