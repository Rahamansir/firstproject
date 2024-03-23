import logo from './logo.svg';
import './App.css';

function App() {
  return <div>
    <h1>users:</h1>

    <user/>
    <user/>
    <user/>
  </div>
}

export default App;

function user(props) {
  return <div className="user">
    <h3>{props.name}</h3>
    <p>job:{props.job}</p>
    <p>location:{props.location}</p>

    
  </div>
}