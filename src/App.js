import Header from './components/Header';
import Photocase from './components/Photocase';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
    <Header className="hheader"/>
    <Welcome className="welcome"/>
    <Photocase/>
    </div>
  );
}

export default App;
