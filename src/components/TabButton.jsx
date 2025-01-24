export default function TabButton({ onSelect, isActive, children }) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      <button className={isActive ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
