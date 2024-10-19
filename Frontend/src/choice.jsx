import './stylesheets/choice.css'
import { NavLink } from 'react-router-dom';

const Choice = () => {
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

            <div className="block1">
                <div className="up">
                    <div className="home">
                        <img src="images\home.png" width="90vh"></img>
                    </div>
                    <div className="text">
                        <span className="heading">Intrested in Sharing?</span><br></br>
                        <span className="content">Browse room sharing options</span>
                    </div>
                </div>
                <div className="down">
                    <img className="pic1" src="images\one.png" ></img>
                    <img className="pic2" src="images\two.png" ></img>
                </div>
            </div>
        </div>
    )
}

export default Choice