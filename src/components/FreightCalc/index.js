import React, { useState } from "react";
import "./FreightCalc.css";

export default function FreightCalc() {
  const [smallbag, setSmallBag] = useState(0);
  const [mediumbag, setMediumBag] = useState(0);
  const [largebag, setLargeBag] = useState(0);
  const [requiredBoxes, setRequiredBoxes] = useState(0);
  const [errors, setErrors] = useState("");

  //function to handle optimum number of Boxes required

  const handleBoxes = () => {
    // check for invalid inputs
    if (
      smallbag < 0 ||
      smallbag === "" ||
      mediumbag < 0 ||
      mediumbag === "" ||
      largebag < 0 ||
      largebag === ""
    ) {
      setErrors("Quantity of Coffee Bags can not be Negetive..!");
      setRequiredBoxes(0);
      setSmallBag(0);
      setMediumBag(0);
      setLargeBag(0);
    } else {
      const totalSmallVolume = 736 * smallbag;
      const totalMediumVolume = 1144 * mediumbag;
      const totalLargeVolume = 3640 * largebag;
      const combinedVolume =
        totalSmallVolume + totalMediumVolume + totalLargeVolume;
      const volumeOfBox = 216000; // 60 x 60 x 60
      if (combinedVolume < volumeOfBox && combinedVolume > 0) {
        setRequiredBoxes(1);
        setErrors("");
      } else if (combinedVolume > volumeOfBox) {
        setRequiredBoxes(Math.ceil(combinedVolume / volumeOfBox));
        setErrors("");
      } else if (combinedVolume === 0) {
        setErrors("Please specify the number of Coffee Bags.");
      }
    }
  };

  // custom input logic
  const smallbagDecrease = () => {
    if (smallbag > 0) {
      setSmallBag(smallbag - 1);
    }
  };
  const smallbagIncrease = () => {
    if (smallbag >= 0) {
      setSmallBag(smallbag + 1);
    }
  };
  const mediumbagDecrease = () => {
    if (mediumbag > 0) {
      setMediumBag(mediumbag - 1);
    }
  };
  const mediumbagIncrease = () => {
    if (mediumbag >= 0) {
      setMediumBag(mediumbag + 1);
    }
  };
  const largebagDecrease = () => {
    if (largebag > 0) {
      setLargeBag(largebag - 1);
    }
  };
  const largebagIncrease = () => {
    if (largebag >= 0) {
      setLargeBag(largebag + 1);
    }
  };
  // custom input logic ends

  return (
    <>
      <div className="container">
        <div className="main-input-container">
          <div className="input-container">
            <h4>Coffee Bags Of 200g * X</h4>
            <div className="def-number-input number-input">
              <button onClick={smallbagDecrease} className="minus"></button>
              <input
                className="quantity"
                name="quantity"
                value={smallbag}
                onChange={e => setSmallBag(e.currentTarget.value)}
                type="number"
                min="0"
                max="1000"
              />
              <button onClick={smallbagIncrease} className="plus"></button>
            </div>
          </div>
          <div className="input-container">
            <h4>Coffee Bags Of 400g * X</h4>
            <div className="def-number-input number-input">
              <button onClick={mediumbagDecrease} className="minus"></button>
              <input
                className="quantity"
                name="quantity"
                value={mediumbag}
                onChange={e => setMediumBag(e.currentTarget.value)}
                type="number"
                min="0"
                max="1000"
              />
              <button onClick={mediumbagIncrease} className="plus"></button>
            </div>
          </div>
          <div className="input-container">
            <h4>Coffee Bags Of 1000g * X</h4>
            <div className="def-number-input number-input">
              <button onClick={largebagDecrease} className="minus"></button>
              <input
                className="quantity"
                name="quantity"
                value={largebag}
                onChange={e => setLargeBag(e.currentTarget.value)}
                type="number"
                min="0"
                max="1000"
              />
              <button onClick={largebagIncrease} className="plus"></button>
            </div>
          </div>
        </div>
        <div className="calculate-button">
          <button onClick={handleBoxes}>Figure Out Boxes For Me</button>
        </div>
        <div className="main-output-container">
          <div className="boxes">
            {requiredBoxes && (
              <>
                <span>Minimun Number of Boxes Required : </span>&nbsp;
                <span className="info-text">{requiredBoxes}</span>
              </>
            )}
          </div>
          {errors && <div className="errors">{errors}</div>}
        </div>
      </div>
    </>
  );
}
