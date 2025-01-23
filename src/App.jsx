import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";

function App() {
  function handleSelect(selectedTab) {
    // selectedTab = "props, comp, jsx, state";
    console.log(selectedTab);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept
              image={CORE_CONCEPTS[2].image}
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
            />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("props")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("state")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("comp")}>
              Components
            </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
