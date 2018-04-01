// Include the Main React Dependencies
const React = require("react");
const ReactDOM = require("react-dom");

// Include the main Parent Component
const Main = require("./components/children/Main.jsx");

// This code here allows us to render our main component (in this case Main)
// Note that the Id is "app" which matches that of the "index.html" file
ReactDOM.render(<Main />, document.getElementById("app"));