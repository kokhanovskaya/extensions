export default function FilterButtons({ filter, setFilter }) {
  const buttons = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  return (
    <div className="extensions-list__buttons">
      {buttons.map((btn) => (
        <button
          key={btn.value}
          onClick={() => setFilter(btn.value)}
          className={`extensions-list__button button ${
            filter === btn.value ? "selected" : ""
          } ${btn.value}`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
