import Lower from "./components/Lower";
import MadeWithLove from "./components/MadeWithLove";
import Upper from "./components/Upper";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "AlgoZenith";
  }, []);

  return (
    <div className="scroll-smooth">
      <Upper />
      <Lower />
      <MadeWithLove />
    </div>
  );
}

export default App;
