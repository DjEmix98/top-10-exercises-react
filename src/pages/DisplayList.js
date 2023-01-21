import "../assets/styles/DisplayList.css";
export function DisplayList() {
  return (
    <>
      <h2 className="mt-4 mb-4">N 8 - Display list</h2>
      <div className="display-list__container">
        {list.map((item, index) => (
          <article key={index} className="display-list__articles-content">
            <h2 className="display-list__title">{item.title}</h2>
            <p className="display-list__description">{item.description}</p>
          </article>
        ))}
      </div>
    </>
  );
}

const list = [
  {
    title: "My new website",
    description: "Writen by Mario",
  },
  {
    title: "Welcome party",
    description: "Writen by yoshi",
  },
  {
    title: "Web dev top tips",
    description: "Writen by Mario",
  },
];
