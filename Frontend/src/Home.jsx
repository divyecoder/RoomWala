import './stylesheets/Home.css';

import { NavLink } from 'react-router-dom';
const App = () => {

  return (
    <div>
      <div className="nav_bar">
        <div className="left">
          <NavLink to="/">
            <img src="logo\logo.png" width="15%"></img>
          </NavLink>
        </div>
        <div className="right">
          <div className="search">
            <input className="input" type="text" size="90"></input>
              <button className="button">Search</button>
          </div>
          <img className="nav" src="images\contact us.png"></img>
            <img className="nav" src="images\login.png"></img>
              <img className="nav" src="images\menu1.png"></img>
              </div>
            </div>

            <div className="tagline">
              <img src="images\tagline.png" width="100%"></img>
            </div>

            <div className="text">
              <span>Curated PG collection</span> <br></br>
                in Muradnagar
            </div>

            <div className="pics">
              <div className="pic1"><NavLink to="/choice"><img className="pic" src="images\boys.png"></img></NavLink></div>
              <div className="pic2"><NavLink to="/choice"><img className="pic" src="images\girls.png"></img></NavLink></div>
            </div>
        </div>
  )
}

export default App