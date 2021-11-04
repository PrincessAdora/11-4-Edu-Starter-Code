import React from "react";

// Import your components and data here

function Rows(props) {
  return (
    <tr className="App">
      {/* Code your components and  other JSX elements below this*/}
      <td>{props.school.AGGREGATION_NAME}</td>
      <td>{props.school.ENROLL_CNT}</td>
      <td>{props.school.GRAD_CNT}</td>
      <td>{props.school.GRAD_PCT}</td>
      <td>{props.school.LOCAL_CNT}</td>
      <td>{props.school.LOCAL_PCT}</td>
      <td>{props.school.REG_CNT}</td>
      <td>{props.school.REG_PCT}</td>
      <td>{props.school.REG_ADV_CNT}</td>
      <td>{props.school.REG_ADV_PCT}</td>
      <td>{props.school.NON_DIPLOMA_CREDENTIAL_CNT}</td>
      <td>{props.school.NON_DIPLOMA_CREDENTIAL_PCT}</td>
      <td>{props.school.STILL_ENR_CNT}</td>
      <td>{props.school.STILL_ENR_PCT}</td>
      <td>{props.school.DROPOUT_CNT}</td>
      <td>{props.school.DROPOUT_PCT}</td>

      {/* Add other cells using <td> and </td> element */}
    </tr>
  );
}

export default Rows;
