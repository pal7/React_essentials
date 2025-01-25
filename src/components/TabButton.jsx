export default function TabButton({ isActive, children, ...props }) {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      <button className={isActive ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
