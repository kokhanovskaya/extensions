import ExtensionsItem from "./ExtensionsItem";

export default function ExtensionsList({ items, onCheck, onRemove }) {
  return (
    <div className="elements">
      {items.map((ext) => (
        <ExtensionsItem
          key={ext.id}
          image={ext.image}
          title={ext.title}
          info={ext.info}
          checked={ext.checked}
          removed={ext.removed}
          onCheck={() => onCheck(ext.id)}
          onRemove={() => onRemove(ext.id)}
        />
      ))}
    </div>
  );
}
