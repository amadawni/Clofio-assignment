import React from "react";
import "./Buckettable.css";
function Buckettable() {
  return (
    <div className="container">
      <table className="table">
        <caption>Buckets you own</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Budget</th>
            <th>Spend</th>
            <th>Forecast</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>ACME Corp</td>
            <td>$200,000</td>
            <td>$173,762</td>
            <td>$205,049</td>
          </tr>
          <tr>
            <td>RAMAN Inc</td>
            <td>$200,000</td>
            <td>$124,762</td>
            <td>$292,629</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Buckettable;
