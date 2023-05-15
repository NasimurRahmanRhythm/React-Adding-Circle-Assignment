import "./App.css";
import Header from "./Header.js";
import Button from "./Button.js";

function App() {
  var target = Math.floor(Math.random() * 26) + 25;
  return (
    <div>
      <Header target={target} />
      <Button target={target} />
    </div>
  );
}

export default App;
