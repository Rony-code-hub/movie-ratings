import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./finalVerssion";
// import App from "./App";
// import StarRatting from "./starRatting";

// function Test() {
//   const [movieRatting, setMovieRatting] = useState(0);
//   return (
//     <div>
//       <StarRatting
//         maxRatting={10}
//         color="blue"
//         onSetRatting={setMovieRatting}
//       />
//       <p>This movie was rated {movieRatting} star</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRatting
      maxRatting={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRatting maxRatting={5} color="red" size="35" defaultRatting={3} />
    <Test /> */}
  </React.StrictMode>
);
