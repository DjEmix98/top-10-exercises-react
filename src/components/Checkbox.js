import { Input } from "../components/Input";

export function Checkbox({ label, id, checkboxChange, isChecked }) {
  return (
    <Input
      type="checkbox"
      onChange={(status) => onChange(status, id, label, checkboxChange)}
      label={label}
      value={isChecked}
    ></Input>
  );
}

function onChange(status, id, label, checkboxChange) {
  checkboxChange({ isChecked: status, id, label });
}
