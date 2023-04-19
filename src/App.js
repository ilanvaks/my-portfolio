import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Portfolio/>
        <Footer/>
        
      </header>
    </div>
  );
}

export default App;
