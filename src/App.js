import logo from "./logo.svg";
import "./App.css";
import { Blog } from "./Components/Blog";
import { Main } from "./Layout/Main";

function App() {
  return (
    <div className="App">
      <Main>
        <Blog />
      </Main>
    </div>
  );
}

export default App;
