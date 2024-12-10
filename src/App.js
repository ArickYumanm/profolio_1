import "./App.css";
import { Copy } from "./Home/Main/Copy";
import { Home } from "./Home/Main/Home";

import Navbar from "./Home/Navbar/top";

function App() {
  return (
    <div className="App">
      {window.location.pathname === "/" ? <Home /> : null}
      {window.location.pathname === "/Copy" ? <Copy /> : null}
    </div>
  );
}

export default App;
