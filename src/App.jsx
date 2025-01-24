import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { EXAMPLES, CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  console.log("APP COMPONENT EXECUTING");
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedTab) {
    // selectedTab = "props, comp, jsx, state";  tabs
    setSelectedTopic(selectedTab);
    console.log(selectedTab);
    console.log("state:", selectedTopic); //state value will update after the component funcion reexecutes
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isActive={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isActive={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              jsx
            </TabButton>
            <TabButton
              isActive={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              props
            </TabButton>
            <TabButton
              isActive={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              state
            </TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a tab</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
