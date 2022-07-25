// global style
import "./index.scss";

// components
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Topbar />

      <div className="container">
        <Sidebar />
        <div className="other">other pages </div>
      </div>
    </>
  );
}

export default App;
