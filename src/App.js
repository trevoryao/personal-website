// import logo from './logo.svg';
import RenderNav from './Navbar';
import RenderAbout from './About';
import RenderProjects from './Projects';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="Name">Trevor J. Yao</h1>
      <RenderNav />
      <div className="Text">
        <RenderAbout />
        <RenderProjects />
      </div>
    </div>
  );
}

export default App;
