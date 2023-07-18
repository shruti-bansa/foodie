import React from "react";
import AboutImg from "../assets/images/4.jpeg";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src={AboutImg} alt="" />
          </div>

          <div className="content">
            <h3>What Makes Food Taste So Good?</h3>
            <p>
            Let's start at the beginning: Food enters your mouth, 
            meets your teeth and begins to be broken down by enzymes in your saliva. The morsel soon moves over your papillae,
             the few thousand bumps that line your tongue.
            </p>
            <p>
            Taste is not what you think. every schoolchild learns that it is one of the five senses,
            a partner of smell and sight and touch, a consequence of food flitting over 
            taste buds that send important signals—sweet or bitter,
             nutrient or poison?—to the brain.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
