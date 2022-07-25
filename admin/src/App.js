// global style
import "./index.scss";

// components
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
// pages
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Topbar />

      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
