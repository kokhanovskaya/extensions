import "../src/components/styles/style.css";
import Header from "./components/Header";
import ExtensionsList from "./components/ExtensionsList";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import { extensions as extensionsData } from "./components/extensionsData";

function App() {
  const [theme, setTheme] = useState("dark");
  const [filter, setFilter] = useState("all");
  const [extensions, setExtensions] = useState(extensionsData);

  const switchTheme = () => {
    setTheme((cur) => (cur === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleCheck = (id) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, checked: !ext.checked } : ext
      )
    );
  };

  const handleRemove = (id) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, removed: !ext.removed } : ext
      )
    );
  };

  const filteredItems = extensions.filter((item) => {
    if (item.removed) return false;
    if (filter === "active") return item.checked;
    if (filter === "inactive") return !item.checked;
    return true;
  });

  return (
    <>
      <Header onToggleTheme={switchTheme} theme={theme} />
      <Button filter={filter} setFilter={setFilter} />
      <ExtensionsList
        items={filteredItems}
        onCheck={handleCheck}
        onRemove={handleRemove}
      />
    </>
  );
}

export default App;
