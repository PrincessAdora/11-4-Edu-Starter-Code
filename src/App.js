import "./styles.css";
import React from "react";
import Rows from "./components/rows";
// Import your components and data here
import data from "./data";

// Console.log the following values:
// a. Log the second school’s name
console.log(data[1].AGGREGATION_NAME);
// b. Log the 100th schools graduation percentage
console.log(data[99].GRAD_PCT);
// c. Log the 522nd schools dropout number
console.log(data[521].DROPOUT_CNT);
// d. Democracy Prep Charter School is located at an index of 842. Print out the percentage with advanced regents diplomas.
console.log(data[842].REG_ADV_PCT);
// e. Create a variable called schools and store every schools name in the array using a map function.
const schools = data.map((school) => {
  return school.AGGREGATION_NAME;
});

function App() {
  return (
    <div className="App">
      {/* Code your components and  other JSX elements below this*/}
      <table>
        <thead>
          <tr>
            <th>School</th>
            <th>Enrollment</th>
            <th>Graduated</th>
            <th>Grad Percent</th>
            <th>Local Count</th>
            <th>Local Percent</th>
            <th>Regent Count</th>
            <th>Regent Percent</th>
            <th>Advanced Regents Count</th>
            <th>Advanced Regents Percent</th>
            <th>Non-Diploma Credential Count</th>
            <th>Non-Diploma Credential Percent</th>
            <th>Still Enrolled Count</th>
            <th>Still Enrolled Percent</th>
            <th>Dropout Count</th>
            <th>Dropout Percent</th>
            {/* Add additional table headers below this line */}
          </tr>
        </thead>
        <Rows school={data[0]} />
        <Rows school={data[1]} />
        <Rows school={data[2]} />
        <Rows school={data[3]} />
        <Rows school={data[4]} />
        <Rows school={data[5]} />
      </table>
    </div>
  );
}

export default App;
