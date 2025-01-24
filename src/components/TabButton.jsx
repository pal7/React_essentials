export default function TabButton({ onSelect, children }) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
