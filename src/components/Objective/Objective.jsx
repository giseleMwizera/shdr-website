// import React from "react";
// import "./Objective.css";

// function Objective(props) {
//   return (
//     <div className={`--objective ${props.position}`}>
//       <div className="--objective-text">
//         <h3>{props.heading}</h3>
//         <p>{props.text}</p>
//       </div>
//       <div className="--objective-img">
//         <img src={props.img} alt="Demonstrating image" />
//       </div>
//     </div>
//   );
// }

// export default Objective;

import React from "react";
import "./Objective.css";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { SiMicrosoftvisio } from "react-icons/si";
import { MdEmojiObjects } from "react-icons/md";

function Objective({ MISSION, ABOUTUS, VISION }) {
  return (
    <div className="--objective reveal">
      <div className="--aboutus">
        <div className="--aboutus-text">
          <h3>
            <GiGiftOfKnowledge className="--purpose-icon" /> About us
          </h3>
          <p>{ABOUTUS.text}</p>
        </div>
        <div className="--aboutus-img reveal">
          <img src={MISSION.img} alt="Aboutus Image" />
        </div>
      </div>
      <div className="--purpose-wrapper">
        <div className="--purpose vision reveal">
          <div className="--purpose-inner">
            <h3>
              <SiMicrosoftvisio className="--purpose-icon" /> Vision
            </h3>
            <p>{VISION.text}</p>
          </div>
        </div>
        <div className="--purpose mission reveal">
          <div className="--purpose-inner">
            <h3>
              <MdEmojiObjects className="--purpose-icon" /> Mission
            </h3>
            <p>{MISSION.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Objective;
