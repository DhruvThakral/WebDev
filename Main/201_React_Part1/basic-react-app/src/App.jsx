import "./App.css";

// import kr lo Title.jsx ko
import Title from "./Title.jsx";


function Description(){
  return <h1>I am a Description.</h1>;
}

function App(){
  return (
    <div className="mainbox">
      <Title/>
      <Description/>
    </div>
  );
}

export default App;