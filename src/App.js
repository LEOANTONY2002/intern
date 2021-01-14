import "./App.css";
import Header from "./Header";
import Images from "./Images";
import Photo from "./Photo";

function App() {
  return (
    <div className="App">
      <div className="left">
        <Header />
        <Images />
      </div>
      <Photo />
      <p>
        Height- 1.79m  |  Weight- 54kg  |  Age- 25  |  Hair color -blonde  |  Eye- blue
        - green
      </p>
    </div>
  );
}

export default App;
