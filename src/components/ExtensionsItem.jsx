export default function ExtensionsItem({
  image,
  title,
  info,
  checked,
  removed,
  onCheck,
  onRemove,
}) {
  return (
    <div className={`elements__item ${removed ? "removed" : ""}`}>
      <div className="elements__content content">
        <div className="content__image">
          <img className="elements__picture" src={image} alt={title} />
        </div>
        <div className="content__info">
          <h2 className="elements__title">{title}</h2>
          <p className="elements__info">{info}</p>
        </div>
      </div>
      <div className="elements__mode">
        <button
          className={`button--remove button ${removed ? "removed" : ""}`}
          onClick={onRemove}
        >
          Remove
        </button>
        <button
          className={`button--check check ${checked ? "checked" : ""}`}
          onClick={onCheck}
        >
          <span className={`check--move ${checked ? "checked" : ""}`}></span>
        </button>
      </div>
    </div>
  );
}
