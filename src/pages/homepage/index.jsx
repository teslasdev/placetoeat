import Navbar from "../../components/navbar";
import "./style.css";
import { useNavigate } from "react-router";
const Home = ({ input, onInputChange }) => {
  const navigate = useNavigate();
  function gotoResponsePage() {
    navigate("/response");
  }
  return (
    <div className="home-body-container">
      <div className="overlay">
        <Navbar className={"blog-btn"} logo={"logo"} />
        <div className="home-content">
          <div className="headline-text">Discover New Places To Eat</div>
          <div className="headline-text2">AI-Powered Restaurant Finder</div>
          <form action="">
            <div className="search-container">
              <input
                type="text"
                value={input}
                onChange={onInputChange}
                placeholder="Where to?"
              />
              <button className="let-eat" onClick={gotoResponsePage}>
                Let’s eat!
              </button>
            </div>
          </form>
          <div className="filter-main">
            <div className="filter-box">
              <input type="checkbox" className="checkbox" />
              <div className="food-pref">Food Preferences</div>
            </div>
            <div className="filter-box">
              <input type="checkbox" className="checkbox" />
              <div className="food-pref">Other Options</div>
            </div>
          </div>
          <div className="recent">Recent Searches</div>
          <div className="location-list">
            <marquee behavior="scroll" direction="left">
              Philadelphia, Lagos, Mykonos, South of Spain, Empanadas in San
              Diego
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
