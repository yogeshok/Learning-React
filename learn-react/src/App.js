import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Section from './Section';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Learning React" />
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Section />
        </a>
      </header>
    </div>
  );
}

export default App;
