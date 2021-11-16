// import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Bio from './components/bio'
import Resume from './components/resume'
import Projects from './components/projects'
import data from './data/projectlist.json'

// var dataStr = JSON.stringify(data);
// var myProjects = JSON.parse(dataStr);

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <Bio/>
      <Resume/>
      <Projects items={data}/>


    </div>
  );
}

export default App;
