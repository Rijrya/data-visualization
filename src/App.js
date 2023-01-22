import ScatterPlotWithLines from "./ScatterPlotWithLines";
import "./App.css";

const data = [
    { x: 0, y: 20, values: [{x: 0, y: 20}, {x: 1, y: 30}] },
  { x: 1, y: 30, values: [{x: 1, y: 30}, {x: 2, y: 40}] },
  { x: 2, y: 40, values: [{x: 2, y: 40}, {x: 3, y: 50}] },
  { x: 3, y: 50, values: [{x: 3, y: 50}, {x: 4, y: 60}] },
  ];
  
  function App() {
  return (
  <div className="App">
  <ScatterPlotWithLines data={data} />
  </div>
  );
  }
  
export default App;
