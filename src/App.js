import logo from "./logo.svg";
import "./App.css";
import And from "./components/And";
import Style from "./components/Style";

function App() {
  const react = "리액트";
  return (
    <div>
      {/* {react === "리액트" ? (<h1>리액트입니다</h1>) : (<h1>리액트가 아닙니다</h1>)} */}
      <And />
      <Style />
    </div>
  );
}

export default App;
