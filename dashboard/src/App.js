import "./assets/App.css";
import "./assets/styles.css";

import MainContent from "./components/MainContent";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div id="wrapper">
      <SideBar />

      <MainContent />
    </div>
  );
}

export default App;
