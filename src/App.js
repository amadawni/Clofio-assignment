import logo from "./logo.svg";
import "./App.css";
import Buckettable from "./components/Buckettable";
import Approvaltable from "./components/Approvaltable";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import cuboid from "./asset/cuboid.png";
function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          // flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="leftContainer">
          <img src={cuboid} alt="" srcset="" />
          <img src={cuboid} alt="" srcset="" />
          <img src={cuboid} alt="" srcset="" />
          <img src={cuboid} alt="" srcset="" />
          <img src={cuboid} alt="" srcset="" />
          <img src={cuboid} alt="" srcset="" />
        </div>
        {/* <div class="vertical-line"></div> */}
        <div style={{ marginLeft: "10%" }}>
          <Navbar />
          <div className="card-container">
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
          </div>
          <Buckettable />
          <Approvaltable />
          <Buckettable />
        </div>
      </div>
    </>
  );
}

export default App;
