import React from "react";
import { useState } from "react";

const Header = () => {
  const [more, setMore] = useState(false);
  return (
    <div>
      {!more ? (
        <div>
          {" "}
          <div className="header">
            <div className="header__content">
              <h1 className="header__content-h1">
                Want a quick cash offer for your home?
              </h1>
              <p className="header__content-p">
                Fill up the form to be connected with one of our agents
              </p>
            </div>
            <div className="header__textFields">
            <input type="text" placeholder="What's the address?" />
            <input type="text" placeholder="and your name?" />
            <input type="text" placeholder="Phone number" />
            <div className="navbar__btn">
              <button className="" onClick={() => setMore(true)}>
                Get Offer!{" "}
              </button>
            </div>
          </div>
          </div>

        </div>
      ) : (
        <div>
          <div className="headertwo">
            <div className="headertwo__textFields">
              <input
                type="text"
                placeholder="What's the Condition of the house?"
              />
              <input type="text" placeholder="How many beds?" />
              <input type="text" placeholder="And how many baths" />
            </div>
            <div className="headertwo__textFields">
              <input
                type="text"
                placeholder="What's the Condition of the house?"
              />
              <input type="text" placeholder="How many beds?" />
              <input type="text" placeholder="And how many baths" />
            </div>

            <button className="headertwo__btn" onClick={() => setMore(false)}>
              Get Offer!{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
