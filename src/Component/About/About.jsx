import React from "react";
import "./About.css";
import Card from "../Card/Card";

const cards = [
  {
    title: "MERN STACK WEB DEVELOPER",
    bgImg: "https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1"
  },
  {
    title: "PYTHON",
    bgImg: "https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png"
  },
  {
    title: "DSA",
    bgImg: "https://e7.pngegg.com/pngimages/409/834/png-clipart-data-structures-and-algorithms-computer-icons-computer-software-others-miscellaneous-blue.png"
  },
  {
    title: "DJANGO",
    bgImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROipQGhHcta16kxNL5JysymnZQJIxUTp2Pu9WkBJrXqSUg0WM5mt3WjBMys3KVb0Zc1NU&usqp=CAU"
  }
];

const About = () => {
  return (
    <div id="About">
      {/* Left Timeline */}
      <div className="leftabout">
        <div className="timeline">
          <div className="timeline-item">
            <div className="circle"></div>
            <div className="content-card">
              <h1>Personal Info</h1>
              <ul>
                <li><span>NAME</span> : ANANT KUMAR</li>
                <li><span>AGE</span> : 21</li>
                <li><span>GENDER</span> : MALE</li>
                <li><span>LANGUAGE KNOWN</span> : HINDI, ENGLISH</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle"></div>
            <div className="content-card">
              <h1>Education</h1>
              <ul>
                <li><span>DEGREE</span> : BTECH</li>
                <li><span>BRANCH</span> : CSE</li>
                <li><span>COLLEGE</span> : PUNJAB TECHNICAL UNIVERSITY</li>
                <li><span>CGPA</span> : 8.2</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle"></div>
            <div className="content-card">
              <h1>Skills</h1>
              <ul>
                <li>MERN STACK</li>
                <li>PYTHON</li>
                <li>DJANGO</li>
                <li>DSA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>





    <div className="rightabout">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} bgImg={card.bgImg} />
      ))}
    </div>
  




    </div>
  );
};

export default About;
