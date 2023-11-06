import logo from './logo.svg';
import './App.css';

function App() { //jsx
  return (
    <div className="App">
<SampleComponent title="sample prop tilte" hello="world"/>
    </div>
  );
}
const SampleComponent = (props) => {
  return(
    <div>
    <h1>{props.title} , {props.hello}</h1>
    </div>
  );
}


export default App;
