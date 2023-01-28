import { Accordion } from "../components/Accordion";

export function AccordionPage() {
  return (
    <div className="mt-4">
      <h2 className="mb-5">N 7 - Accordion</h2>
      <Accordion items={items}></Accordion>
    </div>
  );
}

const items = [
  {
    title: "test 1",
    id: 1,
    content: <p>Test 1</p>,
  },
  {
    title: "test 2",
    id: 2,
    content: <p>Test 2</p>,
  },
  {
    title: "test 3",
    id: 3,
    content: <p>Test 3</p>,
  },
];
