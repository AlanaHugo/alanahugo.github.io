import "./App.css";
import BannerComponent from "./components/Banner/Banner.jsx";
import Career from "./components/Career/Career.jsx";
import Projects from "./components/Projects_Contact/Projects_contact.jsx";
import Skills from "./components/Skills/Skills.jsx";
import DeveloperSummary from "./components/Summary/Summary.jsx";


function App() {
  return (
    <>
      <div className="backgroundDiv">
        <div className="bodyDiv">
          <BannerComponent />
          <DeveloperSummary />
          <Skills />
          <Projects />
          <Career />
        </div>
      </div>
    </>
  );
}

export default App;
