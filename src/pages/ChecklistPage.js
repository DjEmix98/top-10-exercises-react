import { checklistItem } from "../data/checklistItem";
import { useState } from "react";
import { Checkbox } from "../components/Checkbox";

export function ChecklistPage() {
  const [checklist, setChecklist] = useState(checklistItem);
  const checklistChange = (item) => {
    const newChecklistState = [
      ...checklist.filter((checkItem) => checkItem.id !== item.id),
      item,
    ].sort((a, b) => a.id - b.id);

    setChecklist(newChecklistState);
    console.log(item);
  };
  return (
    <>
      <h2 className="mb-5 mt-4">N 5 - Check list</h2>
      {checklist.map((item, index) => (
        <div key={index}>
          <h2>
            {item.label?.substring(0, item.label.length - 1)}:
            {item.isChecked ? "Yes" : "No"}
          </h2>
          <Checkbox
            label={item.label}
            checkboxChange={checklistChange}
            id={item.id}
            isChecked={item.isChecked}
          ></Checkbox>
        </div>
      ))}
    </>
  );
}
