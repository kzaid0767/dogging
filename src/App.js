import logo from './logo.svg';
import dogpic from './dog.jpg'
import './App.css';
import Dog from './Dog';


function App() {
  return (
    <div className="App">
      <Dog />
      <img src={dogpic}/>
    </div>
  );
}

export default App;
