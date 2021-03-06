import { BrowserView } from "react-device-detect";

import RenderNav from './Navbar';
import RenderAbout from './About';
import RenderProjects from './Projects';
import RenderExperience from './Experience';
import RenderSchool from './School';
import RenderContact from './Contact';
import RenderFooter from './Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="ViewingArea">
        <h1 className="Name">Trevor J. Yao</h1>
        <BrowserView>
          <RenderNav />
        </BrowserView>
        <div className="Text">
          <RenderAbout />
          <br />
          <RenderExperience />
          <br />
          <RenderProjects />
          <br />
          <RenderSchool />
          <br />
          <RenderContact />
        </div>
      </div>
      <RenderFooter />
    </div>
  );
}

export default App;
