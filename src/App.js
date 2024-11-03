import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import CatNav from "./Component/CatNav/CatNav";
import MainComponent from "./Component/MainComponent/MainComponent";
import TopNav from "./Component/TopNav/TopNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <MainComponent />
    </div>
  );
}

export default App;
