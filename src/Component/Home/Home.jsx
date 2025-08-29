import React from 'react'
import "./Home.css"
import man from "../../assets/Man.png"
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div id="Home">
      <div className="lefthome">
        <div className="homedetail">
          <div className="line1">I'M</div>
          <div className="line2">ANANT KUMAR</div>
           <div className="line3">
              <h2>
                <Typewriter
                  words={["WEB DEVELOPER", "MERN STACK", "PYTHON DEVELOPER"]}
                  loop={true}
                  cursor
                  cursorStyle="*"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
            </div>
            <button className='hire-btn '>Start Project</button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  )
}

export default Home