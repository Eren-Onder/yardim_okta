import React from "react";
import "../sql.json";
import "./datatable.css";
function Datatable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <table cellPadding={0} cellSpacing={0}>
      <thead className="a">
        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)} </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Datatable;
