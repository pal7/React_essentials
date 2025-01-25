import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedTab) {
    // selectedTab = "props, comp, jsx, state";  tabs
    setSelectedTopic(selectedTab);
    console.log(selectedTab);
    console.log("state:", selectedTopic); //state value will update after the component funcion reexecutes
  }

  let tabContent = !selectedTopic ? (
    <p>Please select a tab</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isActive={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isActive={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              jsx
            </TabButton>
            <TabButton
              isActive={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              props
            </TabButton>
            <TabButton
              isActive={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              state
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
