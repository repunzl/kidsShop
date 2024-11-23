import React from 'react';
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our brand and mission</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            At Baby Fashion, we believe that style should be fun and accessible for everyone. Our mission is to
            provide a range of baby clothes that are comfortable, stylish, and affordable. We focus on providing the
            highest quality fabrics to ensure the best comfort for your little ones.
          </p>
        </div>

        <div className="about-image">
          <img src="https://i.pinimg.com/736x/03/58/b0/0358b052d722da7cac4807309f9d3a9f.jpg" alt="Baby fashion" />
        </div>
      </div>

      <div className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="https://i.pinimg.com/736x/43/71/0f/43710f32c6fc09258dc246870064ace3.jpg" alt="Team Member" />
          <h3>Jane Doe</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="https://i.pinimg.com/736x/47/81/ad/4781ad4bb7d6387f13d67ba2eb366e0d.jpg" alt="Team Member" />
          <h3>John Smith</h3>
          <p>Creative Director</p>
        </div>
        <div className="team-member">
          <img src="https://i.pinimg.com/736x/e8/83/ba/e883ba30bbf3da6ce6b0e22d042128c5.jpg" alt="Team Member" />
          <h3>Alice Johnson</h3>
          <p>Head of Marketing</p>
          
        </div>
        <div className="footer-note">
      © {new Date().getFullYear()} Baby Fashion. All rights reserved.
    </div>
      </div>
      
    </div>
  );
}

export default About;


