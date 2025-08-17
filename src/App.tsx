import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Overview from "./pages/who-we-are/Overview";
import Background from "./pages/who-we-are/Background";
import OrganizationalStructure from "./pages/who-we-are/OrganizationalStructure";
import Education from "./pages/what-we-do/Education";
import SchoolConstruction from "./pages/what-we-do/SchoolConstruction";
import AgriculturalIrrigation from "./pages/what-we-do/AgriculturalIrrigation";
import WaterSanitation from "./pages/what-we-do/WaterSanitation";
import WomenEmpowerment from "./pages/what-we-do/WomenEmpowerment";
import Health from "./pages/what-we-do/Health";
import Nutrition from "./pages/what-we-do/Nutrition";
import ClimateChange from "./pages/what-we-do/ClimateChange";
import WhereWeWork from "./pages/WhereWeWork";
import Partnerships from "./pages/Partnerships";
import Media from "./pages/Media";
import Donate from "./pages/Donate";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are/overview" element={<Overview />} />
            <Route path="/who-we-are/background" element={<Background />} />
            <Route
              path="/who-we-are/structure"
              element={<OrganizationalStructure />}
            />
            <Route path="/what-we-do/education" element={<Education />} />
            <Route
              path="/what-we-do/school-construction"
              element={<SchoolConstruction />}
            />
            <Route
              path="/what-we-do/agricultural-irrigation"
              element={<AgriculturalIrrigation />}
            />
            <Route
              path="/what-we-do/water-sanitation"
              element={<WaterSanitation />}
            />
            <Route
              path="/what-we-do/women-empowerment"
              element={<WomenEmpowerment />}
            />
            <Route path="/what-we-do/health" element={<Health />} />
            <Route path="/what-we-do/nutrition" element={<Nutrition />} />
            <Route
              path="/what-we-do/climate-change"
              element={<ClimateChange />}
            />
            <Route path="/where-we-work" element={<WhereWeWork />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/media" element={<Media />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
